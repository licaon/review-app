import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { get } from 'lodash';

import { IMatch } from 'interfaces/RouteInterface';
import { IReview } from 'interfaces/ReviewInterface'
import { getFirmReviews } from 'api/apiCalls';
import Loading from 'components/Loading/Loading';
import ReviewHeader from 'components/ReviewHeader/ReviewHeader';
import MyReview from 'components/MyReview/MyReview';
import ReviewComponent from 'components/Review/Review';

import { result } from 'mockedData/company';
import { reviews } from 'mockedData/reviews';
import {getMyReview} from "mockedData/myReview";

interface IProps {
    match: IMatch
}

interface IState {
    displayName?: string;
    myReview?: IReview;
    reviews: IReview[];
}

const Review = (props: IProps) => {
    const { match: { params: { firmId } } } = props;

    const [reviewsData, setReviewsData]:[IState, any] = useState({ reviews: [] });

    const showReviews = () => reviewsData.reviews.map(({
        reviewerPhoto, reviewerName, reviewScore, reviewTime, reviewComment
    }, index) => (
        <ReviewComponent
            key={index}
            reviewerPhoto={reviewerPhoto}
            reviewerName={reviewerName}
            reviewScore={reviewScore}
            reviewTime={reviewTime}
            reviewComment={reviewComment}
        />
    ));
    
    useEffect(() => {
        getFirmReviews(firmId)
        .then((data)=> {
            setReviewsData(data);
        })
        .catch(() => {
            // this should never happen
        });
      },
      [firmId]
    );

    const { displayName, myReview } = reviewsData;

    return (
        <Loading loading={!displayName}>
            <div>
                <h1>{displayName}</h1>
                <h2>Reviews</h2>
                <ReviewHeader averageReview={4.1} noOfReviews={27} />
                <MyReview firmId={firmId} firmName={displayName || ''} {...myReview} />
                <h3>Latest reviews</h3>
                {showReviews()}
            </div>
        </Loading>
    );
};

export default Review;

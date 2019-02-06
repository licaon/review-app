import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { get } from 'lodash';

import { IMatch } from 'interfaces/RouteInterface';
import { IReview } from 'interfaces/ReviewInterface'
import { GET_FIRM_DATA } from 'constants/api';
import Loading from 'components/Loading/Loading';
import ReviewHeader from 'components/ReviewHeader/ReviewHeader';
import MyReview from 'components/MyReview/MyReview';
import ReviewComponent from 'components/Review/Review';

import { result } from 'mockedData/company';
import { reviews } from 'mockedData/reviews';

interface IProps {
    match: IMatch
}

const Review = (props: IProps) => {
    const { match: { params: { firmId } } } = props;

    const [firmName, setFirmName]:[string, any] = useState('');
    const [availableReviews, setAvailableReviews ]:[IReview[], any] = useState([]);

    const showReviews = () => availableReviews.map(({
        reviewerPhoto, reviewerName, reviewScore, reviewTime, reviewContent
    }, index) => (
        <ReviewComponent
            key={index}
            reviewerPhoto={reviewerPhoto}
            reviewerName={reviewerName}
            reviewScore={reviewScore}
            reviewTime={reviewTime}
            reviewContent={reviewContent}
        />
    ));
    
    useEffect(() => {
        axios(
          `http://${GET_FIRM_DATA}${firmId}`,
        )
        .then((data)=> {
            get(data, 'result.companies.company.[0].displayName');
        })
        .catch(() => {
            setFirmName(get(result, 'result.companies.company.[0].displayName'));
            setAvailableReviews(reviews);
        });
      },
      [firmId]
    );

    return (
        <Loading loading={!firmName}>
            <div>
                <h1>{firmName}</h1>
                <h2>Reviews</h2>
                <ReviewHeader averageReview={4.1} noOfReviews={27} />
                <MyReview firmId={firmId} firmName={firmName}/>
                <h3>Latest reviews</h3>
                {showReviews()}
            </div>
        </Loading>
    );
};

export default Review;

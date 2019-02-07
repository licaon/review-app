import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { DODGER_BLUE } from 'constants/colors';
import { IMatch } from 'interfaces/RouteInterface';
import { IReview } from 'interfaces/ReviewInterface'
import { getFirmReviews } from 'api/apiCalls';
import Loading from 'components/Loading/Loading';
import ReviewHeader from 'components/ReviewHeader/ReviewHeader';
import MyReview from 'components/MyReview/MyReview';
import ReviewComponent from 'components/Review/Review';

const ReviewPage = styled.div`
    padding: 1rem;
`;

const FirmName = styled.h2`
    text-align: center;
`;

const ViewAllReviews = styled.h5`
    text-align: center;
    color: ${DODGER_BLUE};
`

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
            <ReviewPage>
                <FirmName>{displayName}</FirmName>
                <h3>Reviews</h3>
                <ReviewHeader averageReview={4.1} noOfReviews={27} />
                <MyReview firmId={firmId} firmName={displayName || ''} {...myReview} />
                <h4>Latest reviews</h4>
                {showReviews()}
                <ViewAllReviews color="red">View all reviews</ViewAllReviews>
            </ReviewPage>
        </Loading>
    );
};

export default Review;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { DODGER_BLUE } from 'constants/colors';
import LineSeparator from 'styled/LineSeparator';
import { Match } from 'interfaces/RouteInterface';
import { ReviewInterface } from 'interfaces/ReviewInterface'
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
`;

interface Props {
    match: Match;
}

interface State {
    displayName?: string;
    myReview?: ReviewInterface;
    reviews: ReviewInterface[];
}

const Reviews = (props: Props): React.ReactElement<Props> => {
    const { match: { params: { firmId } } } = props;

    const [reviewsData, setReviewsData]: [State, any] = useState({ reviews: [] });

    const showReviews = (): React.ReactNode[] => reviewsData.reviews.map(({
        reviewerPhoto, reviewerName, reviewScore, reviewTime, reviewComment
    }, index): React.ReactElement<any> => (
        <div key={`wrapper_${index}`}>
            <ReviewComponent
                key={`review_${index}`}
                reviewerPhoto={reviewerPhoto}
                reviewerName={reviewerName}
                reviewScore={reviewScore}
                reviewTime={reviewTime}
                reviewComment={reviewComment}
            />
            { index < reviewsData.reviews.length - 1 && <LineSeparator key={`lineseparator_${index}`} />}
        </div>
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
                <LineSeparator />
                <MyReview firmId={firmId} firmName={displayName || ''} {...myReview} />
                <LineSeparator />
                <h4>Latest reviews</h4>
                {showReviews()}
                <ViewAllReviews color="red">View all reviews</ViewAllReviews>
            </ReviewPage>
        </Loading>
    );
};

export default Reviews;

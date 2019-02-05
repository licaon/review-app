import React from 'react';

interface IProps {
    averageReview: number;
    noOfReviews: number;
}

const ReviewHeader = (props: IProps) => (
    <div>
        <div>{props.averageReview}</div>
        <div>from {props.noOfReviews} ratings</div>
        <div>View all reviews</div>
    </div>
);

export default ReviewHeader;

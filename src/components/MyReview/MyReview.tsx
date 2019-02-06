import React from 'react';
import moment from "moment";

interface IProps {
    reviewerPhoto?: string;
    reviewerName?: string;
    reviewStars?: number;
    reviewTime?: number;
    reviewContent?: string;
}

const MyReview = (props: IProps) => {
    const noReview = () => (
        <div>
            <h3>Rate and review</h3>
            <span>Share your experience to help others</span>
            <div>stars</div>
        </div>
    );

    const review = () => (
        <div>
            <div>{props.reviewerName}</div>
            <div>
                <div>
                    {props.reviewStars}
                </div>
                <div>
                    {moment(props.reviewTime).fromNow()} - hitta.se
                </div>
            </div>
            <div>
                {props.reviewContent ? props.reviewContent : <span>Describe your experience</span>}
            </div>
        </div>
    );
    return (
        <div>
            <div>{props.reviewerPhoto}</div>
            {props.reviewStars ? review() : noReview()}
        </div>
    );
};

export default MyReview;

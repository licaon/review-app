import React from 'react';
import moment from 'moment';

import { IReview } from 'interfaces/ReviewInterface';

interface IProps extends IReview {
}

const Review = (props: IProps) => (
    <div>
        <div>{props.reviewerPhoto}</div>
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
                {props.reviewContent}
            </div>
        </div>
    </div>
);

export default Review;

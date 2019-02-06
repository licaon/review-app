import React from 'react';
import moment from 'moment';
import StarRatingComponent from 'react-star-rating-component';

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
                    <StarRatingComponent
                        name="star"
                        starCount={5}
                        editing={false}
                        value={props.reviewScore}
                    />
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

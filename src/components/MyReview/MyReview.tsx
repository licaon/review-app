import React from 'react';
import { withRouter, RouteComponentProps  } from 'react-router-dom';
import moment from 'moment';
import StarRatingComponent from 'react-star-rating-component';

interface IProps extends RouteComponentProps {
    reviewerPhoto?: string;
    reviewerName?: string;
    reviewScore?: number;
    reviewTime?: number;
    reviewComment?: string;
    firmId: string;
    firmName: string;
}

const MyReview = (props: IProps) => {
    const onStarClick = (value:number) => {
        props.history.push(`/myreview/${props.firmId}?score=${value}&firmName=${props.firmName}`)
    };

    const onCommentClick = () => {
        props.history.push(`/myreview/${props.firmId}?score=${props.reviewScore}&firmName=${props.firmName}`)
    };
    const noReview = () => (
        <div>
            <h3>Rate and review</h3>
            <span>Share your experience to help others</span>
            <StarRatingComponent
                name="MyReview"
                value={0}
                onStarClick={onStarClick}
            />
        </div>
    );

    const review = () => (
        <div>
            <div>{props.reviewerName}</div>
            <div>
                <div>
                    <StarRatingComponent
                        name="MySavedReview"
                        value={props.reviewScore || 0}
                        editing={false}
                    />
                </div>
                <div>
                    {moment(props.reviewTime).fromNow()} - hitta.se
                </div>
            </div>
            <div>
                {props.reviewComment ? props.reviewComment : <span onClick={onCommentClick}>Describe your experience</span>}
            </div>
        </div>
    );
    return (
        <div>
            <div>{props.reviewerPhoto}</div>
            {props.reviewScore ? review() : noReview()}
        </div>
    );
};

export default withRouter(MyReview);

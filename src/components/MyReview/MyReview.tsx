import React from 'react';
import { withRouter, RouteComponentProps  } from 'react-router-dom';
import moment from 'moment';

interface IProps extends RouteComponentProps {
    reviewerPhoto?: string;
    reviewerName?: string;
    reviewScore?: number;
    reviewTime?: number;
    reviewContent?: string;
    firmId: string;
}

const MyReview = (props: IProps) => {
    const noReview = () => (
        <div>
            <h3>Rate and review</h3>
            <span>Share your experience to help others</span>
            <div onClick={() => { props.history.push(`/myreview/${props.firmId}?score=3`) }}>stars</div>
        </div>
    );

    const review = () => (
        <div>
            <div>{props.reviewerName}</div>
            <div>
                <div>
                    {props.reviewScore}
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
            {props.reviewScore ? review() : noReview()}
        </div>
    );
};

export default withRouter(MyReview);

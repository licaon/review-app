import React from 'react';
import moment from 'moment';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IReview } from 'interfaces/ReviewInterface';
import SmallText from 'styled/SmallText';
import Profile from 'assets/images/image1.jpg';
import * as ReviewStyled from 'styled/Review';

interface IProps extends IReview {
}


const Review = (props: IProps) => (
    <ReviewStyled.ReviewWraper>
        <ReviewStyled.UserImage > 
            { props.reviewerPhoto ?
            <ReviewStyled.ProfilePhoto src={Profile} /> :
            <FontAwesomeIcon icon="user-circle" />
        }
        </ReviewStyled.UserImage>
        <ReviewStyled.UserReviewWrapper>
            <div>
                <ReviewStyled.UserName>
                    {props.reviewerName || 'Anonym'}
                </ReviewStyled.UserName>
                <ReviewStyled.StarsWrapper>
                    <StarRatingComponent
                        name="star"
                        starCount={5}
                        editing={false}
                        value={props.reviewScore}
                    />
                </ReviewStyled.StarsWrapper>
                <ReviewStyled.TimeWrapper>
                    <SmallText>{moment(props.reviewTime).fromNow()} - hitta.se</SmallText>
                </ReviewStyled.TimeWrapper>
            </div>
            <ReviewStyled.Comment>
                {props.reviewComment}
            </ReviewStyled.Comment>
        </ReviewStyled.UserReviewWrapper>
    </ReviewStyled.ReviewWraper>
);

export default Review;

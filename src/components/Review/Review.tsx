import React from 'react';
import moment from 'moment';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';

import { IReview } from 'interfaces/ReviewInterface';
import { PINK_SWAN } from 'constants/colors';
import SmallText from 'styled/SmallText';
import Profile from 'assets/images/image1.jpg';

const ReviewWraper = styled.div`
    width: 100%;
`;

const UserImage = styled.div`
    display: inline-block;
    font-size: 35px;
    color: ${PINK_SWAN};
    width: 1em;
    height: 1em;
    vertical-align: top;
    margin-right: 0.6rem;
    & svg {
        position: absolute;
    }
`

const ProfilePhoto = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 1rem;
`

const UserReviewWrapper = styled.div`
    display: inline-block;
    width: calc(100% - 2.8rem);
`;

const UserName = styled.div`
    font-size: 14px;
    font-weight: bold;
`;

const StarsWrapper = styled.div`
    display: inline-block;
    font-size: 11px;
    & .dv-star-rating-empty-star {
        color: ${PINK_SWAN} !important;
    }
`;

const TimeWrapper = styled.div`
    display: inline-block;
    margin-left: 0.5rem;
`;

const Comment = styled.div`
    font-size: 12px;
    margin-top: 0.5rem;
`;


interface IProps extends IReview {
}


const Review = (props: IProps) => (
    <ReviewWraper>
        <UserImage > 
            { props.reviewerPhoto ?
            <ProfilePhoto src={Profile} /> :
            <FontAwesomeIcon icon="user-circle" />
        }
        </UserImage>
        <UserReviewWrapper>
            <div>
                <UserName>{props.reviewerName || 'Anonym'}</UserName>
                <StarsWrapper>
                    <StarRatingComponent
                        name="star"
                        starCount={5}
                        editing={false}
                        value={props.reviewScore}
                    />
                </StarsWrapper>
                <TimeWrapper>
                    <SmallText>{moment(props.reviewTime).fromNow()} - hitta.se</SmallText>
                </TimeWrapper>
            </div>
            <Comment>
                {props.reviewComment}
            </Comment>
        </UserReviewWrapper>
    </ReviewWraper>
);

export default Review;

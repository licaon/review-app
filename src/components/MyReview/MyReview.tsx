import React from 'react';
import { withRouter, RouteComponentProps  } from 'react-router-dom';
import moment from 'moment';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    IconLookup,
    IconDefinition,
    findIconDefinition
  } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components';

import { PINK_SWAN, DODGER_BLUE } from 'constants/colors';
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
`;

const ProfilePhoto = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 1rem;
`;

const UserReviewWrapper = styled.div`
    display: inline-block;
    width: calc(100% - 2.8rem);
`;

const RateReview = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

const BigStar = styled.div`
    display: inline-block;
    font-size: 34px;
    text-align: center;
    padding-right: 1rem;
    color: ${PINK_SWAN};
    margin-top: 0.7rem;
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

const NoComment = styled.div`
    font-size: 15px;
    margin-top: 0.5rem;
    color: ${DODGER_BLUE};
`;

export interface IMyReview {
    reviewerPhoto?: string;
    reviewerName?: string;
    reviewScore?: number;
    reviewTime?: number;
    reviewComment?: string;
}
interface IProps extends RouteComponentProps, IMyReview {
    firmId: string;
    firmName: string;
}

const MyReview = (props: IProps) => {
    const onStarClick = (value:number) => {
        props.history.push(`/myreview/${props.firmId}?score=${value}&firmName=${props.firmName}`)
    };

    const onCommentClick = () => {
        props.history.push(`/myreview/${props.firmId
        }?score=${props.reviewScore
        }&firmName=${props.firmName
        }${props.reviewerName ? `&reviewerName=${props.reviewerName}` : ''}`)
    };
    const noReview = () => {
        const starLookup: IconLookup = { prefix: 'far', iconName: 'star' };
        const starIconDefinition: IconDefinition = findIconDefinition(starLookup);
        return (
        <UserReviewWrapper>
            <RateReview>Rate and review</RateReview>
            <div>
                <SmallText>Share your experience to help others</SmallText>
            </div>
            <StarRatingComponent
                name="MyReview"
                value={0}
                onStarClick={onStarClick}
                renderStarIcon={() => (
                    <BigStar>
                        <FontAwesomeIcon icon={starIconDefinition} />
                    </BigStar>
                )}
            />
        </UserReviewWrapper>
    )
    };

    const review = () => (
        <UserReviewWrapper>
            <UserName>{props.reviewerName || 'Anonym'}</UserName>
            <StarsWrapper>
                <StarRatingComponent
                    name="MySavedReview"
                    value={props.reviewScore || 0}
                    editing={false}
                />
            </StarsWrapper>
            <TimeWrapper>
                    <SmallText>{moment(props.reviewTime).fromNow()} - hitta.se</SmallText>
            </TimeWrapper>
            <div>
                {props.reviewComment ?
                <Comment>{props.reviewComment}</Comment>:
                <NoComment onClick={onCommentClick}>Describe your experience</NoComment>
                }
            </div>
        </UserReviewWrapper>
    );
    return (
        <ReviewWraper>
            <UserImage > 
                { props.reviewerPhoto ?
                <ProfilePhoto src={Profile} /> :
                <FontAwesomeIcon icon="user-circle" />
                }
            </UserImage>
            {props.reviewScore ? review() : noReview()}
        </ReviewWraper>
    );
};

export default withRouter(MyReview);

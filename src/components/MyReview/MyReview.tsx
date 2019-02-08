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
import * as ReviewStyled from 'styled/Review';

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
        <ReviewStyled.UserReviewWrapper>
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
        </ReviewStyled.UserReviewWrapper>
    )
    };

    const review = () => (
        <ReviewStyled.UserReviewWrapper>
            <ReviewStyled.UserName>
                {props.reviewerName || 'Anonym'}
            </ReviewStyled.UserName>
            <ReviewStyled.StarsWrapper>
                <StarRatingComponent
                    name="MySavedReview"
                    value={props.reviewScore || 0}
                    editing={false}
                />
            </ReviewStyled.StarsWrapper>
            <ReviewStyled.TimeWrapper>
                    <SmallText>
                        {moment(props.reviewTime).fromNow()} - hitta.se
                    </SmallText>
            </ReviewStyled.TimeWrapper>
            <div>
                {props.reviewComment ?
                <ReviewStyled.Comment>{props.reviewComment}</ReviewStyled.Comment>:
                <NoComment onClick={onCommentClick}>Describe your experience</NoComment>
                }
            </div>
        </ReviewStyled.UserReviewWrapper>
    );
    return (
        <ReviewStyled.ReviewWraper>
            <ReviewStyled.UserImage > 
                { props.reviewerPhoto ?
                <ReviewStyled.ProfilePhoto src={Profile} /> :
                <FontAwesomeIcon icon="user-circle" />
                }
            </ReviewStyled.UserImage>
            {props.reviewScore ? review() : noReview()}
        </ReviewStyled.ReviewWraper>
    );
};

export default withRouter(MyReview);

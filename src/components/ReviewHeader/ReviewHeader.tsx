import React from 'react';
import styled from 'styled-components';

import { TANGERINE_YELLOW, DODGER_BLUE } from 'constants/colors';
import SmallText from 'styled/SmallText';

const ReviewHeaderWrapper = styled.div`
    width: 100%;
`

const AverageScore = styled.div`
    display: inline-flex;
    background-color: ${TANGERINE_YELLOW};
    width: 2rem;
    height: 2rem;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    border-radius: 0.5rem;
`
const RatingsCounter = styled.div`
    display: inline-flex;
    margin-left: 0.5rem;
    justify-content: center;
    flex-direction: column;
    width: 7rem;
`;

const ViewAllReviews = styled.div`
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
    text-align: right;
    width: calc(100% - 10rem);
    font-size: 14px;
    color: ${DODGER_BLUE};
`;

interface IProps {
    averageReview: number;
    noOfReviews: number;
}

const ReviewHeader = (props: IProps) => (
    <ReviewHeaderWrapper>
        <AverageScore>{props.averageReview}</AverageScore>
        <RatingsCounter>
            <SmallText>from {props.noOfReviews} ratings</SmallText>
        </RatingsCounter>
        <ViewAllReviews>View all reviews</ViewAllReviews>
    </ReviewHeaderWrapper>
);

export default ReviewHeader;

import React, { useState } from 'react';
import { RouteComponentProps  } from 'react-router-dom';
import queryString from 'query-string';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    IconLookup,
    IconDefinition,
    findIconDefinition
  } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components';

import { IMatch } from 'interfaces/RouteInterface';
import { getMyReview } from 'mockedData/myReview';
import { saveMyReview } from 'api/apiCalls';
import { DODGER_BLUE, PINK_SWAN, TANGERINE_YELLOW } from 'constants/colors';
import SmallText from 'styled/SmallText';
import LineSeparator from 'styled/LineSeparator';
import Loading from 'components/Loading/Loading';
import Modal from 'components/Modal/Modal';

const MyReviewPage = styled.div`
    text-align: center;
`;

const HeaderWrapper = styled.div`
    color: white;
    background-color: ${DODGER_BLUE};
`;

const Button = styled.button`
    display: inline-flex;
    background-color: ${DODGER_BLUE};
    border: none;
    color: white;
    font-size: 12px;
    width: 5rem;
    height: 2rem;
    justify-content: center;
    text-align: center;
    padding: 0;
`;

const FirmName = styled.div`
    font-size: 16px;
    display: inline-flex;
    width: calc(100% - 10rem);
    height: 2rem;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

const StarsWrapper = styled.div`
    & .dv-star-rating-empty-star {
        color: red !important;
    }
`;

const ContentWrapper = styled.div`
    padding: 0 0.5rem;
`;

const BigStarEmpty = styled.div`
    display: inline-block;
    font-size: 34px;
    text-align: center;
    padding-right: 1rem;
    color: ${PINK_SWAN};
    margin-top: 0.7rem;
`;

const BigStarFull = styled.div`
    display: inline-block;
    font-size: 34px;
    text-align: center;
    padding-right: 1rem;
    color: ${TANGERINE_YELLOW};
    margin-top: 0.7rem;
`;

const StarExplained = styled.div`
    margin: 0.5rem;
`;

const NameInput = styled.input`
    ::placeholder{
        color: ${PINK_SWAN}90;
    }
    width: 100%;
    height: 1.5rem;
    font-size: 14px;
    border: 0;
`;

const CommentTextarea = styled.textarea`
    ::placeholder{
        color: ${PINK_SWAN}90;
    }
    width: 100%;
    height: 3rem;
    font-size: 14px;
    border: 0;
    padding: 0;
`;

interface IProps extends RouteComponentProps {
    match: IMatch
}

interface IQueryParams {
    [key: string]: string | string[] | undefined;
}

interface IScoreText {
    [key: number]: string;

}

const MyReview = (props: IProps) => {
    const { match: { params: { firmId } } } = props;
    const query: IQueryParams = queryString.parse(props.location.search);
    const myReview = getMyReview();

    const [name, setName]:[string, any] = useState(String(query.reviewerName || ''));
    const [comment, setComment]:[string, any] = useState(myReview.reviewComment);
    const [score, setScore]:[number, any] = useState(Number(query.score));
    const [showLoader, setShowLoader]:[boolean, any] = useState(false);
    const [showModal, setShowModal]:[boolean, any] = useState(false);

    const onStarClick = (value: number) => { setScore(value); };

    const scoreText: IScoreText = {
        5: 'I loved it',
        4: 'I liked it',
        3: 'It was OK',
        2: 'I didn\'t like it',
        1: 'I hated it',
    };

    const saveReview = () => {
        setShowLoader(true);
        saveMyReview({
            firmId,
            myReview: {
                reviewerName: String(name),
                reviewScore: score,
                reviewComment: comment,
            }
        })
        .then((response) => {
            setShowLoader(false);
            setShowModal(true);
        });
    };

    const onModalAction = () => {
        props.history.push(`/review/${firmId}`);
    }

    const farStarLookup: IconLookup = { prefix: 'far', iconName: 'star' };
    const farStarIconDefinition: IconDefinition = findIconDefinition(farStarLookup);
    const fasStarLookup: IconLookup = { prefix: 'fas', iconName: 'star' };
    const fasIconDefinition: IconDefinition = findIconDefinition(fasStarLookup);

    return (
        <MyReviewPage>
            <Loading loading={showLoader} />
            <Modal
                show={showModal}
                title="Thank you for your review"
                content="You're helping others make smarter decisions every day."
                onButtonClick={onModalAction}
            />
            <HeaderWrapper>
                <Button onClick={() => { props.history.goBack(); }}>Close</Button>
                <FirmName>{query.firmName}</FirmName>
                <Button onClick={saveReview}>Save</Button>
            </HeaderWrapper>
            <ContentWrapper>
                <StarsWrapper>
                    <StarRatingComponent
                        name="MyReview"
                        value={score}
                        onStarClick={onStarClick}
                        renderStarIcon={(index, value) => index <= value ?
                            (
                                <BigStarFull>
                                    <FontAwesomeIcon icon={fasIconDefinition} />
                                </BigStarFull>
                            ) :
                            (
                                <BigStarEmpty>
                                    <FontAwesomeIcon icon={farStarIconDefinition} />
                                </BigStarEmpty>
                            )
                        }

                    />
                </StarsWrapper>
                <StarExplained>
                    <SmallText>{scoreText[score]}</SmallText>
                </StarExplained>
                <LineSeparator />
                <NameInput placeholder="Your name" value={name} onChange={(event) => { setName(event.target.value); }}/>
                <LineSeparator />
                <CommentTextarea placeholder="Add more details on your experience..." value={comment} onChange={(event) => { setComment(event.target.value); }} />
                <LineSeparator />
            </ContentWrapper>
        </MyReviewPage>
    );
};

export default MyReview;

import styled from 'styled-components';

import { PINK_SWAN, DODGER_BLUE } from 'constants/colors';

export const ReviewWraper = styled.div`
    width: 100%;
`;

export const UserImage = styled.div`
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

export const ProfilePhoto = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 1rem;
`;

export const UserReviewWrapper = styled.div`
    display: inline-block;
    width: calc(100% - 2.8rem);
`;

export const UserName = styled.div`
    font-size: 14px;
    font-weight: bold;
`;

export const StarsWrapper = styled.div`
    display: inline-block;
    font-size: 11px;
    & .dv-star-rating-empty-star {
        color: ${PINK_SWAN} !important;
    }
`;

export const TimeWrapper = styled.div`
    display: inline-block;
    margin-left: 0.5rem;
`;

export const Comment = styled.div`
    font-size: 12px;
    margin-top: 0.5rem;
`;
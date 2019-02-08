import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { DODGER_BLUE, PINK_SWAN, WHITE_SMOKE } from 'constants/colors';
import LineSeparator from 'styled/LineSeparator';

interface ModalOverlay {
    show: boolean;
}

const ModalOverlay = styled.div`
    display: ${ (p: ModalOverlay) => p.show ? 'block' : 'none'};
    background-color: ${PINK_SWAN}80;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
`;

const ModalWrapper = styled.div`
    position: absolute;
    width: 20rem;
    min-height: 10rem;
    background-color: ${WHITE_SMOKE};
    top: calc(50% - 5rem);
    left: calc(50% - 10rem);
    border-radius: 1rem;
`;

const Title = styled.h3`
`;

const Content = styled.div`
  padding: 0 1rem;
`;

const Button = styled.button`
    background-color: ${WHITE_SMOKE};
    border: none;
    color: ${DODGER_BLUE};
    font-size: 18px;
    font-weight: bold;
    padding: 0;
    width: 100%;
    height: 3rem;
    border-radius: 0 0 1rem 1rem;
`;

interface Props {
    show: boolean;
    title: string;
    content: string;
    onButtonClick(): void;
}

const Modal = (props: Props): React.ReactElement<Props> => {
    return (
        <ModalOverlay show={props.show}>
            <ModalWrapper>
                <Title>{props.title}</Title>
                <Content>{props.content}</Content>
                <LineSeparator />
                <Button onClick={props.onButtonClick}>Okay!</Button>
            </ModalWrapper>
        </ModalOverlay>
    );
}

Modal.defaultProps = {
    show: true,
}

export default Modal;

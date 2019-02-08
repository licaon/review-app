import React, { ReactNode } from 'react';
import { CubeGrid } from 'styled-spinkit';
import styled from 'styled-components';

const LoaderOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF80;
    z-index: 100;
`;

const LoaderWrapper = styled.div`
    position: absolute;
    top: calc(50% - 60px);
    left: calc(50% - 20px);
`;

interface Props {
    loading: boolean;
    children?: ReactNode;
}

const Loading = (props: Props): React.ReactElement<Props> => {
    const { loading, children } = props;
    return (
        <div>
            {loading ?
                <LoaderOverlay>
                    <LoaderWrapper>
                        <CubeGrid />
                    </LoaderWrapper>
                </LoaderOverlay> : children }
        </div>
    );
}

export default Loading;

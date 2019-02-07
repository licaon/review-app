import React, { ReactNode } from 'react';
import { CubeGrid } from 'styled-spinkit';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
    position: absolute;
    top: calc(50% - 60px);
    left: calc(50% - 20px);
`;

interface IProps {
    loading: boolean;
    children: ReactNode;
}

const Loading = (props: IProps) => {
    const { loading, children } = props;
    return (
        <div>
            {loading ? <LoaderWrapper><CubeGrid /></LoaderWrapper> : children }
        </div>
    );
}

export default Loading;

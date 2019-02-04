import React, { ReactNode } from 'react';

interface IProps {
    loading: boolean;
    children: ReactNode;
}

const Loading = (props: IProps) => {
    const { loading, children } = props;
    return (
        <div>
            {loading ? <div>Loading...</div> : children }
        </div>
    );
}

export default Loading;

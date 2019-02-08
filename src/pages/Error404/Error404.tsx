import React from 'react';
import { RouteComponentProps  } from 'react-router-dom';

interface IProps extends RouteComponentProps {

};

const Error404 = (props: IProps) => {
    setTimeout(() => props.history.push(`/`), 5000);
    return (
        <div>
            Ops! Page not found! You will be redirected to homepage
        </div> 
    )
};

export default Error404;
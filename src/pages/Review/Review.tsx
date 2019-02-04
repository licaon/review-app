import React, { Component } from 'react';

import { IMatch } from 'interfaces/RouteInterface';
import logo from 'assets/images/logo.svg';
import 'pages/Home/Home.css';

interface IProps {
    match: IMatch
};

const Review = (props: IProps) => {
    const { match } = props;
    return (
        <div>We should see: {match.params.firmId}</div>
    );
}

export default Review;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { get } from 'lodash';

import { IMatch } from 'interfaces/RouteInterface';
import { GET_FIRM_DATA } from 'constants/api';
import Loading from 'components/Loading/Loading';

import { result } from 'mockedData/company';

interface IProps {
    match: IMatch
};

const Review = (props: IProps) => {
    const [firmName, setFirmName] = useState(undefined);
    const { match: { params: { firmId } } } = props;
    let counter = 0;

    useEffect(() => {
        axios(
          `http://${GET_FIRM_DATA}${firmId}`,
        )
        .then((data)=> {
            get(data, 'result.companies.company.[0].displayName');
        })
        .catch(() => {
            setFirmName(get(result, 'result.companies.company.[0].displayName'));
        });
      },
      [firmId]
    );

    return (
        <Loading loading={!firmName}>
            {firmName}
        </Loading>
    );
}

export default Review;

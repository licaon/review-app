import React, { useState, useEffect } from 'react';
import { RouteComponentProps  } from 'react-router-dom';
import { IMatch } from 'interfaces/RouteInterface';
import queryString from 'query-string';

interface IProps extends RouteComponentProps {
    match: IMatch
}

interface IQueryParams {
    [key: string]: string | string[] | undefined;
}

const MyReview = (props: IProps) => {
    const { match: { params: { firmId } } } = props;
    const query: IQueryParams = queryString.parse(props.location.search);

    const [name, setName]:[string, any] = useState('');
    const [comment, setComment]:[string, any] = useState('');
    const [score, setScore]:[string | string[] | undefined, any] = useState(query.score);

    const saveReview = () => {
      console.log(JSON.stringify({
          score: score,
          name: name,
          comment: comment,
      }))
    };
    return (
        <div>
            <div>
                <button onClick={() => { props.history.goBack(); }}>Close</button>
                <h3>{firmId}</h3>
                <button onClick={saveReview}>Save</button>
            </div>
            <div>{score} stars</div>
            <input placeholder="Your name" value={name} onChange={(event) => { setName(event.target.value); }}/>
            <textarea placeholder="Add more details on your experience..." value={comment} onChange={(event) => { setComment(event.target.value); }} />
        </div>
    );
};

export default MyReview;

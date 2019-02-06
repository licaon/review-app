import React, { useState, useEffect } from 'react';
import { RouteComponentProps  } from 'react-router-dom';
import { IMatch } from 'interfaces/RouteInterface';
import queryString from 'query-string';
import StarRatingComponent from 'react-star-rating-component';

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

    const [name, setName]:[string, any] = useState('');
    const [comment, setComment]:[string, any] = useState('');
    const [score, setScore]:[number, any] = useState(Number(query.score));

    const scoreText: IScoreText = {
        5: 'I loved it',
        4: 'I liked it',
        3: 'It was OK',
        2: 'I didn\'t like it',
        1: 'I hated it',
    };

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
                <h3>{query.firmName}</h3>
                <button onClick={saveReview}>Save</button>
            </div>
            <StarRatingComponent
                name="MyReview"
                value={score}
                onStarClick={setScore}
            />
            <span>{scoreText[score]}</span>
            <input placeholder="Your name" value={name} onChange={(event) => { setName(event.target.value); }}/>
            <textarea placeholder="Add more details on your experience..." value={comment} onChange={(event) => { setComment(event.target.value); }} />
        </div>
    );
};

export default MyReview;

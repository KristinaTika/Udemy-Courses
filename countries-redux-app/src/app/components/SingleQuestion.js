import React from 'react';
import RadioButton from './RadioButton';

const SingleQuestion = (props) => {

    console.log(props.question);
    const { question, right, wrong, id } = props.question;

    let renderAnswers = wrong.map(w => <RadioButton answer={w} id={id} />);

    return (
        <li>
            <h2> {question }</h2>
            
        </li>
    );
};

export default SingleQuestion;
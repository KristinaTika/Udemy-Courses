import React from 'react';
import StyledButton from './StyledButton';
import './FlagAnswer.css';

const FlagAnswer = ({correct, answer, onNext}) => {

    return (
        <div className="flag-answer">
            <strong>
            { correct
                ? `Correct! ${answer}`
                : `The answer is incorrect! Correct answer: ${answer}`
            }
            </strong>
            <StyledButton Button text="NEXT" onClick={onNext} />
        </div>
    );
};

export default FlagAnswer;
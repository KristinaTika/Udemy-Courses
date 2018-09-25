import React, { Component } from 'react';



class QuestionItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            correctAnswer: false,
        }

        this.mapIncorrectAnswers = this.mapIncorrectAnswers.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
        this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
    }

    handleAnswer(e) {
        if (e.target.value === "incorrectAnswer") {
            this.setState({
                [e.target.value]: true,
                correctAnswer: false
            });
        };

        if (e.target.value === "correctAnswer") {
            this.setState({
                [e.target.value]: true,
                incorrectAnswer: false
            });
        };
    }

    handleSubmitAnswer(e) {

        let { correctAnswer } = this.state;

        if (correctAnswer === true) {
            this.props.plusCounter()
        }
        // if (incorrectAnswer === true) {
        //     minusCounter++;
        // }

        this.setState({
            correctAnswer: false,
            incorrectAnswer: false,
        });
    }


    mapIncorrectAnswers(answers) {
        return answers.map((a) => {
            return <li key={a}>
                <input type="radio" name="question" value="incorrectAnswer" onClick={this.handleAnswer} />{a}
            </li>
        })
    }

    render() {
        const { question, correctAnswer, incorrectAnswers } = this.props.q;
        return (
            <li>
                <h2>{question}</h2>
                <form>
                    <input type="radio" name="question" value="correctAnswer" onClick={this.handleAnswer} /> {correctAnswer}
                    <ul>
                        {this.mapIncorrectAnswers(incorrectAnswers)}
                    </ul>
                    <input type="button" value="My answer" onClick={this.handleSubmitAnswer} required />
                    < hr />
                </form>
            </li>
        );
    }
};

export default QuestionItem;
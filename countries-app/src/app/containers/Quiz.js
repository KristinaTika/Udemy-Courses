import React, { Component } from 'react';
import { questionService } from '../../services/questionService';
import QuestionItem from '../components/QuestionItem';

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            errorMessage: "",
            plusCounter: 0,
            minusCounter: 0,
        }
        this.renderQuestions = this.renderQuestions.bind(this);
        this.handleQuizSubmission = this.handleQuizSubmission.bind(this);
        this.plusCounter = this.plusCounter.bind(this);
    }


    componentDidMount() {
        questionService.fetchEasyQuiz()
            .then(res => {
                this.setState({
                    questions: res
                });
            })
            .catch((error) => {
                this.setState({
                    errorMessage: error
                });
            });
    }

    renderQuestions() {
        const { questions } = this.state;
        if (!questions) {
            return <div>Loading Quiz</div>
        }
        return questions.map((q, i) => {
            return <QuestionItem key={i} q={q} plusCounter={this.plusCounter} />
        })
    }

    handleQuizSubmission(e) {
        e.preventDefault();

    }

    plusCounter(answer) {
        let { plusCounter } = this.state;
        let counter;
        if (answer === true) {
            counter = ++plusCounter;
        }
        counter = --plusCounter

        this.setState({
            plusCounter: counter
        });
    }


    render() {
        return (
            <div>
                <div>
                    {this.state.errorMessage !== "" ? "Couldn't load countries" : ""}
                </div>
                <ol>
                    {this.renderQuestions()}
                </ol>
                <input type="button" value="Submit answers" onSubmit={this.handleQuizSubmission} required />
            </div>
        );
    }
}

export default Quiz;
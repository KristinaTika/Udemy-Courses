import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz } from '../action-creators/actions';
import Loader from '../partials/Loader';
import './Quiz.css';
import SingleQuestion from '../components/SingleQuestion';

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: [],
        }

        this.handleCategory = this.handleCategory.bind(this);
        this.displayQuestions = this.displayQuestions.bind(this);
    }

    handleCategory(e) {
        e.preventDefault();
        this.props.fetchQuiz(e.target.value);
    }

    displayQuestions() {
        const { questions } = this.props;
        if (!questions) {
            return <Loader />;
        }
        return questions.map((question, i) => {
            return <SingleQuestion key={i} question={question} />
        });
    }

    render() {
        return (
            <div id="quiz-container">
                <h2> Please choose category: </h2>
                <div>
                    <button value="easy" onClick={this.handleCategory}> Easy </button>
                    <button value="medium" onClick={this.handleCategory}> Medium </button>
                    <button value="hard" onClick={this.handleCategory}> Hard </button>
                </div>
                <div>
                    <h2> Geo Quiz</h2>
                    <form>
                        <ol>
                            {this.displayQuestions()}
                        </ol>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps, { fetchQuiz })(Quiz);
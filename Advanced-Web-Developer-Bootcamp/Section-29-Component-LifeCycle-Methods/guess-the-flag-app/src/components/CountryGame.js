import React, { Component } from 'react';
import FlagQuestion, { QuestionStates } from './FlagQuestion';
import { flagService } from '../services/FlagService';
import shuffle from 'shuffle-array';

class CountryGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countries: [],
            options: [],
            correctOption: undefined,
            questionState: undefined,
        }

        this.onGuess = this.onGuess.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    componentDidMount() {
        flagService.fetchFlags()
            .then((countries) => {
                const correctOption = Math.floor(Math.random() * countries.length); // get a random country from an array
                const options = this._getOptions(correctOption, countries); // passing a random index(random country) to a function called _getOptions which gives us 4 options for out question
                this.setState({
                    countries,
                    correctOption,
                    options,
                    questionState: QuestionStates.QUESTION
                });
            })
            .catch(console.warn)
    }

    onGuess(answer) {
        const {correctOption} = this.state;
        let questionState = answer === correctOption ?
                            QuestionStates.ANSWER_CORRECT :
                            QuestionStates.ANSWER_WRONG;
        this.setState({questionState});
      }
    
      nextQuestion() {
        const {countries} = this.state;
        const correctOption = Math.floor(Math.random() * countries.length);
        const options = this._getOptions(correctOption, countries);
        this.setState({
          correctOption,
          options,
          questionState: QuestionStates.QUESTION
        });
      }
    
      _getOptions(correctOption, countries) {
        let options = [correctOption];
        let tries = 0;
        while (options.length < 4 && tries < 15) {
          let option = Math.floor(Math.random() * countries.length); // we are tracking just the corect option, we don't care about the rest
          if (options.indexOf(option) === -1 ) {
            options.push(option);
          } else {
            tries++;
          }
        }
        return shuffle(options);
      }
    
      render() {
        let {
          countries,
          correctOption,
          options,
          questionState
        } = this.state;
        let output = <div>Loading...</div>;
        if (correctOption !== undefined) {
          const {flag, name} = countries[correctOption];
          let opts = options.map(opt => {
            return {
              id: opt,
              name: countries[opt].name
            };
          });
          output = (
            <FlagQuestion
              answerText={name} // string that shoud be displayed for the correct answer
              onGuess={this.onGuess} // when the user clicks on guess button
              onNext={this.nextQuestion}  // when the user clicks on next after they've guessed
              options={opts} // 4 options, the aray we just created of objects widh ids and names
              questionState={questionState} // start out as a QUESTION and then we'll transition to correct or wrong
              flag={flag}/>
          );
        }
        return (
          <div style={{marginTop: '15px'}}>
            {output}
          </div>
        );
      }
    }

export default CountryGame;


 
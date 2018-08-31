import React, { Component } from 'react';
import './App.css';
import InstructorItem from './InstructorItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };

    setTimeout(() => {
      const randomInstructor = Math.floor(Math.random() * this.state.instructors.length);
      const hobbyIndex = Math.floor(Math.random() * this.state.instructors[randomInstructor].length);

      const instructors = this.state.instructors.map((inst, i) => {
        if (i === randomInstructor) {
          const hobbies = inst.hobbies.slice(); // ili mozemo da zapisemo ovako: const hobbies = [...inst.hobbies]
          hobbies.splice(hobbyIndex, 1);
          return {
            ...inst,
            hobbies
          }
        }
        return inst;
      });
      this.setState({
        instructors
      })
    }, 3000);

  }

  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <InstructorItem
        key={index}
        name={instructor.name}
        hobbies={instructor.hobbies}
      />
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;


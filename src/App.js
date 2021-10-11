import { Component } from 'react';
import './App.css';
import { Section } from './components/Section/Section';
import { Buttons } from './components/Button/Buttons';
import { Statistics } from './components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  handleSum = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  };

  handleOnClick = (name) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
  }));
  };

  handlePositivePercentage = () => {
    const {good, neutral, bad} = this.state;
    const total = good + neutral + bad;
    return Math.round(good / total * 100);
  };

  render() {
    const {good, neutral, bad} = this.state;
    const positivePercentage = this.handlePositivePercentage();
    const total = this.handleSum();
    return (
      <div>
        <Section title="Please leave feedback">
          <Buttons names={this.state} onClick={this.handleOnClick}/>
        </Section>
        <Section title="Statistics">
          {total ? <Statistics 
            good={good} 
            neutral={neutral}
            bad={bad} 
            total={total} 
            positivePercentage={positivePercentage}/>: 'No feedback given'}
        </Section> 
      </div>
    );
  }
}

export default App;

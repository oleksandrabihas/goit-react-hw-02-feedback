import { Component } from 'react';
import FeedbackOptions from './Buttons/Buttons';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  giveRate = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>

        <FeedbackOptions
          options={Object.keys(this.state)}
          giveRate={this.giveRate}
        />
        {/* <button onClick={() => this.giveRate('good')}>Good</button>
        <button onClick={() => this.giveRate('neutral')}>Neutral</button>
        <button onClick={() => this.giveRate('bad')}>Bad</button> */}
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </>
    );
  }
}
export default App;

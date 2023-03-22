import { Statistics } from '../Statistic/Statistic';
import { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };

  heandleGoodClick() {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  }

  heandleNeutralClick() {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  }

  heandleBadClick() {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  }

  handleLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
        <div>
          {this.countTotalFeedback() === 0 ? (
            <div>
              <Notification message="There is no feedback" />
            </div>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </div>
      </div>
    );
  }
}

Feedback.protoTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

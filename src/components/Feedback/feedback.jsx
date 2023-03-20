import { Statistics } from '../Statistic/Statistic';
import { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import PropTypes from 'prop-types';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  heandleGoodClick() {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  }

  heandleNeutralClick() {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  }

  heandleBadClick() {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <FeedbackOptions
          options={1}
          onLeaveFeedback={1}
          bads={this.heandleBadClick}
          goods={this.heandleGoodClick}
          neutrals={this.heandleNeutralClick}
        />
        <div>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countPositiveFeedbackPercentage}
            positivePercentage={this.countTotalFeedback}
          />
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

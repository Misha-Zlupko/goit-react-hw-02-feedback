import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.protoTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.string.isRequired,
  bads: PropTypes.string.isRequired,
  goods: PropTypes.string.isRequired,
  neutrals: PropTypes.string.isRequired,
};

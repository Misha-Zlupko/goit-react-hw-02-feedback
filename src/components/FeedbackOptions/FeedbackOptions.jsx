import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  options,
  onLeaveFeedback,
  bads,
  goods,
  neutrals,
}) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <button onClick={neutrals} type="button">
        Neutral
      </button>
      <button onClick={goods} type="button">
        Good
      </button>
      <button onClick={bads} type="button">
        Bad
      </button>
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

import PropTypes from 'prop-types';

import { Button } from './FeedBackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(buttonName => {
    return (
      <Button
        type="button"
        name={buttonName}
        onClick={onLeaveFeedback}
        key={buttonName}
      >
        {buttonName}
      </Button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

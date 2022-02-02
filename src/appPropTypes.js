import PropTypes from "prop-types";

const wordFrequency = PropTypes.shape({
  word: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
});

export default wordFrequency;

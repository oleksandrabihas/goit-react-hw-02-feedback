import { StatisticList } from "./Statistic";
import PropTypes from 'prop-types';

const Statistics = ({
  value: { good, neutral, bad },
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <StatisticList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {countTotalFeedback()}</li>
      <li>Positive feedback: {countPositiveFeedbackPercentage()}%</li>
    </StatisticList>
  );
};

Statistics.propTypes = {
  value: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired
};

export default Statistics;

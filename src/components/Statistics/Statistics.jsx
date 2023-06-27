const Statistics = ({
  value,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <ul>
      <li>Good: {value.good}</li>
      <li>Neutral: {value.neutral}</li>
      <li>Bad: {value.bad}</li>
      <li>Total: {countTotalFeedback()}</li>
      <li>Positive feedback: {countPositiveFeedbackPercentage()}%</li>
    </ul>
  );
};
export default Statistics;

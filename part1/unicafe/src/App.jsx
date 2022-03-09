import { useState } from "react";

// Button component
const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

// Statistic line component
const StatisticLine = ({ text, value }) => (
  <>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  </>
);

// Statistics component
const Statistics = ({ good, neutral, bad, all, avgscore, percentage }) => {
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={avgscore} />
          <StatisticLine text="Positive" value={`${percentage}%`} />
        </tbody>
      </table>
    </>
  );
};

// App component
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Handle good feedback clicks
  const handleGoodFeedback = () => {
    setGood((prev) => prev + 1);
  };

  // Handle neutral feedback clicks
  const handleNeutralFeedback = () => {
    setNeutral((prev) => prev + 1);
  };

  // Handle bad feedback clicks
  const handleBadFeedback = () => {
    setBad((prev) => prev + 1);
  };

  // Total number of collected feedback
  const all = good + neutral + bad;

  // Average score
  const avgscore = (good - bad) / all;

  // percentage of positive feedback
  const percentage = (good / all) * 100;

  return (
    <div>
      <h1>Give Feedback</h1>
      {/* Action buttons */}
      <div>
        <Button text="Good" onClick={handleGoodFeedback} />
        <Button text="Neutral" onClick={handleNeutralFeedback} />
        <Button text="Bad" onClick={handleBadFeedback} />
      </div>
      {/* Conditionally rendered Statistics */}
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No Feedback given</p>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          avgscore={avgscore || 0}
          percentage={percentage || 0}
        />
      )}
    </div>
  );
};

export default App;

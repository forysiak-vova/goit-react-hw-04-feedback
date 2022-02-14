// import React, { Component } from "react";
import { useState } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const onLeaveFeedback = (event) => {
    const nameButton = event.currentTarget.textContent;

    switch (nameButton) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  const total = countTotalFeedback();
  const keys = Object.keys({ good, neutral, bad });

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {total !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}

// class App extends Component {
//  state = {
//   good: 0,
//   neutral: 0,
//    bad: 0,
//  }

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };
//    countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//    };

//     onLeaveFeedback = event => {
//       const nameButton = event.currentTarget.textContent;
//     this.setState(prevState => ({
//       [nameButton]: (prevState[nameButton] += 1),
//     }));
//   };

//   render() {
//     const total = this.countTotalFeedback();
//     const keys = Object.keys(this.state);
//     const { good, neutral, bad } = this.state;

//   return (

//     <>

//       <Section title="Please leave feedback">

//         <FeedbackOptions
//           options={keys}
//           onLeaveFeedback={this.onLeaveFeedback}

//         />
//       </Section>

//       {total !== 0 ?
//     (<Statistics
//       good={good}
//       neutral={neutral}
//       bad={bad}
//       total={total}
//       positivePercentage={this.countPositiveFeedbackPercentage()}

//         />) :
//         (<Notification message="There is no feedback"/>)
// }
//       </>
//   )
//   }
// }

export default App;

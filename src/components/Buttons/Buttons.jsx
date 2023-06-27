import React from "react";

const FeedbackOptions = ({ options, giveRate }) => {
    return (
      <FeedbackOptions>
            {/* {options.map(option => (
            <button>{option}</button>
        ))} */}
        <button >Good</button>
        <button >Neutral</button>
        <button >Bad</button>
      </FeedbackOptions>
    );
}
export default FeedbackOptions;


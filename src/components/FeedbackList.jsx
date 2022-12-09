import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback }) => {
  return !feedback || feedback.length === 0 ? (
    <p>no feedback yet</p>
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeedbackList;

import {useState} from "react"
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

const App = () => {
    const [feedback, setFeeback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback}/>
      </div>
    </>
  );
};

export default App;

import React, {useState} from 'react'
import FeedbackList from './FeedbackList'
import FeedbackData from '../data/FeedbackData'
import FeedbackStats from './FeedbackStats'
import FeedbackForm from './FeedbackForm'

const Home = () => {
  const [feedback, setFeeback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure yu want to delete feedback?')) {
      setFeeback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    setFeeback([newFeedback, ...feedback])
  }

  return (
    <div>
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </div>
  )
}

export default Home

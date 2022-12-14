import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')

  const handleTextInput = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us? </h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <section className="input-group">
          <input
            onChange={handleTextInput}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled} />
        </section>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm

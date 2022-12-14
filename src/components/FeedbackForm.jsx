import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

const FeedbackForm = () => {
  const [text, setText] = useState('')

  const handleTextInput = (e) => {
    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us? </h2>
        {/* to do - rating select component */}
        <section className="input-group">
          <input
            onChange={handleTextInput}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" />
        </section>
      </form>
    </Card>
  )
}

export default FeedbackForm

import React, {useState} from 'react'

const Feedbackitem = () => {
    const [rating, setRating] = useState(9);
    const [text, setText] = useState('This is a feedback item')

  return (
    <div className='card'>
        <h3 className="num-display">{rating}</h3>
        <p className="text-display">{text}</p>
    </div>
  )
}

export default Feedbackitem

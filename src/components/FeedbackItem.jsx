const FeedbackItem = ({item}) => {
  return (
    <div className='card'>
        <h3 className="num-display">{item.rating}</h3>
        <p className="text-display">{item.text}</p>
    </div>
  )
}

export default FeedbackItem

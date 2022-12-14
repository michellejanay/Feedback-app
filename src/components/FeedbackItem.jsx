import Card from "./shared/Card";

const FeedbackItem = ({item, handleDelete}) => {

  return (
    <Card element={item}  reverse={false}>
      <h3 className="num-display">{item.rating}</h3>
      <button className="close" onClick={()=> handleDelete(item.id)}>x</button>
      <p className="text-display">{item.text}</p>
    </Card>
  )
}

export default FeedbackItem

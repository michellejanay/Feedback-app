import Card from "./shared/Card";

const FeedbackItem = ({item}) => {
  return (
    <Card element={item}  reverse={false}>
      <h3 className="num-display">{item.rating}</h3>
      <button className="close">x</button>
      <p className="text-display">{item.text}</p>
    </Card>
  )
}

export default FeedbackItem

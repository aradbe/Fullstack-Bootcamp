function Item(props) {
  const price = props.shouldDiscount
    ? props.price * (1 - props.discount)
    : props.price

  return (
    <div>
      {props.item} - ${price}
    </div>
  )
}

export default Item
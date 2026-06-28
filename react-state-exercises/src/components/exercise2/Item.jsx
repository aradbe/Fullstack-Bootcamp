function Item(props) {
  return (
    <div>
      {props.item} - ${props.price}
    </div>
  )
}

export default Item
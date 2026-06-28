function Landing(props) {
  const hottestItem = props.store.find(item => item.hottest)

  return (
    <div>
      Welcome, {props.user}. The hottest item is {hottestItem.item}
    </div>
  )
}

export default Landing
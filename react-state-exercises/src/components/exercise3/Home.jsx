import Item from "./Item"

function Home(props) {
  return (
    <div>
      {props.store.map((product, index) => (
        <Item
          key={index}
          item={product.item}
          price={product.price}
        />
      ))}
    </div>
  )
}

export default Home
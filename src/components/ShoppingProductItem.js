const ShoppingProductItem = ({ data, addToCart }) => {
  let { id, name, price } = data;
  return (
    <div
      style={{
        border: "thin solid gray",
        padding: "1rem",
        margin: "0.5rem 0",
        textAlign: "center",
      }}
    >
      <h4>{name}</h4>
      <h5>$ {price}</h5>
      <button onClick={() => addToCart(id)}>Add</button>
    </div>
  );
};

export default ShoppingProductItem;

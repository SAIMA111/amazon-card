// ProductTab.jsx
import Product from "./Product.jsx";

function ProductTab() {
  const styles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  };

  return (
    <div style={styles}>
      <Product title="iPhone" idx={0} />
      <Product title="Samsung Galaxy" idx={1} />
      <Product title="Sony Headphones" idx={2} />
    </div>
  );
}

export default ProductTab;

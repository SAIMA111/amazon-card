// Product.jsx
import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  const oldPrices = ["1200", "760", "86968"];
  const newPrices = ["999", "599", "849"];
  const descriptions = [
    ["Fast charging", "Super Retina Display"],
    ["Quad Camera", "AMOLED Screen"],
    ["Noise Cancelling", "Bluetooth 5.0"]
  ];

  return (
    <div className="Product">
      <h1>{title}</h1>
      <p>{descriptions[idx][0]}</p>
      <p>{descriptions[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;

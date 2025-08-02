// Price.jsx
export default function Price({ oldPrice, newPrice }) {
  const oldStyles = {
    textDecoration: "line-through",
    color: "gray",
  };

  const styles = {
    backgroundColor: "yellow",
    padding: "10px",
    borderRadius: "5px",
  };

  return (
    <div style={styles}>
      <span style={oldStyles}>₹{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;
      <span>₹{newPrice}</span>
    </div>
  );
}

// ProductCard.jsx
// Displays one product — now includes Edit and Delete buttons

function ProductCard({ name, price, description, onEdit, onDelete }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p className="price">💰 ${price}</p>
      <p className="description">{description}</p>

      <div className="card-actions">
        <button className="btn-edit" onClick={onEdit}>✏️ Edit</button>
        <button className="btn-delete" onClick={onDelete}>🗑️ Delete</button>
      </div>
    </div>
  );
}

export default ProductCard;

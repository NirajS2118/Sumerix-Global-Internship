import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form state for adding a new product
  const [form, setForm] = useState({ name: "", price: "", description: "" });

  // Edit state — which product is being edited right now
  const [editingProduct, setEditingProduct] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", price: "", description: "" });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (err) {
      setError("Could not fetch products. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  // ── ADD ──────────────────────────────────
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/products", {
        name: form.name,
        price: Number(form.price),
        description: form.description,
      });
      setForm({ name: "", price: "", description: "" });
      fetchProducts();
    } catch (err) {
      alert("Error adding product!");
    }
  };

  // ── DELETE ───────────────────────────────
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this product?");
    if (!confirm) return;
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchProducts();
    } catch (err) {
      alert("Error deleting product!");
    }
  };

  // ── EDIT (open modal) ────────────────────
  const handleEditClick = (product) => {
    setEditingProduct(product);
    setEditForm({
      name: product.name,
      price: product.price,
      description: product.description,
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/products/${editingProduct._id}`, {
        name: editForm.name,
        price: Number(editForm.price),
        description: editForm.description,
      });
      setEditingProduct(null); // close modal
      fetchProducts();
    } catch (err) {
      alert("Error updating product!");
    }
  };

  return (
    <div className="App">
      <header>
        <h1>🛒 Product Store</h1>
        <p>MERN Stack Internship – Task 1</p>
      </header>

      {/* ── ADD PRODUCT FORM ── */}
      <section className="form-section">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit} className="product-form">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
          />
          <button type="submit">Add Product</button>
        </form>
      </section>

      {/* ── PRODUCTS LIST ── */}
      <section className="products-section">
        <h2>All Products</h2>

        {loading && <p>Loading products...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && products.length === 0 && (
          <p>No products yet. Add one above!</p>
        )}

        <div className="cards-container">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              onEdit={() => handleEditClick(product)}
              onDelete={() => handleDelete(product._id)}
            />
          ))}
        </div>
      </section>

      {/* ── EDIT MODAL ── */}
      {editingProduct && (
        <div className="modal-overlay" onClick={() => setEditingProduct(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>✏️ Edit Product</h2>
            <form onSubmit={handleEditSubmit} className="product-form vertical">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={editForm.name}
                onChange={handleEditChange}
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={editForm.price}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={editForm.description}
                onChange={handleEditChange}
              />
              <div className="modal-buttons">
                <button type="submit" className="btn-save">Save Changes</button>
                <button type="button" className="btn-cancel" onClick={() => setEditingProduct(null)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

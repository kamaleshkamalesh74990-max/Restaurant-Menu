import { useState } from "react";
import "./madashboard.css";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
}

const Madashboard = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: "Burger",
      category: "Fast Food",
      price: 120,
    },
    {
      id: 2,
      name: "Pizza",
      category: "Main Course",
      price: 250,
    },
  ]);

  const [foodName, setFoodName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const handleSubmit = () => {
    if (
      foodName.trim() === "" ||
      category.trim() === "" ||
      price.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editId !== null) {
      setMenuItems(
        menuItems.map((item) =>
          item.id === editId
            ? {
                ...item,
                name: foodName,
                category,
                price: Number(price),
              }
            : item
        )
      );
      setEditId(null);
    } else {
      const newItem: MenuItem = {
        id: Date.now(),
        name: foodName,
        category,
        price: Number(price),
      };

      setMenuItems([...menuItems, newItem]);
    }

    setFoodName("");
    setCategory("");
    setPrice("");
  };

  const handleEdit = (item: MenuItem) => {
    setFoodName(item.name);
    setCategory(item.category);
    setPrice(item.price.toString());
    setEditId(item.id);
  };

  const handleDelete = (id: number) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  return (
    <div className="menu-container">
      <h1>Menu Management</h1>

      <div className="menu-form">
        <input
          type="text"
          placeholder="Food Name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button onClick={handleSubmit}>
          {editId !== null ? "Update" : "Add"}
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Food Name</th>
            <th>Category</th>
            <th>Price (₹)</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Madashboard;
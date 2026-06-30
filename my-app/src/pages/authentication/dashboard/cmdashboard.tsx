import { useState } from "react";
import "./cmdashboard.css";

interface Category {
  id: number;
  name: string;
}

const Cmdashboard = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "Starters" },
    { id: 2, name: "Main Course" },
    { id: 3, name: "Desserts" },
  ]);

  const [categoryName, setCategoryName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const handleSubmit = () => {
    if (categoryName.trim() === "") {
      alert("Please enter a category name.");
      return;
    }

    if (editId !== null) {
      setCategories(
        categories.map((category) =>
          category.id === editId
            ? { ...category, name: categoryName }
            : category
        )
      );
      setEditId(null);
    } else {
      const newCategory: Category = {
        id: Date.now(),
        name: categoryName,
      };

      setCategories([...categories, newCategory]);
    }

    setCategoryName("");
  };

  const handleEdit = (category: Category) => {
    setCategoryName(category.name);
    setEditId(category.id);
  };

  const handleDelete = (id: number) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div className="category-container">
      <h1>Category Management</h1>

      <div className="category-form">
        <input
          type="text"
          placeholder="Enter Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />

        <button onClick={handleSubmit}>
          {editId !== null ? "Update" : "Add"}
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(category)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(category.id)}
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

export default Cmdashboard;
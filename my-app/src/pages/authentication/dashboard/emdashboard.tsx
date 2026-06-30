import { useState } from "react";
import "./emdashboard.css";

const Emdashboard = () => {
  const [foodName, setFoodName] = useState("Burger");
  const [category, setCategory] = useState("Fast Food");
  const [price, setPrice] = useState("120");
  const [description, setDescription] = useState(
    "Delicious Chicken Burger"
  );

  const handleUpdate = () => {
    alert("Menu Updated Successfully!");
  };

  return (
    <div className="edit-container">
      <h1>Edit Menu Item</h1>

      <div className="edit-form">
        <label>Food Name</label>
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />

        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={handleUpdate}>Update Menu</button>
      </div>
    </div>
  );
};

export default Emdashboard;
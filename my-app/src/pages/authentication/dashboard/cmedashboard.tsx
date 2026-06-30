import { useState } from "react";
import "./cmedashboard.css";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const Cmedashboard = () => {
  const [search, setSearch] = useState("");

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Burger",
      category: "Fast Food",
      price: 120,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Pizza",
      category: "Main Course",
      price: 250,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "French Fries",
      category: "Snacks",
      price: 90,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      name: "Chicken Biryani",
      category: "Rice",
      price: 220,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 5,
      name: "Ice Cream",
      category: "Dessert",
      price: 80,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 6,
      name: "Cold Coffee",
      category: "Drinks",
      price: 100,
      image: "https://via.placeholder.com/200",
    },
  ];

  const filteredMenu = menuItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="customer-container">
      <h1>Restaurant Menu</h1>

      <input
        type="text"
        placeholder="Search Food..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="menu-grid">
        {filteredMenu.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>

            <p>
              <strong>Category:</strong> {item.category}
            </p>

            <p className="price">₹{item.price}</p>

            <button>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cmedashboard;
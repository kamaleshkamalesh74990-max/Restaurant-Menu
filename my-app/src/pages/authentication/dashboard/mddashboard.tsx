import "./mddashboard.css";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const Mddashboard = () => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Chicken Burger",
      category: "Fast Food",
      price: 120,
      image: "https://via.placeholder.com/250",
    },
    {
      id: 2,
      name: "Veg Pizza",
      category: "Main Course",
      price: 250,
      image: "https://via.placeholder.com/250",
    },
    {
      id: 3,
      name: "French Fries",
      category: "Snacks",
      price: 90,
      image: "https://via.placeholder.com/250",
    },
    {
      id: 4,
      name: "Chicken Biryani",
      category: "Rice",
      price: 220,
      image: "https://via.placeholder.com/250",
    },
    {
      id: 5,
      name: "Cold Coffee",
      category: "Drinks",
      price: 100,
      image: "https://via.placeholder.com/250",
    },
    {
      id: 6,
      name: "Ice Cream",
      category: "Dessert",
      price: 80,
      image: "https://via.placeholder.com/250",
    },
  ];

  return (
    <div className="display-container">
      <h1>Restaurant Menu</h1>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>

            <p>
              <strong>Category:</strong> {item.category}
            </p>

            <h3>₹{item.price}</h3>

            <button>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mddashboard;
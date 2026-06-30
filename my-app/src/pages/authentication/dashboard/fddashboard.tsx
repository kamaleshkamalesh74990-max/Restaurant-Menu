import "./fddashboard.css";

const Fddashboard = () => {
  const food = {
    name: "Chicken Burger",
    category: "Fast Food",
    price: 120,
    description:
      "A delicious chicken burger made with crispy chicken, fresh lettuce, tomatoes, cheese, and special sauce.",
    image: "https://via.placeholder.com/500x300",
    availability: "Available",
    rating: 4.8,
  };

  return (
    <div className="food-container">
      <div className="food-card">
        <img src={food.image} alt={food.name} />

        <div className="food-info">
          <h1>{food.name}</h1>

          <p>
            <strong>Category:</strong> {food.category}
          </p>

          <p>
            <strong>Price:</strong> ₹{food.price}
          </p>

          <p>
            <strong>Availability:</strong> {food.availability}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {food.rating}
          </p>

          <h3>Description</h3>

          <p>{food.description}</p>

          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Fddashboard;
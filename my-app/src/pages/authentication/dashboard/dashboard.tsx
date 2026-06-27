import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>🍽 Restaurant</h2>

        <ul>
          <li>🏠 Dashboard</li>
          <li>📋 Menu</li>
          <li>🛒 Orders</li>
          <li>👨‍🍳 Staff</li>
          <li>💳 Payments</li>
          <li>⚙ Settings</li>
          <li>🚪 Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">

        <header>
          <h1>Restaurant Dashboard</h1>
          <p>Welcome, Admin 👋</p>
        </header>

        <div className="cards">

          <div className="card">
            <h3>Total Orders</h3>
            <p>150</p>
          </div>

          <div className="card">
            <h3>Today's Revenue</h3>
            <p>₹25,000</p>
          </div>

          <div className="card">
            <h3>Customers</h3>
            <p>95</p>
          </div>

          <div className="card">
            <h3>Available Dishes</h3>
            <p>45</p>
          </div>

        </div>

        <div className="recent-orders">
          <h2>Recent Orders</h2>

          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Food</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#101</td>
                <td>Santhosh</td>
                <td>Chicken Biryani</td>
                <td className="completed">Completed</td>
              </tr>

              <tr>
                <td>#102</td>
                <td>Rahul</td>
                <td>Pizza</td>
                <td className="pending">Pending</td>
              </tr>

              <tr>
                <td>#103</td>
                <td>Priya</td>
                <td>Burger</td>
                <td className="completed">Completed</td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
import { useMemo, useState } from "react";
import {
  Activity,
  Bell,
  ChevronDown,
  DollarSign,
  Menu,
  Package,
  Search,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

import Sidebar from "./components/Sidebar";
import DashboardCard from "./components/DashboardCard";
import OrdersTable from "./components/OrdersTable";
import ProfileCard from "./components/ProfileCard";
import ActivityPanel from "./components/ActivityPanel";

const orders = [
  {
    id: "#PB-1048",
    customer: "Aarav Sharma",
    product: "Pro Plan",
    amount: "$249.00",
    status: "Completed",
    date: "Oct 04, 2026",
  },
  {
    id: "#PB-1047",
    customer: "Tanuja Choudhary",
    product: "Business Plan",
    amount: "$499.00",
    status: "Processing",
    date: "Oct 04, 2026",
  },
  {
    id: "#PB-1046",
    customer: "Rohan Verma",
    product: "Starter Plan",
    amount: "$99.00",
    status: "Completed",
    date: "Oct 03, 2026",
  },
  {
    id: "#PB-1045",
    customer: "Priya Singh",
    product: "Pro Plan",
    amount: "$249.00",
    status: "Pending",
    date: "Oct 03, 2026",
  },
  {
    id: "#PB-1044",
    customer: "Aditya Jain",
    product: "Business Plan",
    amount: "$499.00",
    status: "Completed",
    date: "Oct 02, 2026",
  },
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeItem, setActiveItem] = useState("Dashboard");
  const filteredOrders = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) return orders;

    return orders.filter((order) =>
      Object.values(order).some((item) =>
        String(item).toLowerCase().includes(value)
      )
    );
  }, [query]);

  return (
    <div className="app-shell">

      <Sidebar
  open={sidebarOpen}
  onClose={() => setSidebarOpen(false)}
  activeItem={activeItem}
  onSelect={(item) => {
    setActiveItem(item);
    setSidebarOpen(false);
  }}
/>

      {sidebarOpen && (
        <button
          className="mobile-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        />
      )}

      <main className="main-content">

        {/* TOP NAVIGATION */}

        <header className="topbar">

          <div className="topbar-left">

            <button
              className="icon-button mobile-menu"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={21} />
            </button>

            <div>
              <p className="eyebrow">Overview</p>
              <h1>Good evening, Sahil 👋</h1>
            </div>

          </div>

          <div className="topbar-actions">

            <label className="search-box">
              <Search size={18} />

              <input
                type="text"
                placeholder="Search orders..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              <kbd>⌘ K</kbd>
            </label>

            <button
              className="notification-button"
              aria-label="Notifications"
            >
              <Bell size={20} />
              <span className="notification-dot" />
            </button>

            <div className="mini-user">

              <div className="avatar">
                SP
              </div>

              <div className="mini-user-info">
                <strong>Sahil Pratap</strong>
                <span>Admin</span>
              </div>

              <ChevronDown size={16} />

            </div>

          </div>

        </header>

        {/* CONTENT */}

        <section className="content">

          <div className="hero-row">

            <div>
              <h2>Dashboard</h2>

              <p className="muted">
                Track your business performance and recent activity.
              </p>
            </div>

            <button className="date-button">
              Oct 2026
              <ChevronDown size={16} />
            </button>

          </div>

          {/* DASHBOARD CARDS */}

          <section className="stats-grid">

            <DashboardCard
              title="Total Revenue"
              value="$48,290"
              change="+12.8%"
              positive
              icon={DollarSign}
            />

            <DashboardCard
              title="Total Orders"
              value="1,284"
              change="+8.4%"
              positive
              icon={ShoppingCart}
            />

            <DashboardCard
              title="Active Users"
              value="8,642"
              change="+16.2%"
              positive
              icon={Users}
            />

            <DashboardCard
              title="Conversion Rate"
              value="7.82%"
              change="-1.4%"
              icon={TrendingUp}
            />

          </section>

          {/* MAIN AREA */}

          <section className="main-grid">

            <div className="panel orders-panel">

              <div className="panel-header">

                <div>
                  <h3>Recent Orders</h3>

                  <p>
                    Latest transactions across your platform
                  </p>
                </div>

                <button className="text-button">
                  View all
                </button>

              </div>

              <OrdersTable orders={filteredOrders} />

            </div>

            <div className="side-column">

              <ProfileCard />

              <ActivityPanel />

            </div>

          </section>

          {/* BOTTOM */}

          <section className="bottom-grid">

            <div className="panel performance-panel">

              <div className="panel-header">

                <div>
                  <h3>Revenue Overview</h3>

                  <p>
                    Monthly revenue performance
                  </p>
                </div>

                <span className="growth-label">
                  <TrendingUp size={15} />
                  18.6%
                </span>

              </div>

              <div className="chart">

                {[
                  38, 52, 44, 64, 58, 72,
                  66, 84, 76, 91, 82, 96
                ].map((height, index) => (

                  <div className="bar-wrap" key={index}>

                    <div
                      className="bar"
                      style={{
                        height: `${height}%`,
                      }}
                    />

                    <span>
                      {
                        [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ][index]
                      }
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* QUICK INSIGHTS */}

            <div className="panel quick-panel">

              <div className="panel-header">

                <div>
                  <h3>Quick Insights</h3>

                  <p>
                    What needs your attention
                  </p>
                </div>

                <Activity size={19} />

              </div>

              <div className="insight-list">

                <div className="insight-item">

                  <span className="insight-icon green">
                    <TrendingUp size={17} />
                  </span>

                  <div>
                    <strong>Revenue is up</strong>

                    <p>
                      12.8% higher than last month.
                    </p>
                  </div>

                </div>

                <div className="insight-item">

                  <span className="insight-icon purple">
                    <Users size={17} />
                  </span>

                  <div>
                    <strong>Users growing</strong>

                    <p>
                      1,204 new users this week.
                    </p>
                  </div>

                </div>

                <div className="insight-item">

                  <span className="insight-icon orange">
                    <Package size={17} />
                  </span>

                  <div>
                    <strong>5 orders pending</strong>

                    <p>
                      Review before end of day.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </section>

          <footer>
            © 2026 PulseBoard · Built with React + Vite
          </footer>

        </section>

      </main>

    </div>
  );
}

export default App;
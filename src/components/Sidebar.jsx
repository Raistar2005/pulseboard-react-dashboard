import {
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Users,
  X,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Orders", icon: ShoppingCart },
  { label: "Products", icon: Package },
  { label: "Customers", icon: Users },
  { label: "Settings", icon: Settings },
];

export default function Sidebar({ open, onClose, activeItem, onSelect }) {
  return (
    <>
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">P</div>

          <div>
            <strong>PulseBoard</strong>
            <span>Admin Suite</span>
          </div>

          <button className="mobile-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="nav-section">
          <p className="nav-label">WORKSPACE</p>

          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className={`nav-item ${
                  activeItem === item.label ? "active" : ""
                }`}
                onClick={() => onSelect(item.label)}
              >
                <Icon size={19} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="nav-section">
          <p className="nav-label">MANAGEMENT</p>

          <button
            className={`nav-item ${
              activeItem === "Settings" ? "active" : ""
            }`}
            onClick={() => onSelect("Settings")}
          >
            <Settings size={19} />
            <span>Settings</span>
          </button>
        </div>

        <div className="pro-card">
          <div className="pro-icon">✦</div>
          <strong>Pro workspace</strong>
          <p>
            Unlock advanced analytics and team controls.
          </p>

          <button>Upgrade plan</button>
        </div>
      </aside>
    </>
  );
}
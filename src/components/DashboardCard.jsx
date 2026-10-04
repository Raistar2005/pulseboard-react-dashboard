import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function DashboardCard({
  title,
  value,
  change,
  positive,
  icon: Icon,
}) {
  return (
    <div className="dashboard-card">
      <div className="card-top">
        <div className="card-icon">
          <Icon size={20} />
        </div>

        <div className={`change ${positive ? "positive" : "negative"}`}>
          {positive ? (
            <ArrowUpRight size={15} />
          ) : (
            <ArrowDownRight size={15} />
          )}
          {change}
        </div>
      </div>

      <p className="card-title">{title}</p>
      <h3 className="card-value">{value}</h3>

      <div className="card-footer">
        <span>Compared to last month</span>
      </div>
    </div>
  );
}
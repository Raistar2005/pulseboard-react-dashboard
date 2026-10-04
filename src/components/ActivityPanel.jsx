import {
  CheckCircle2,
  CreditCard,
  UserPlus,
} from "lucide-react";

export default function ActivityPanel() {

  const activity = [

    {
      icon: CheckCircle2,
      title: "Order completed",
      text: "Order #PB-1048 was completed.",
      time: "12 min ago",
      cls: "green",
    },

    {
      icon: UserPlus,
      title: "New customer",
      text: "Aarav Sharma joined your workspace.",
      time: "38 min ago",
      cls: "purple",
    },

    {
      icon: CreditCard,
      title: "Payment received",
      text: "Payment of $499.00 received.",
      time: "1 hr ago",
      cls: "orange",
    },

  ];

  return (

    <div className="panel activity-panel">

      <div className="panel-header">

        <div>

          <h3>
            Recent Activity
          </h3>

          <p>
            Latest workspace events
          </p>

        </div>

      </div>

      <div className="activity-list">

        {activity.map(
          ({
            icon: Icon,
            title,
            text,
            time,
            cls,
          }) => (

            <div
              className="activity-item"
              key={title}
            >

              <span
                className={`activity-icon ${cls}`}
              >
                <Icon size={17} />
              </span>

              <div>

                <strong>
                  {title}
                </strong>

                <p>
                  {text}
                </p>

                <small>
                  {time}
                </small>

              </div>

            </div>

          )
        )}

      </div>

    </div>

  );
}
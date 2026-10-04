export default function OrdersTable({ orders }) {

  return (

    <div className="table-wrap">

      <table>

        <thead>

          <tr>
            <th>Order</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>

        </thead>

        <tbody>

          {orders.length ? (

            orders.map((order) => (

              <tr key={order.id}>

                <td>
                  <strong>
                    {order.id}
                  </strong>
                </td>

                <td>
                  {order.customer}
                </td>

                <td>
                  {order.product}
                </td>

                <td>
                  <strong>
                    {order.amount}
                  </strong>
                </td>

                <td>

                  <span
                    className={`status ${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>

                </td>

                <td>
                  {order.date}
                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td
                colSpan="6"
                className="empty-state"
              >
                No orders found.
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>

  );
}
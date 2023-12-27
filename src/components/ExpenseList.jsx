/* eslint-disable react/prop-types */

function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return null;
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>
                  <button
                    className="btn btn-error"
                    onClick={() => onDelete(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>Total</td>
              <td>
                $
                {/* // 0 is inital value // first parameter is previous value // 2nd
                parameter is current value */}
                {expenses.reduce(
                  (previous, expense) => previous + parseInt(expense.amount),
                  0
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default ExpenseList;

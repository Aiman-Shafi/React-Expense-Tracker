/* eslint-disable react/prop-types */
const categories = ["Groceries", "Utilities", "Entertainment"];

const ExpenseFilter = ({ onSelectCategory }) => {
  return (
    <select
      className="select select-bordered w-full max-w-xs my-10"
      // creating a function to select the categgories name
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;

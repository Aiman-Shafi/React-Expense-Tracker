/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

function ExpenseForm({ onSubmit }) {
  const categories = ["Groceries", "Utilities", "Entertainment"];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="mt-10">
        <h2 className="text-3xl text-center">Your Expense Tracker 📝</h2>
      </div>
      <form
        action=""
        className="flex flex-col gap-6 mx-auto mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Description"
          className="input input-bordered w-full "
          {...register("description", {
            required: true,
            minLength: 3,
            maxLength: 30,
          })}
        />
        {/* {errors.description && (
          <span className="text-red-500">This field is required</span>
        )} */}
        {errors.description?.type === "required" && (
          <p className="text-red-400">Description is required</p>
        )}
        {errors.description?.type === "minLength" && (
          <p className="text-red-400">Description is too small</p>
        )}
        {errors.description?.type === "maxLength" && (
          <p className="text-red-400">Description is too large</p>
        )}

        <input
          type="number"
          placeholder="$0"
          className="input input-bordered w-full "
          {...register("amount")}
        />
        <select
          className="select select-bordered w-full "
          {...register("category")}
          // creating a function to select the categgories name
        >
          <option value=""> -- Select -- </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input type="submit" value={"Add"} className="btn btn-primary" />
      </form>
    </>
  );
}

export default ExpenseForm;

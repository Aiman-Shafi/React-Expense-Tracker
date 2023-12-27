import { useState } from "react";
import "./App.css";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

// TODO: Create Expenselist
// TODO: Expense Filter
// TODO: Expense Form

function App() {
  // const expenses = [
  //   { id: 1, category: "abcd", description: "test..", amount: 100 },
  //   { id: 2, category: "abcd", description: "test..", amount: 100 },
  //   { id: 3, category: "abcd", description: "test..", amount: 100 },
  //   { id: 4, category: "abcd", description: "test..", amount: 100 },
  // ];

  const [expenses, setExpenses] = useState([
    { id: 1, category: "Utilities", description: "test..", amount: 100 },
    { id: 2, category: "Utilities", description: "test..", amount: 100 },
    { id: 3, category: "Groceries", description: "test..", amount: 100 },
    { id: 4, category: "Groceries", description: "test..", amount: 100 },
  ]);

  // filter on select category
  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="max-w-[800px] mx-auto">
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpenses([
              ...expenses,
              { ...newExpense, id: expenses.length + 1 },
            ])
          }
        />
        {/* <ExpenseFilter onSelectCategory={(category) => console.log(category)} /> */}
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
        {/* <ExpenseList expenses={expenses} onDelete={(id) => console.log(id)} /> */}
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
        />
      </div>
    </>
  );
}

// const Header = () => {
//   return (
//     <>
//       <div className="navbar bg-base-100">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-52"
//             >
//               <li>
//                 <a>Item 1</a>
//               </li>
//               <li>
//                 <a>Parent</a>
//                 <ul className="p-2">
//                   <li>
//                     <a>Submenu 1</a>
//                   </li>
//                   <li>
//                     <a>Submenu 2</a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a>Item 3</a>
//               </li>
//             </ul>
//           </div>
//           <a className="btn btn-ghost text-xl">daisyUI</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             <li>
//               <a>Item 1</a>
//             </li>
//             <li>
//               <details>
//                 <summary>Parent</summary>
//                 <ul className="p-2">
//                   <li>
//                     <a>Submenu 1</a>
//                   </li>
//                   <li>
//                     <a>Submenu 2</a>
//                   </li>
//                 </ul>
//               </details>
//             </li>
//             <li>
//               <a>Item 3</a>
//             </li>
//           </ul>
//         </div>
//         <div className="navbar-end">
//           <a className="btn glass">Button</a>
//         </div>
//       </div>
//     </>
//   );
// };

// const Form = () => {
//   useState({
//     name: "",
//     age: 0,
//   });
//   return (
//     <>
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">Login now!</h1>
//             <p className="py-6">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//               excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//               et a id nisi.
//             </p>
//           </div>
//           <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//             <form className="card-body" onSubmit={handleSubmit}>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                 />
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">
//                     Forgot password?
//                   </a>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary">Login</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
export default App;

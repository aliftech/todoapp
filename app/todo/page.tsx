import React from 'react';

const TodoPage = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen gap-4">
      <div className="card bg-neutral text-neutral-content w-full max-w-md mx-4">
        <div className="card-body items-center text-center">
          <div className="join">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <button className="btn btn-outline btn-info">New Task</button>
          </div>
        </div>
      </div>

      <div className="card bg-neutral text-neutral-content w-full max-w-md mx-4 mt-2">
        <div className="card-body">
          <h2 className="card-title">Tasks</h2>
          <ul className="list-none w-full">
            <li className="flex items-center justify-between py-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-info"
                />
                <span>Task 1</span>
              </label>
            </li>
            <li className="flex items-center justify-between py-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-info"
                />
                <span>Task 2</span>
              </label>
            </li>
            <li className="flex items-center justify-between py-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-info"
                />
                <span>Task 3</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;

import React from 'react';
import TaskAccordeon from '../components/accordeon/TaskAccordeon'; // Adjust the import path as necessary
import TaskModal from '../components/modal/TaskModal';

const AccordionPage: React.FC = () => {
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
      <TaskModal />
            
          </div>
        </div>
      </div>

      <div className="card bg-neutral text-neutral-content w-full max-w-md mx-4">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Task List</h2>
          <div className="w-full">
            <TaskAccordeon
              title="Task 1"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque enim perferendis adipisci minima, tenetur dolor veritatis odio optio quidem totam perspiciatis. Doloribus, quod. Accusantium quisquam, veritatis vitae minima nemo porro."
              name="my-accordion-3"
              isChecked={false}
              isDone={false}
            />
            <TaskAccordeon
              title="Task 2"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque enim perferendis adipisci minima, tenetur dolor veritatis odio optio quidem totam perspiciatis. Doloribus, quod. Accusantium quisquam, veritatis vitae minima nemo porro."
              name="my-accordion-3"
              isChecked={false}
              isDone={true}
            />
            <TaskAccordeon
              title="Task 3"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque enim perferendis adipisci minima, tenetur dolor veritatis odio optio quidem totam perspiciatis. Doloribus, quod. Accusantium quisquam, veritatis vitae minima nemo porro."
              name="my-accordion-3"
              isChecked={false}
              isDone={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionPage;
import React from 'react'

const TaskModal = () => {
  return (
    <div className="card bg-neutral text-neutral-content w-full max-w-md mx-4">
        <div className="card-body items-center text-center">
          <label className="input input-bordered flex flex-col w-full gap-2">
            <input type="text" className="h-full" placeholder="Task" />
          </label>

          <div className="join w-full gap-2">
            <input type="date" className="input input-bordered w-full" placeholder="Deadline" />
            <select className="select select-primary w-full">
              <option disabled selected>Priority</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
        </div>
      </div>
  )
}

export default TaskModal

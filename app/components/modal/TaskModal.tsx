'use client';
import React from 'react'

const TaskModal = () => {
  return (
    <>
    <button className="btn btn-outline btn-info" onClick={() => document.getElementById('taskModel').showModal()}>New Task</button>
    <dialog id="taskModel" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">New Task</h3>
          <label className="input input-bordered flex flex-col w-full gap-2 mb-4">
            <input type="text" className="h-full" placeholder="Task" />
          </label>

          <div className="join w-full gap-2">
            <input type="date" className="input input-bordered w-full" placeholder="Deadline" />
            <select className="select select-primary w-full">
              <option disabled selected>Status</option>
              <option>Not Started</option>
              <option>On progress</option>
              <option>Done</option>
              <option>Canceled</option>
            </select>
          </div>

          <textarea className="textarea textarea-primary flex flex-col w-full gap-2 mt-4" placeholder="Task Description"></textarea>

          <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-outline btn-primary">Create</button>
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
    </>
  )
}

export default TaskModal

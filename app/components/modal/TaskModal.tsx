'use client';
import React, { useState } from 'react';
import ToastError from '../toast/ToastError';
import ToastSuccess from '../toast/ToastSuccess';

interface TaskStatus {
  success: boolean;
  error?: boolean;
  message: string;
}

const TaskModal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [due, setDue] = useState('');
  const [status, setStatus] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const CreateTask = async (): Promise<TaskStatus> => {
    const response = await fetch('http://localhost:3000/task', {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        due,
        status,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: TaskStatus = await response.json();
    return data;
  };

  const HandleCreateNewTask = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response = await CreateTask();
    if (response.error) {
      setShowError(true);
      setShowSuccess(false);
      setMessage(response.message);
      setTimeout(() => {
        setShowError(false);
        setMessage('');
      }, 3000);
    } else {
      setShowError(false);
      setShowSuccess(true);
      setMessage(response.message);
      setTimeout(() => {
        setShowSuccess(false);
        setMessage('');
      }, 3000);
    }
    setTitle('');
    setDescription('');
    setDue('');
    setStatus('');
    document.getElementById('taskModal')?.close();
  };

  return (
    <div>
      <button
        className="btn btn-outline btn-info shadow-lg shadow-cyan-500/50"
        onClick={() => document.getElementById('taskModal')?.showModal()}
      >
        New Task
      </button>
      <dialog id="taskModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">New Task</h3>
          <label className="input input-bordered flex flex-col w-full gap-2 mb-4">
            <input
              type="text"
              className="h-full"
              placeholder="Task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <div className="join w-full gap-2">
            <input
              type="date"
              className="input input-bordered w-full"
              placeholder="Deadline"
              value={due}
              onChange={(e) => setDue(e.target.value)}
            />
            <select
              className="select select-primary w-full"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option disabled value="">
                Status
              </option>
              <option value="Not Started">Not Started</option>
              <option value="On progress">On progress</option>
              <option value="Done">Done</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>

          <textarea
            className="textarea textarea-primary flex flex-col w-full gap-2 mt-4"
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <div className="modal-action">
            <button
              className="btn btn-outline btn-primary"
              onClick={HandleCreateNewTask}
            >
              Create
            </button>
            <button
              className="btn"
              onClick={() => document.getElementById('taskModal')?.close()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
      {showError && <ToastError value={message} />}
      {showSuccess && <ToastSuccess value={message} />}
    </div>
  );
};

export default TaskModal;

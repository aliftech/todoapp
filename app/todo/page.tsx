"use client";
import React, { useEffect, useState } from 'react';
import TaskAccordeon from '../components/accordeon/TaskAccordeon'; // Adjust the import path as necessary
import TaskModal from '../components/modal/TaskModal';
import { redirect } from 'next/navigation';

interface TaskInterface {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  Userid: number;
  Title: string;
  Description: string;
  Due: string;
  Status: string;
}

interface ApiResponse {
  data: TaskInterface[];
  error: boolean;
  message: string;
}

const AccordionPage: React.FC = () => {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async (token: string) => {
      try {
        const response = await fetch('http://localhost:3000/task', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        const result: ApiResponse = await response.json();

        if (!result.error) {
          setTasks(result.data);
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      fetchTasks(access_token);
    } else {
      redirect('/');
    }
  }, []);

  const handleTaskDelete = async (taskId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/task/${taskId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
      });

      const result = await response.json();
      if (!result.error) {
        setTasks(tasks.filter(task => task.ID !== taskId));
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
        <div className="card-body items-center">
          <h2 className="card-title">Task List</h2>
          <div className="w-full">
            {tasks.map((task) => (
              <TaskAccordeon
                key={task.ID}
                id={task.ID}
                title={task.Title}
                content={task.Description}
                name={`my-accordion-${task.ID}`}
                isChecked={task.Status === 'Done'}
                isDone={task.Status === 'Done'}
                onDelete={handleTaskDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionPage;

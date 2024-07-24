'use client';
import React, { useState } from 'react';
import ToastError from '../toast/ToastError';
import ToastSuccess from '../toast/ToastSuccess';

interface SignupStatus {
  success: boolean;
  error?: boolean;
  message: string;
}

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const SignupProcess = async (): Promise<SignupStatus> => {
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        fullname: fullname,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });

    const data: SignupStatus = await response.json();
    return data;
  };

  const handleSignup = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response = await SignupProcess();

    if (response.error) {
      setShowError(true);
      setShowSuccess(false);
      setMessage(response.message);
      setEmail('');
      setFullname('');
      setPassword('');
      setTimeout(() => {
        setShowError(false);
        setMessage('');
      }, 3000);
    } else {
      setShowError(false);
      setShowSuccess(true);
      setMessage(response.message);
      setEmail('');
      setFullname('');
      setPassword('');
      setTimeout(() => {
        setShowSuccess(false);
        setMessage('');
      }, 3000);
    }
  };

  return (
    <div>
      <form>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Fullname"
            name='fullname'
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd" />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <div className="justify-center mt-4">
          <button className="btn btn-block btn-outline btn-primary shadow-lg shadow-blue-500/50" onClick={handleSignup}>Signup</button>
        </div>
      </form>
      {showError && <ToastError value={message} />}
      {showSuccess && <ToastSuccess value={message} />}
    </div>
  );
};

export default SignupForm;

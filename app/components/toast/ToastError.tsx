'use client';
import React from 'react';

interface ToastErrorProps {
  value: string;
}

const ToastError: React.FC<ToastErrorProps> = ({ value }) => {
  return (
    <div className="toast toast-top toast-end">
      <div className="alert alert-error">
        <span>{value}</span>
      </div>
    </div>
  );
}

export default ToastError;

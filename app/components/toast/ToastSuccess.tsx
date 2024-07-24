'use client';
import React from 'react';

interface ToastSuccessProps {
  value: string;
}

const ToastSuccess: React.FC<ToastSuccessProps> = ({value}) => {
  return (
    <div className="toast toast-top toast-end">
        <div className="alert alert-success">
        <span>{value}</span>
        </div>
    </div>
  )
}

export default ToastSuccess

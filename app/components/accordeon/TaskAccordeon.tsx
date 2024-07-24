'use client';
import React, { useState } from 'react';

interface AccordionItemProps {
    title: string;
    content: string;
    name: string;
    isChecked?: boolean;
    isDone?: boolean;
}

const TaskAccordeon: React.FC<AccordionItemProps> = ({ title, content, name, isChecked = false, isDone = false }) => {
    const [done, setDone] = useState(isDone);
    const [open, setOpen] = useState(isChecked);

    const handleCheckboxChange = () => {
      setDone(!done);
    };

    const handleOpenAccordeon = () => {
        setOpen(!open);
    }
    return (
        <label className="flex items-center gap-2">
            <input
                type="checkbox"
                checked={done}
                onChange={handleCheckboxChange}
                className="checkbox checkbox-info"
            />
            <div className="collapse collapse-plus bg-base-200 my-2">
                <input type="radio" name={name} defaultChecked={open} onChange={handleOpenAccordeon} />
                <div className="collapse-title font-medium">{title}</div>
                <div className="collapse-content">
                    <p>{content}</p>
                </div>
            </div>
        </label>
  );
};

export default TaskAccordeon;
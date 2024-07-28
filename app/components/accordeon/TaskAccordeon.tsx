'use client';
import React, { useState } from 'react';

interface AccordionItemProps {
    title: string;
    content: string;
    name: string;
    id: number;
    isChecked?: boolean;
    isDone?: boolean;
    onDelete: (id: number) => void;
}

const TaskAccordeon: React.FC<AccordionItemProps> = ({ id, title, content, name, isChecked = false, isDone = false, onDelete }) => {
    const [done, setDone] = useState(isDone);
    const [open, setOpen] = useState(isChecked);

    const handleCheckboxChange = () => {
        setDone(!done);
        if (!done) {
            onDelete(id);
        }
    };

    const handleOpenAccordeon = () => {
        setOpen(!open);
    };

    return (
        <label className="flex items-center gap-2">
            <input
                type="checkbox"
                checked={done}
                onChange={handleCheckboxChange}
                className="checkbox checkbox-info"
            />
            <div className="collapse collapse-plus bg-base-200 my-2">
                <input type="radio" name={name} checked={open} onChange={handleOpenAccordeon} />
                <div className="collapse-title font-medium">{title}</div>
                <div className="collapse-content">
                    <p>{content}</p>
                </div>
            </div>
        </label>
    );
};

export default TaskAccordeon;

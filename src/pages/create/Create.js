import { useState } from 'react';
import Select from 'react-select';

// styles
import './Create.css';

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Desing' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
];

const Create = () => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, details, dueDate, category.value);
  };

  return (
    <div className='create-form'>
      <h2 className='page-title'>Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input
            required
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </label>

        <label>
          <span>Project details:</span>
          <textarea
            required
            type='text'
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>

        <label>
          <span>Set due date:</span>
          <input
            required
            type='date'
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          ></input>
        </label>

        <label>
          <span>Project caregory:</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        <label>
          <span>Assign to:</span>
          {/* assignee select  here */}
        </label>
        <button className='btn'>Add Project</button>
      </form>
    </div>
  );
};

export default Create;

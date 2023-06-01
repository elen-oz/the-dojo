import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useCollection } from '../../hooks/useCollection';

// styles
import './Create.css';

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Desing' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
];

const Create = () => {
  const { documents } = useCollection('users');
  const [users, setUsers] = useState([]);

  // form field values
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError('Please select a project category');
      return;
    }
    if (assignedUsers.length < 1) {
      setFormError('Please assign the project to at least 1 user');
      return;
    }

    console.log(name, details, dueDate, category.value, assignedUsers);
  };

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

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
          <Select
            options={users}
            onChange={(option) => setAssignedUsers(option)}
            isMulti
          />
        </label>
        <button className='btn'>Add Project</button>

        {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  );
};

export default Create;

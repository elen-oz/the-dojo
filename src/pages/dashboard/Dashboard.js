import { useCollection } from '../../hooks/useCollection';
import { useState } from 'react';

//components
import ProjectList from '../../components/ProjectList';
import ProjectFilter from './ProjectFilter';

// styles
import './Dashboard.css';

const Dashboard = () => {
  const { documents, error } = useCollection('projects');
  const [filter, setFilter] = useState('all');

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {document && <ProjectFilter changeFilter={changeFilter} />}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
};

export default Dashboard;

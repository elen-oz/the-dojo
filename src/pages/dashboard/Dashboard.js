import ProjectList from '../../components/ProjectList';
import { useCollection } from '../../hooks/useCollection';
import ProjectFilter from './ProjectFilter';

// styles
import './Dashboard.css';

const Dashboard = () => {
  const { documents, error } = useCollection('projects');

  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {document && <ProjectFilter />}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
};

export default Dashboard;

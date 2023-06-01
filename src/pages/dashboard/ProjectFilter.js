import { useState } from 'react';

const filterList = ['all', 'mine', 'development', 'design', 'marketing', 'sales'];

const ProjectFilter = () => {
  const [currentFilter, setCurrentFilter] = useState('all');

  const handleClick = (newFilter) => {
    console.log(newFilter);
    setCurrentFilter(newFilter);
  };

  return (
    <div className='project-filter'>
      <nav>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? 'active' : ''}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProjectFilter;

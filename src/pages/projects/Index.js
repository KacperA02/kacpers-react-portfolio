import { useState, useEffect } from 'react';
import ProjectHero from '../../components/ProjectHero';
import axios from 'axios';

const Index = ({ term }) => {
  const [projects, setProjects] = useState([]);
  const [searchProjects, setSearchProjects] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedTag, setSelectedTag] = useState(null);

  const applySort = (data, criteria, order) => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      const aValue = a[criteria];
      const bValue = b[criteria];
      return order === 'asc' ? aValue - bValue : bValue - aValue;
    });
    return sortedData;
  };

  useEffect(() => {
    axios
      .get('https://portfolio-react-92097-default-rtdb.europe-west1.firebasedatabase.app/.json')
      .then((response) => {
        let filteredProjects = applySort(response.data, "date", sortOrder);

        if (selectedTag) {
          filteredProjects = filteredProjects.filter((project) =>
            project.tags.includes(selectedTag)
          );
        }

        setProjects(filteredProjects);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [sortOrder, selectedTag]);

  useEffect(() => {
    if (term.length <= 2) {
      setSearchProjects(projects);
    } else {
      const projectsFilter = projects.filter((project) =>
        project.title.toLowerCase().includes(term.toLowerCase())
      );
      setSelectedTag(null);
      setSearchProjects(projectsFilter);
    }
  }, [projects, term]);

  if (!projects) return 'loading ...';

  const projectsList = searchProjects.map((project, i) => (
    <ProjectHero key={i} project={project} />
  ));

  const tagOptions = [
    'Javascript', 'React', 'HTML', 'Front-End', 'Rest-Client', 'API',
    'PHP', 'Laravel', 'Web-devlopment', 'CSS', 'Data-visualisation',
    'SASS', 'OOP', 'Back-end', 'Python', 'React-native', 'Expo', 'TensorFlow'
  ];

  return (
    <>
      {/* Responsive Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8 mb-6 bg-slate-100 dark:bg-slate-800 p-4 rounded-xl shadow-md">
        {/* Sort Order */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <label htmlFor="sortOrder" className="font-semibold text-slate-700 dark:text-slate-200">
            Sort Order:
          </label>
          <select
            id="sortOrder"
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
            <option value="desc">Most recent</option>
            <option value="asc">Oldest</option>
          </select>
        </div>

        {/* Tag Filter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <label htmlFor="tagFilter" className="font-semibold text-slate-700 dark:text-slate-200">
            Filter by Tag:
          </label>
          <select
            id="tagFilter"
            onChange={(e) => setSelectedTag(e.target.value)}
            value={selectedTag || ''}
            className="px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
            <option value="">All Tags</option>
            {tagOptions.map((tag, index) => (
              <option key={index} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Projects */}
      <div className="grid gap-6">{projectsList}</div>
    </>
  );
};

export default Index;

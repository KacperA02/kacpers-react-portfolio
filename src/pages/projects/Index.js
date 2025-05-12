import { useState, useEffect } from 'react';
import ProjectHero from '../../components/ProjectHero';
import axios from 'axios';



const Index = ({ term }) => {
  // State for storing all projects
  const [projects, setProjects] = useState([]);
  // State for storing projects after search/filter
  const [searchProjects, setSearchProjects] = useState([]);
  // State for sorting order (asc or desc)
  const [sortOrder, setSortOrder] = useState('desc');
  // State for selected tag filter
  const [selectedTag, setSelectedTag] = useState(null);

  // Function to sort data based on criteria and order
const applySort = (data, criteria, order) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    const aValue = a[criteria];
    const bValue = b[criteria];
    return order === 'asc' ? aValue - bValue : bValue - aValue;
  });
  return sortedData;
};

  // Fetch projects from the API and apply sorting and filtering
  useEffect(() => {
    axios
      .get('https://portfolio-react-92097-default-rtdb.europe-west1.firebasedatabase.app/.json')
      .then((response) => {
        // Apply sorting based on criteria and order
        let filteredProjects = applySort(response.data, "date", sortOrder);

        // Apply tag filter if a tag is selected
        if (selectedTag) {
          filteredProjects = filteredProjects.filter((project) =>
            project.tags.includes(selectedTag)
          );
        }

        // Update projects state
        setProjects(filteredProjects);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [sortOrder, selectedTag]);

  // Apply search/filtering based on the search term, sorting, and selected tag
  useEffect(() => {
    if (term.length <= 2) {
      // If search term is less than or equal to 2 characters, show all projects
      setSearchProjects(projects);
    } else {
      // If search term is longer, filter projects by title
      let projectsFilter = projects.filter((project) =>
        project.title.toLowerCase().includes(term.toLowerCase())
      );

      // Reset selected tag when search term is being typed
      setSelectedTag(null);
      setSearchProjects(projectsFilter);
    }
  }, [projects, term, sortOrder, selectedTag]);

  // If projects are not loaded, show loading message
  if (!projects) return 'loading ...';

  // Map through filtered projects and render ProjectHero component for each
  const projectsList = searchProjects.map((project, i) => (
    <ProjectHero key={i} project={project} />
  ));

  // Options for tags dropdown
  const tagOptions = [
    'Javascript',
    'React',
    'HTML',
    'Front-End',
    'Rest-Client',
    'API',
    'PHP',
    'Laravel',
    'Web-devlopment',
    'CSS',
    'Data-visualisation',
    'SASS',
    'OOP',
    'Back-end',
    'Python',
    'React-native',
    'Expo',
    'TensorFlow'
  ];

  // Render the component
  return (
    <>
      {/* Sort and tag filter controls */}
      <div className="flex justify-end items-center mt-5 ">
        <label htmlFor="sortOrder">
          <b>Sort Order: </b>
        </label>
        <select
          id="sortOrder"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="desc">
            <b>Most recent</b>
          </option>
          <option value="asc">
            <b>Oldest</b>
          </option>
        </select>

        {/* Dropdown for selecting tags */}
        <label htmlFor="tagFilter" className="ml-4">
          <b>Select Tag: </b>
        </label>
        <select
          id="tagFilter"
          onChange={(e) => setSelectedTag(e.target.value)}
          value={selectedTag || ''}
        >
          <option value="">All Tags</option>
          {tagOptions.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
      
      {/* Render the filtered projects */}
      <div className="mb-4">{projectsList}</div>
    </>
  );
};

export default Index;

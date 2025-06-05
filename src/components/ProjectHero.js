import { motion } from 'framer-motion';

const ProjectHero = ({ project }) => {
  const tags = project.tags.map((tag, i) => (
    <span key={i} className="badge bg-slate-600 text-white mr-2 mb-2">
      {tag}
    </span>
  ));

  return (
    <motion.div
      className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-2xl shadow-lg overflow-hidden mt-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid lg:grid-cols-2 gap-6 p-6 items-center">
        {/* Project Image */}
        {project.images && (
          <img
            src={project.images[0].path}
            alt="Project"
            title={project.images[0].caption}
            className="w-full rounded-xl shadow-md object-cover"
          />
        )}

        {/* Project Details */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">{project.title}</h2>
          <p className="text-slate-600 dark:text-slate-300"><b>Created in:</b> {project.date}</p>
          <div>
            <b className="text-slate-700 dark:text-slate-200">About this Project:</b>
            <p className="text-slate-600 dark:text-slate-300 mt-1">{project.description}</p>
          </div>
          <div>
            <b className="text-slate-700 dark:text-slate-200">Tags:</b>
            <div className="flex flex-wrap mt-2">{tags}</div>
          </div>
          <div className="flex gap-3 pt-2 flex-wrap">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition"
              >
                Visit Website
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-md transition"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectHero;

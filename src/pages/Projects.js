import React, { useEffect } from "react";
import ProjectsJSON from "../json/projects.json";

const Projects = (props) => {
  const { changeLinkColor } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    changeLinkColor("grey");
  }, [changeLinkColor]);

  const { xml } = props;

  return (
    <section className="Projects-container">
      <div className="thunbnails">
        <h2>Projects</h2>
        {xml.map((item, key) => {
          return <div key={key} className="thumbnail-container"></div>;
        })}
      </div>
    </section>
  );
};

// import React from "react";
// import { useState, useEffect } from "react";
// import { Link as RouterLink } from "react-router-dom";
// import List from "../components/List";

// function Projects({ userName }) {
//   const [loading, setLoading] = useState(true);
//   const [projects, setProjects] = useState({});
//   useEffect(() => {
//     async function fetchData() {
//       const data = await fetch(
//         `https://api.github.com/users/${userName}/repos`
//       );
//       const result = await data.json();
//       if (result) {
//         setProjects(result);
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [userName]);

//   return (
//     <div className="Projects-container">
//       <h2>Projects</h2>
//       {loading ? (
//         <span>Loading...</span>
//       ) : (
//         <div>
//           <List
//             items={projects.map((project) => ({
//               field: project.name,
//               value: (
//                 <RouterLink url={project.html_url} title={project.html_url} />
//               ),
//             }))}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

export default Projects;

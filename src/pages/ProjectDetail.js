import React from "react";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProjectDetail = (props) => {
  let { title, index, thumbnail, desc } = props;

  return (
    <div className="project-module">
      <Link to={`/project-page/${index}`}>
        <img src={`/bmps${thumbnail}`} alt={`${title} thumbnail`} />
      </Link>
      <h3>
        <Link to={`/project-page/${index}`}></Link>
      </h3>
      <p>{desc}</p>
      <Link className="project-link" to={`/project-page/${index}`}>
        see project
      </Link>
    </div>
  );
};

// function ProjectDetail({ userName }) {
//   const [loading, setLoading] = useState(false);
//   const [project, setProject] = useState([]);
//   const { name } = useParams();
//   useEffect(() => {
//     async function fetchData() {
//       const data = await fetch(
//         `https://api.github.com/repos/k8molony/superFlix-client`
//       );
//       const result = await data.json();
//       if (result) {
//         setProject(result);
//         setLoading(false);
//       }
//     }
//     if (userName && name) {
//       fetchData();
//     }
//   }, [userName, name]);

//   return (
//     <div className="Project-container">
//       <h3>Project: {project.name}</h3>
//       {loading ? <span>Loading...</span> : <div></div>}
//     </div>
//   );
// }

export default ProjectDetail;

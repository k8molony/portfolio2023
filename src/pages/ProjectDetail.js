import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectDetail({ userName }) {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.github.com/repos/k8molony/superFlix-client`
      );
      const result = await data.json();
      if (result) {
        setProject(result);
        setLoading(false);
      }
    }
    if (userName && name) {
      fetchData();
    }
  }, [userName, name]);

  return (
    <div className="Project-container">
      <h3>Project: {project.name}</h3>
      {loading ? <span>Loading...</span> : <div></div>}
    </div>
  );
}

export default ProjectDetail;

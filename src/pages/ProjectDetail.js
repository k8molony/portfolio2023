import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProjectDetail(props) {
  // const [loading, setLoading] = useState(true);
  const [projectDetails, setProjectDetail] = useState({});

  useEffect(() => {
    setProjectDetail({
      title: props.title,
      index: props.index,
      imagePath: props.imagePath,
      desc: props.desc,
    });
    // setLoading(false);
  }, [props.desc, props.imagePath, props.index, props.title]);

  // const ProjectDetail = (props) => {
  //   let { title, index, thumbnail, desc } = props;

  return (
    <div className="project-module">
      <Link to={`/project-page/${projectDetails.index}`}>
        <img
          src={`/bmps${projectDetails.imagePath}`}
          alt={`${projectDetails.title} thumbnail`}
        />
      </Link>
      <h3>
        <Link to={`/project-page/${projectDetails.index}`}>
          {projectDetails.title}
        </Link>
      </h3>
      <p>{projectDetails.desc}</p>
      <Link
        className="project-link"
        to={`/project-page/${projectDetails.index}`}
      >
        see project
      </Link>
    </div>
  );
}

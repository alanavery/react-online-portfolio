import { Link } from 'react-router-dom';

const Project = (props) => {
  const projectImg = props.project.img.map((img, idx) => {
    return (
      <img className="project-img" src={img} alt={`${props.project.title}, ${idx + 1}`} key={idx} />
    );
  });

  return (
    <div className="div-project-page">
      <div
        className="div-project-header"
        style={{ backgroundImage: `url(${props.project.heroImg})` }}
      ></div>
      <div className="div-project-main">
        <div className="div-project-info">
          <h1 className="project-title">{props.project.title}</h1>
          <p className="text-body">
            <strong>What You're Seeing:</strong> {props.project.description}
          </p>
        </div>
        <div className="div-project-img">{projectImg}</div>
        <div className="div-project-nav">
          <Link className="capsizedText" to={`/work/${props.prevId}`}>
            Previous
          </Link>
          <Link className="capsizedText" to={`/work/${props.nextId}`}>
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;

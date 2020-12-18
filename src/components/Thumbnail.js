function Thumbnail(props) {
  return (
    <div className="div-thumbnail">
      <h1 className="project-name">{props.name}</h1>
      <img className="img-thumbnail" src={props.img}></img>
    </div>
  );
}

export default Thumbnail;

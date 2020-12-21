const Thumbnail = (props) => {
  return (
    <div className="div-thumbnail">
      <h1 className="thumbnail-title">{props.title}</h1>
      <img className="thumbnail-img" src={props.img} alt={props.name}></img>
    </div>
  );
};

export default Thumbnail;

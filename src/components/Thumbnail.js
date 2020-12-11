function Thumbnail(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img className="img-thumbnail" src={props.img}></img>
    </div>
  );
}

export default Thumbnail;

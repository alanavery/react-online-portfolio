function GitHubResults(props) {
  return (
    <div>
      <h4>Info on {props.user.name}</h4>
      <p>Location: {props.user.location}</p>
      <p>Email: {props.user.email}</p>
      <p>Bio: {props.user.bio}</p>
    </div>
  );
}

export default GitHubResults;

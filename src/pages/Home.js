import { Link } from 'react-router-dom';
import Thumbnail from '../components/Thumbnail';

const Home = (props) => {
  const project = props.work.map((project) => {
    if (project.category === 'graphic design') {
      return (
        <Link to={`/work/${project.id}`} key={project.id}>
          <Thumbnail title={project.title} img={project.thumbnail} />
        </Link>
      );
    } else if (project.category === 'web development') {
      return (
        <Link to={project.url} key={project.id}>
          <Thumbnail title={project.title} img={project.thumbnail} />
        </Link>
      );
    }
  });

  return <div className="div-thumbnail-grid">{project}</div>;
};

export default Home;

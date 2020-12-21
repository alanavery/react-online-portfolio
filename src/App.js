import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import Header from './components/Header';

import './App.css';
import imgProject0101 from './img/project-fpo-01.jpg';
import imgProject0102 from './img/project-fpo-02.jpg';
import imgProject0103 from './img/project-fpo-03.jpg';
import imgProject0104 from './img/project-fpo-04.jpg';

const App = () => {
  const work = [
    {
      id: 1,
      title: 'Project 1',
      heroImg: imgProject0101,
      img: [imgProject0101, imgProject0102, imgProject0103, imgProject0104],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis quo officiis ipsa deleniti a facere recusandae soluta quia! Delectus iusto perspiciatis quia ipsam adipisci possimus facere id aspernatur expedita.'
    },
    {
      id: 2,
      title: 'Project 2',
      heroImg: imgProject0101,
      img: [imgProject0101, imgProject0102, imgProject0103, imgProject0104],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis quo officiis ipsa deleniti a facere recusandae soluta quia! Delectus iusto perspiciatis quia ipsam adipisci possimus facere id aspernatur expedita.'
    },
    {
      id: 3,
      title: 'Project 3',
      heroImg: imgProject0101,
      img: [imgProject0101, imgProject0102, imgProject0103, imgProject0104],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis quo officiis ipsa deleniti a facere recusandae soluta quia! Delectus iusto perspiciatis quia ipsam adipisci possimus facere id aspernatur expedita.'
    },
    {
      id: 4,
      title: 'Project 4',
      heroImg: imgProject0101,
      img: [imgProject0101, imgProject0102, imgProject0103, imgProject0104],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis quo officiis ipsa deleniti a facere recusandae soluta quia! Delectus iusto perspiciatis quia ipsam adipisci possimus facere id aspernatur expedita.'
    },
    {
      id: 5,
      title: 'Project 5',
      heroImg: imgProject0101,
      img: [imgProject0101, imgProject0102, imgProject0103, imgProject0104],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis quo officiis ipsa deleniti a facere recusandae soluta quia! Delectus iusto perspiciatis quia ipsam adipisci possimus facere id aspernatur expedita.'
    },
    {
      id: 6,
      title: 'Project 6',
      heroImg: imgProject0101,
      img: [imgProject0101, imgProject0102, imgProject0103, imgProject0104],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis quo officiis ipsa deleniti a facere recusandae soluta quia! Delectus iusto perspiciatis quia ipsam adipisci possimus facere id aspernatur expedita.'
    }
  ];

  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Route exact path="/" render={() => <Home work={work} />} />
          <Route
            path="/work/:id"
            render={(routeProps) => {
              console.log(routeProps);
              const project = work.find((project) => {
                return project.id === Number(routeProps.match.params.id);
              });
              return <Project project={project} />;
            }}
          />
          <Route path="/about" component={About} />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

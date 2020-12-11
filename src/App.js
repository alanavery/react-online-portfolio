import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Weather from './components/Weather';
import GitHub from './components/GitHub';

import './App.css';
import imgProject1 from './img/project1.png';

function App() {
  const work = [
    {
      id: 1,
      name: 'Project 1',
      img: imgProject1,
      description: 'This is a brief description of project 1.'
    },
    {
      id: 2,
      name: 'Project 2',
      img: imgProject1,
      description: 'This is a brief description of project 2.'
    },
    {
      id: 3,
      name: 'Project 3',
      img: imgProject1,
      description: 'This is a brief description of project 3.'
    },
    {
      id: 4,
      name: 'Project 4',
      img: imgProject1,
      description: 'This is a brief description of project 4.'
    },
    {
      id: 5,
      name: 'Project 5',
      img: imgProject1,
      description: 'This is a brief description of project 5.'
    },
    {
      id: 6,
      name: 'Project 6',
      img: imgProject1,
      description: 'This is a brief description of project 6.'
    }
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route
          exact
          path="/"
          render={() => {
            return <Home work={work} />;
          }}
        />
        <Route path="/about" component={About} />
        <Route path="/weather" component={Weather} />
        <Route path="/github" component={GitHub} />
      </div>
    </BrowserRouter>
  );
}

export default App;

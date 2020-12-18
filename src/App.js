import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Header from './components/Header';

import './App.css';
import imgProjectFpo from './img/project-fpo.jpg';

function App() {
  const work = [
    {
      id: 1,
      name: 'Project 1',
      img: imgProjectFpo,
      description: 'This is a brief description of project 1.'
    },
    {
      id: 2,
      name: 'Project 2',
      img: imgProjectFpo,
      description: 'This is a brief description of project 2.'
    },
    {
      id: 3,
      name: 'Project 3',
      img: imgProjectFpo,
      description: 'This is a brief description of project 3.'
    },
    {
      id: 4,
      name: 'Project 4',
      img: imgProjectFpo,
      description: 'This is a brief description of project 4.'
    },
    {
      id: 5,
      name: 'Project 5',
      img: imgProjectFpo,
      description: 'This is a brief description of project 5.'
    },
    {
      id: 6,
      name: 'Project 6',
      img: imgProjectFpo,
      description: 'This is a brief description of project 6.'
    }
  ];

  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Route
            exact
            path="/"
            render={() => {
              return <Home work={work} />;
            }}
          />
          <Route path="/about" component={About} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

import {Routes, Route} from 'react-router-dom'
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Project from './components/projectz/Project';
import ImageClassifier from './components/img-classifier/ImageClassifier'
import MovieHome from './components/movie/MovieHome'
import Movie from './components/movie/SingleMovie'

const Hellow = () => <h1>Hello World</h1>

function App() {
  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path='experience' element={<Experience />} />
        <Route path='skills' element={<Skills />} />
        <Route path='project' element={<Project />} />
        <Route path='img-classifier' element={<ImageClassifier />} />
        <Route path='movie' element={<MovieHome />} />
        <Route path='/movies/:id' element={<Movie />} />
        <Route path='speech-recognition' element={<Hellow />} />
      </Routes>
    </div>
  );
}

export default App;

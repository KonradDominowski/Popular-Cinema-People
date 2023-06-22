import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout';
import Movies, { loader as moviesLoader } from './pages/Movies';
import Movie, { loader as detailsLoader } from './pages/Movie';

const API_KEY = `b12be5c91f9c23950c809e4d6f906c31`

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      {
        path: 'movies',
        children: [
          { index: true, element: <Movies />, loader: moviesLoader },
          { path: ':movieID', element: <Movie />, loader: detailsLoader }
        ]
      }
    ]
  }
])
function App() {


  return (
    <RouterProvider router={ router } />
  );
}

export default App;

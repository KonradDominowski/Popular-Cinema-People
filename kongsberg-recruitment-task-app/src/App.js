import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout';
// import Movies, { loader, loader as moviesLoader } from './pages/Movies';
// import Movie, { loader as detailsLoader } from '../maybe not necessary/Movie';
import People, { loader as peopleLoader } from './pages/People';
import Person, { loader as personLoader } from './pages/Person';

const API_KEY = `b12be5c91f9c23950c809e4d6f906c31`

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      // {
      //   path: 'movies',
      //   children: [
      //     { index: true, element: <Movies />, loader: moviesLoader },
      //     { path: ':movieID', element: <Movie />, loader: detailsLoader },
      //   ]
      // },
      {
        path: 'people',
        element: <People />,
        loader: peopleLoader,
        children: [
          { path: ':personID', id: 'personDetails', element: <Person />, loader: personLoader }
        ]
      },
      // {
      //   path: 'people',
      //   children: [
      //     { index: true, element: <People />, loader: peopleLoader },
      //     { path: ':personID', element: <Person />, loader: personLoader }
      //   ]
      // },

    ]
  }
])
function App() {


  return (
    <RouterProvider router={ router } />
  );
}

export default App;

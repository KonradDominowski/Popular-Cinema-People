import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout';
// import Movies, { loader, loader as moviesLoader } from './pages/Movies';
// import Movie, { loader as detailsLoader } from '../maybe not necessary/Movie';
import People, { loader as peopleLoader } from './pages/People';
import Person, { loader as personLoader } from './pages/Person';

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      {
        path: 'people',
        element: <People />,
        loader: peopleLoader,
        children: [
          {
            path: ':personID',
            id: 'personDetails',
            element: <Person />,
            loader: personLoader
          }
        ]
      },
    ]
  }
])
function App() {

  return (
    <RouterProvider router={ router } />
  );
}

export default App;

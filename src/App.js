import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import personDetailsContext from './context/personDetailsContext';

import ErrorElement from './pages/ErrorElement';
import RootLayout from './pages/RootLayout';
import People, { loader as peopleLoader } from './pages/People';
import Person, { loader as personLoader } from './pages/Person';
import { useState } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorElement />,
    element: <RootLayout />,
    children: [
      { index: true, loader: () => redirect('people') },
      {
        path: 'people',
        children: [
          { index: true, loader: () => redirect('1') },
          {
            path: ':pageNumber',
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
    ]
  }
])

function App() {
  const [currentName, setCurrentName] = useState()

  return (
    <personDetailsContext.Provider value={ { currentName: currentName, setCurrentName: setCurrentName } }>
      <RouterProvider router={ router } />
    </personDetailsContext.Provider>
  );
}

export default App;

import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout';
import Books from './pages/Books';

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      {
        path: 'books',
        handle: { crumb: () => <Link to={ 'books' }>Books</Link> },
        children: [
          { index: true, element: <Books /> },
          { path: ':bookID', element: <h3>This is book details</h3> }
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

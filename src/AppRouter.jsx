import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import AccommodationPage from './pages/AccommodationPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'accommodation/:id',
    element: <AccommodationPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

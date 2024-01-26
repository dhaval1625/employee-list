import './App.css';
import './assets/css/custom.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MultiStepForm from './pages/MultiStepForm';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Dashboard />,
   },
   {
      path: '/employee/add',
      element: <MultiStepForm />,
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;

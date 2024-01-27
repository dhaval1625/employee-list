import './App.css';
import './assets/css/custom.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MultiStepForm from './pages/MultiStepForm';
import EmployeeList from './pages/EmployeeList';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Dashboard />,
   },
   {
      path: '/employee/add',
      element: <MultiStepForm />,
   },
   {
      path: '/employee/list',
      element: <EmployeeList />,
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;

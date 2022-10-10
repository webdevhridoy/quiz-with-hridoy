import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error/Error';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import SingleQuizs from './components/SingleQuizs/SingleQuizs';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/singlequiz/:singlequizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.singlequizId}`);
          },
          element: <SingleQuizs></SingleQuizs>,
        },
        { path: '/statistics', element: <Statistics></Statistics> },
        { path: '/blogs', element: <Blogs></Blogs> }
      ]
    },
    { path: '*', element: <Error></Error> }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

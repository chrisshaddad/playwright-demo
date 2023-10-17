import React from 'react';
import logo from './logo.svg';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import SignInPage from './components/pages/sign-in'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import RootLayout from './RootLayout';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { ContactPage } from './Pages/ContactPage';
import { AboutPage } from './Pages/AboutPage';
import { ExperiencePage } from './Pages/ExperiencePage';
import { BlogPage } from './Pages/BlogPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'experience',
        element: <ExperiencePage />
      },
      {
        path: 'blog',
        element: <BlogPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
    ]
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

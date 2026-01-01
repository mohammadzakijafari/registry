import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root";
import SearchPage from "./pages/search/SearchPage";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { searchLoader } from "./pages/search/searchLoader";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: '/search',
          element: <SearchPage />,
          loader: searchLoader,
        },
        {
          path: '/packages/:name',
          element: <DetailsPage />
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App

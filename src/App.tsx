import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root";
import SearchPage from "./pages/search/SearchPage";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/details/DetailsPage";
import { searchLoader } from "./pages/search/searchLoader";
import { detailsLoader } from "./pages/details/detailsLoader";

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
          element: <DetailsPage />,
          loader: detailsLoader,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App

import {
  createHashRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Home from "./component/Home";


const router = createHashRouter([
  {
    path: "/",
    element: <Dashboard/>,
    children: [
      {
         path: "/",
         element: <Navigate to={"/home"}/>,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);


function App() {





  return (
   <RouterProvider router={router} >
  </RouterProvider>
  );
}

export default App;

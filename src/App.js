import { Provider } from "react-redux";
import "./App.css";
import Body from "./Componants/Body";
import Header from "./Componants/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./Componants/Maincontainer";
import Watchpage from "./Componants/Watchpage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

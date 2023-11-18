import { createHashRouter } from "react-router-dom"
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";

const hashRouter = createHashRouter([
    {
        path: '/men',
        element: <Men />
    },
    {
        path: '/women',
        element: <Women />
    },
    {
        path: '/',
        element: <Home />
    }
]);
export default hashRouter;

import { createRoot } from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/index.scss";
import { Home } from "./component/home.js";

const root = createRoot(document.querySelector("#app"));
root.render(<Home />);


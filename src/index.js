import { createRoot } from "react-dom/client";
import MenuContainer from "./MenuContainer";
import "./styles.css";

const rootElement = document.getElementById("container");
const root = createRoot(rootElement);

root.render(<MenuContainer />);

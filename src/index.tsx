import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { ModalState } from "./context/modal.context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ModalState>
				<App />
			</ModalState>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();

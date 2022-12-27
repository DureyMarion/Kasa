// Importation composants React
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Importation du component enfant App
import App from "./App";

// Création de la variable "root" repris dans le fichier HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

//Affichage de la page web
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
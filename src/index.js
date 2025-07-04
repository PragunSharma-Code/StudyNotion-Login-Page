import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <BrowserRouter>
            <App />
            <Toaster />
        </BrowserRouter>
    </div>
);

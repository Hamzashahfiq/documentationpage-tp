import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import AppBarCom from "../commonComponent/appBarCom/AppBarCom";
import DocumentationPage from "../modules/contactPage/documentationPage/DocumentationPage";


export default function Navigations() {
    return (
        <BrowserRouter>
          <AppBarCom />
            <Routes>
                <Route path="/" element={<DocumentationPage />} />
            </Routes>
        </BrowserRouter>
    )
}

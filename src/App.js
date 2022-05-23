import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Svg from "./components/Svg";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";

function App() {
    return (
        <>
            <BrowserRouter>
                <Svg/>
                <Layout>
                    <Routes>
                        <Route index element={<Homepage/>}/>
                        <Route path={'/about-us'} element={<About/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;

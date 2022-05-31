import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Svg from "./components/Svg";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import ExtaraNews from "./pages/ExtraNews";
import World from "./pages/World";


function App() {
    return (
        <>
            <BrowserRouter>
                <Svg/>
                <Layout>
                    <Routes>
                        <Route index element={<Homepage/>}/>
                        <Route path={'/about-us'} element={<About/>}/>
                        <Route path={'/services'} element={<Services/>}/>
                        <Route path={'extranews'} element={<ExtaraNews/>}/>
                        <Route path={'world'} element={<World/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;

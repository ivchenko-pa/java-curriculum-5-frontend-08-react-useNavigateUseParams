import './App.css'
import {Route, Routes, useNavigate} from "react-router-dom";
import CharacterCatalog from "./components/CharacterCatalog.tsx";
import Home from "./components/Home.tsx";
import Contact from "./components/Contact.tsx";
import CharacterDetails from "./components/CharacterDetails.tsx";

export default function App() {

    const nav = useNavigate();
    function doAndNav(dest:string){
        nav(dest);
    }
    return (
        <>
            <h1>My page</h1>
            <section className="nav-buttons">
                <input type="button" value="Home" onClick={() => {
                    doAndNav("/")
                }}/>
                <input type="button" value="Characters" onClick={() => {
                    doAndNav("/characters")
                }}/>
                <input type="button" value="Contact" onClick={() => {
                    doAndNav("/contact")
                }}/>
            </section>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/characters" element={<CharacterCatalog/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/characters/:id" element={<CharacterDetails/>}/>
            </Routes>
        </>
    )

}

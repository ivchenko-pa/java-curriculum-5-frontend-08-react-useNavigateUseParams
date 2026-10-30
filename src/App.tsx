import './App.css'
import {Route, Routes, useNavigate} from "react-router-dom";
import CharacterCatalog from "./components/CharacterCatalog.tsx";
import Home from "./components/Home.tsx";
import Contact from "./components/Contact.tsx";
import CharacterDetails from "./components/CharacterDetails.tsx";
import PlaceNewCharacter from "./components/PlaceNewCharacter.tsx";
import {useState} from "react";
import {characters} from "./Characters.ts";


export default function App() {


    const [charactersState, setCharacters] = useState(characters)



    const nav = useNavigate();

    return (
        <>
            <h1>My page</h1>
            <section className="nav-buttons">
                <input type="button" value="Home" onClick={() => {
                    nav("/")
                }}/>
                <input type="button" value="Characters" onClick={() => {
                    nav("/characters")
                }}/>
                <input type="button" value="Contact" onClick={() => {
                    nav("/contact")
                }}/>
            </section>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/characters" element={<CharacterCatalog characters = {charactersState}/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/characters/:id" element={<CharacterDetails/>}/>
                <Route path="/characters/placeNewCharacter" element={<PlaceNewCharacter characters = {charactersState}
                                                                                        setCharacters = {setCharacters}/>}/>
            </Routes>
        </>
    )

}

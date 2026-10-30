import {useState} from "react";
import CharacterGallery from "./CharacterGallery.tsx";
import {useNavigate} from "react-router-dom";
import {Character} from "../types/RickAndMortyCharacter.ts";

type CharacterCatalogProps = {
    characters: Character[]
}

export default function CharacterCatalog(props:Readonly<CharacterCatalogProps>){

    const [searchText, setSearchText] = useState("");
    const nav = useNavigate()


    const filteredCharacters = props.characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));



    return (
        <>
            <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
            <input type="button" onClick={()=>nav("/characters/placeNewCharacter")} value="Place new character"/>
            {
                filteredCharacters.length > 0
                    ? <CharacterGallery characters={filteredCharacters}/>
                    : <p>No characters found</p>
            }
        </>
    );

}
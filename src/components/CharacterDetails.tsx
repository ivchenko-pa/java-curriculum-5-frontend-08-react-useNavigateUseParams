import {characters} from "../Characters.ts";
import {useNavigate, useParams} from "react-router-dom";

export default function CharacterDetails() {
    const params = useParams();
    const nav = useNavigate()


    const character = characters.find((character) => character.id.toString() === params.id)

    if(!character){
        return <p>404 - Character not found</p>

    }

    return (
        <>
            <p>{character.name}</p>
            <img src={character.image} alt={character.name}/>
            <input type="button" onClick={() => nav("/characters")} value="Back to Catalog..."/>
        </>
    )

}
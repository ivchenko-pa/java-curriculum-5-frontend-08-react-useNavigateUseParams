import {Character} from "../types/RickAndMortyCharacter.ts";
import {useNavigate} from "react-router-dom";
import {type FormEvent} from "react";


type PlaceNewCharacterProps = {
    characters:Character[]
    setCharacters:(character:Character[])=>void
}

export default function PlaceNewCharacter(props:Readonly<PlaceNewCharacterProps>){

    const nav = useNavigate();


    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        console.log(props.characters)

        const newCharacter: Character = {
            id: Math.floor(Math.random() * (1000 - 21 + 1)) + 21,
            name: data.name.toString(),
            status: data.status.toString()
        };

        props.characters.push(newCharacter)

        props.setCharacters(props.characters);
        (event.target as HTMLFormElement).reset();
        nav("/characters")
    }

    return(

        <form onSubmit={handleSubmit}>
            <h2>Create new character form</h2>
            <label>
                <input type="text" name="name" placeholder="Character name..."/>
            </label>
            <label>
                <input type="text" name="status" placeholder="Character status..."/>
            </label>
            <input type="submit" value="Create"/>
        </form>

    );


}
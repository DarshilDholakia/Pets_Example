import { useState,useEffect } from "react";
import PetForm from "../components/PetForm";
import PetList from "../components/PetList";

const PetContainer = () => {

    const [pets, setPets] = useState([]); //initialisting some state in this pet container

    useEffect(() => {
        fetch("http://localhost:8080/pets")
        .then(response => response.json())
        .then(data => setPets(data))
        .catch(error => console.error(error))
    },[])

    const addPetToDatabase = (newPet) => {
        fetch("http://localhost:8080/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPet)
        })
        .then(response => response.json())
        .then(data => setPets([...pets,data]))
    }

    return (
        <>
            <PetForm onPetSubmission={addPetToDatabase}/>
            <hr/>
            <PetList allPets={pets}/>
            
        </>
    )
}

export default PetContainer;
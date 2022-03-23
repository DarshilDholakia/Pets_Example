import Pet from "./Pet";

const PetList = ({allPets}) => {

    const petNodes = allPets.map(pet => {
        return <Pet 
                    pet={pet}
                    key={pet.id}/>
    })

    return (
        <>
        {petNodes}
        </>
    )
}

export default PetList;
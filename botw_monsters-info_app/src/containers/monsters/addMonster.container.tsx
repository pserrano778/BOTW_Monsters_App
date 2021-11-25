import {useState} from "react";
import AddMonsterFrom from "../../components/monsters/addMonsterForm/addMonsterForm.component"

// MonsterDetails
interface MonsterDetails {
    id: number;
    name: string;
    image: string;
    description: string;
    locations: string;
    drops: string;
}

// Event interface
interface Event{
    target: {name: string, value: string};
}

const AddMonsterContainer = () => {

    const [monsterDetails, setMonsterDetails] = useState<MonsterDetails>({id: 0,
    name: "",
    image: "",
    description: "",
    locations: "",
    drops: "",});
    
    // When there is a change 
    const handleChange = (e: Event) => {
        const {name, value} = e.target;
        setMonsterDetails((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // When data is submited
    const handleSubmit = () => {
        console.log("SUBMIT")
        // Create monster Object to post it
        const newMonster = {
            id: monsterDetails.id,
            name: monsterDetails.name,
            image: monsterDetails.image,
            description: monsterDetails.description,
            location: monsterDetails.locations.split(","),
            drops: monsterDetails.drops.split(",")
        }

        console.log(newMonster)
    }

    return (
        <AddMonsterFrom value={monsterDetails} onChange={handleChange} onSubmit={handleSubmit}/>
    )
}
  
export default AddMonsterContainer;
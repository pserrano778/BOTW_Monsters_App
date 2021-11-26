import {useState} from "react";
import AddMonsterForm from "../../components/monsters/addMonsterForm/addMonsterForm.component"
import {addMonster} from "../../redux/actions/monsters";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

// MonsterDetails
interface MonsterDetails {
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

    const [monsterDetails, setMonsterDetails] = useState<MonsterDetails>({
    name: "",
    image: "",
    description: "",
    locations: "",
    drops: "",});
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // When there is a change 
    const handleChange = (e: Event) => {
        const {name, value} = e.target;
        setMonsterDetails((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // When data is submited
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //Avoid to refresh the page
        e.preventDefault();
        // Create monster Object to post it
        const newMonster = {
            name: monsterDetails.name,
            image: monsterDetails.image,
            description: monsterDetails.description,
            locations: monsterDetails.locations,
            drops: monsterDetails.drops
        }

        // Dispatch addMonster action
        dispatch(addMonster(newMonster))
        
        // Navigate to previous page
        navigate("/")
    }

    return (
        <AddMonsterForm value={monsterDetails} onChange={handleChange} onSubmit={handleSubmit}/>
    )
}
  
export default AddMonsterContainer;
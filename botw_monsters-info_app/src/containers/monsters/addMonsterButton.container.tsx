import AddMonsterButton
 from "../../components/monsters/addMonsterButton/addMonstersButton.component";
import { useNavigate } from "react-router-dom";
const AddMonsterButtonContainer = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/addMonster")
    }
    
    return (
      <AddMonsterButton onClick={handleClick}/>
    )
  }
  
  export default AddMonsterButtonContainer;
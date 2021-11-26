import React from "react";
import MonsterPreview from "../monsterPreview/monsterPreview.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// Monster interface
interface Monster {
    name: string;
    image: string;
}


// Props interface
interface Props {
    monsters: Monster[];
}

// Function that controls all monsters
const MonstersList: React.FC<Props> = (props) => {
    const { monsters } = props

    if(!monsters || monsters.length === 0){
        return <p>There is no monster that matches the filter.</p>;
    }
    return (
        <Container>
            <Row xs="1" sm="2" md="3" lg="4" xl="5" xxl="6" className="justify-content-center">
                {monsters.map((monster) => <MonsterPreview key={monster.name} name={monster.name} src={monster.image} />)}
            </Row>
        </Container>
    )
}

export default MonstersList;
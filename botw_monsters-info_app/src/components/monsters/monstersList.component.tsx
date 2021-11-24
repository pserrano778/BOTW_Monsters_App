import React from "react";
import MonsterPreview from "./monsterPreview.component";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
// Monster interface
interface Monster {
  id: number;
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
      <Row>
        <Col>
        
            {monsters.map((monster) => <MonsterPreview key={monster.id} name={monster.name} src={monster.image} />)}
       
        </Col>
      </Row>
    </Container>
  )
}

export default MonstersList;
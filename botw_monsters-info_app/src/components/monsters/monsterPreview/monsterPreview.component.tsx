import React from 'react';
import {Link} from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
// Props interface
interface Props {
  name: string;
  src: string;
}

// Function that display the monster Preview
const MonstersPeview: React.FC<Props> = (props) => {
  const {name, src} = props;
  //Return the preview with a link to the monster data
  return (
    <Col>
      <Nav.Item>
        <Figure>
          <Link to={"/"+name.replace(" ", "_")}>
            <Figure.Image
              alt={name}
              src={src}
  
            />
          </Link>
          <Link to={"/"+name.replace(" ", "_")}>
            <Figure.Caption>
              {name}
            </Figure.Caption>
          </Link>
        </Figure>
      </Nav.Item>
    </Col>
  )
}

export default MonstersPeview;
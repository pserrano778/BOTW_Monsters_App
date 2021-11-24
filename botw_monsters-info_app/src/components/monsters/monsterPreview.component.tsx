import React from 'react';
import {Link} from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import ListGroup from "react-bootstrap/ListGroup";
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
    <div>
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
    </div>
  )
}

export default MonstersPeview;
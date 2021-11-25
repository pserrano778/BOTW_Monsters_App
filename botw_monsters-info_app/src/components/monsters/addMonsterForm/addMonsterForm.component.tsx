import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
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

// Props interface
interface Props {
    value: MonsterDetails,
    onChange: (e: Event) => void
    onSubmit: () => void
}

const addMonsterFromComponent: React.FC<Props> = (props) => {

    const {value, onChange, onSubmit} = props

    return (
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>Monster ID</Form.Label>
                <Col sm={10}>
                    <Form.Control type="number" placeholder="Enter monster ID" onChange={onChange} name="id" value={value.id} min="0" required/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>Name</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Enter monster name" onChange={onChange} name="name" value={value.name} required/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>Image</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Enter monster image" onChange={onChange} name="image" value={value.image} required/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>Description</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Enter monster description" onChange={onChange} name="description" value={value.description} required/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>Locations</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Enter monster locations" onChange={onChange} name="locations" value={value.locations} required/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>Drops</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Enter monster drops" onChange={onChange} name="drops" value={value.drops}/>
                </Col>
            </Form.Group>

            <Button variant="primary" type="submit" onSubmit={onSubmit}>
                Submit
            </Button>
        </Form>
    )
}

export default addMonsterFromComponent;
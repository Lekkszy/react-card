import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.productImg} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Title>
          Price: {props.price} ---{props.size}
        </Card.Title>
    
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
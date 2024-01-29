import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card_img.css";

function Card_img(props) {
  return (
// card_1
    <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={props.source_img} id='card_img'/>
      <Card.Body id='card_body'>
        <Card.Title class='card_text'>{props.card_Title}</Card.Title>
        <Card.Text class='card_text'>{props.Text}</Card.Text>
          <Button variant={props.off} id='off'>{props.btn_off}</Button>
        <div id="btn">
          <Button variant={props.add}>{props.btn_text}</Button>
          <Button variant= {props.buy}>{props.btn_buy}</Button>
          </div>
      </Card.Body>
    </Card>



  );
}

export default Card_img;
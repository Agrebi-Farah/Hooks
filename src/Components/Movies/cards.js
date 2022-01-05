
import React from 'react' ;
import Rating from '../Movies/rating' ;
import {Card,} from 'react-bootstrap' ;
function cards({Aflem}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Aflem.image}/>
  <Card.Body>
    <Card.Title>{Aflem.name}</Card.Title>
    <Card.Text>
    {Aflem.description}
    </Card.Text>
    <Card.Text>
    {Aflem.Rating}
    </Card.Text>
    
  </Card.Body>
</Card>
        </div>
    )
}
export default cards
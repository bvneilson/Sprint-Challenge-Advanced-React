import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const PlayerCard = props => {

  return (
    <Card className="player-card">
      <CardBody>
        <CardTitle><h2>{props.data.name}</h2></CardTitle>
        <CardSubtitle><strong>Rank</strong>: {(props.data.id + 1)}</CardSubtitle>
        <CardText><strong>Number of Searches</strong>: {props.data.searches}</CardText>
        <CardText><strong>Country</strong>: {props.data.country}</CardText>
      </CardBody>
    </Card>
  )
}

export default PlayerCard;

import React from 'react';
import PlayerCard from './PlayerCard.js';

const PlayerList = props => {

  if (!props.data) {
    return <h2>Loading...</h2>;
  }

  return (
    props.data.map((player, index) => {
      return <PlayerCard data={player} key={index} />
    })
  )
}

export default PlayerList;

import React from 'react';
import PlayerCard from './PlayerCard.js';

const PlayerList = props => {

  if (!props.data) {
    return <h2>Loading...</h2>;
  }

  return (
    props.data.slice(0, props.limit).map((player, index) => {
      return <PlayerCard data={player} key={index} />
    })
  )
}

export default PlayerList;

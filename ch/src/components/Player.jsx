import { useState } from "react";

export default function Player() {
  const [player, setPlayer] = useState({
    firstName: 'Tala',
    lastName: 'Hethnawi',
    score: 0,
  });

  //const [counter,setCounter]=useState(0);
  //const increment=()=>{
  //setCounter(counter+1);
  // setPlayer({...player,score:player.score+1});
  //}

  function handlePlusClick() {
    //player.score++;//wrong you have to say score+1
    setPlayer({ ...player, score: player.score + 1 });
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,lastName: e.target.value
    });//use newPlayer
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}
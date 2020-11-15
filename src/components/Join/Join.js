import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleNameChange = event => {
    const { value } = event.target;
    setName(value);
  }

  const handleRoomChange = event => {
    const { value } = event.target;
    setRoom(value);
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join!</h1>
        <div><input placeholder="Name" className="joinInput" value={name} type="text" onChange={handleNameChange} /></div>
        <div><input placeholder="Room" className="joinInput mt-20" value={room} type="text" onChange={handleRoomChange} /></div>
        <Link
          onClick={event => (!name || !room) ? event.preventDefault() : null}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20">Sign In</button>
        </Link>
      </div>
    </div>
  )
}

export default Join;

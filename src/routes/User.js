import React from 'react'
import "./../styles/User.css"
import {useParams, Link} from 'react-router-dom';
import scansData from './../jsons/scans.json';

function User() {  
    const { userId } = useParams();  
    const user = scansData[userId]

  return (
    <div className='userWrapper'>
        <div className='description'>
            <h2>{user.id}</h2>
            <p>{user.description}</p>
            <Link to="/">Go back</Link>
        </div>
        <div className='thumbnailUrl'>
            <img src={user.thumbnailUrl}/>
        </div>
    </div>
  )
}

export default User
import React, {useEffect, useState} from 'react'
import './style.css'

export default function Fetch() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/user')
        .then(res => res.json())
        .then(data => setData(data))
    }, []);

    return (
        <div className='div'>
            {data.map((user, index) => (
                <div key={index}>
                    <p>{user.name}</p>
                </div>
            ))}
    
            <br/><br/><br/><br/><br/>
            <img src='https://media.tenor.com/S7OjR_utl38AAAAe/smile.png' alt="smile" />
        </div>
    );    
}

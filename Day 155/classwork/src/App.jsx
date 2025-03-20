import React, {useEffect, useState} from 'react'

export default function App() {


  const [data, setData] = useState([])

  const city = 'Tbilisi';
  const apiKey = 'c9d29e6eeab0cdc9c7c23b65d5a1c706';


  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


  useEffect(() => {
    fetch(API).then(response => response.json())
              .then(response => setData(response));
  })

  return (
    <div>{data.name} {data?.["main"]?.temp}</div>
  )
}

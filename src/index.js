/*const element = document.createElement('h1')

element.innerText = 'Hello react world'

const container = document.getElementById('root')

container.appendChild(element)*/

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firstName: 'Luis Kener',
  lastName: 'Avila Palacio',
  avatar: 'https://vignette.wikia.nocookie.net/shingeki-no-kyojin/images/e/ea/Eren_Jaeger_-_Anime.png/revision/latest/scale-to-width-down/270?cb=20190429004402&path-prefix=es'
}

function getName (user){
  return `${user.firstName} ${user.lastName}`
}
function getAvatar (user){
  return `${user.avatar}`
}
function getGreeting(user){
  if (user){
    return <h1>Hello {getName(user)}</h1>
  }
    return <h1>Hello Stranger</h1>
}

const element = (
  <div>      
    <h1>{getGreeting(user)}</h1>
    <img src={getAvatar(user)}/>
  </div>

)
const container = document.getElementById('root')

ReactDOM.render(element, container)


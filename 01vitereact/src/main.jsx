import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <>
          <h1>My App | </h1>
        </>
    )
}
// const ReactElement = {
//     type:'a',
//     props:{
//         href:'https://google.com',   
//     },
//     children:'Click me to Open your Website'
// }

const anotherUser = "chai aur react"
const anotherElement = (
    <a href='http://google.com ' target='_blank'> Visit Google</a>
)
const reactElement =React.createElement(
    'a',
    {href:'https://google.com ',target:'_blank'},
    'click me to visit Google',
    anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).
render(
  reactElement
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function cusomRender(react, content){
    // const domElement = document.createElement(react.type)
    // domElement.innerHTML = react.children

    // domElement.setAttribute('href', react.props.href)
    // domElement.setAttribute('target', react.props.target)
    // content.appendChild(domElement)

    const domElement = document.createElement(react.type)
    domElement.innerHTML = react.children

    for(const prop in react.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop, react.props[prop])

    }
    content.appendChild(domElement)
}

function Myapp() {
    return(
        <h1>Custom react app</h1>
    )
}

const AnotherElement = (
    <a href="https://google.com" target='_blank'>Vist Google</a>
)

const areactElement = React.createElement(
    'a',
    {href:'https://google.com', target: "_blank"},
    'Click To Visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    areactElement
)

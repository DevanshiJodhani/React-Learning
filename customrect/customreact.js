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

const react = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target:'_blank',

    },
    children: 'Click me to visit google'
}


const maincontent = document.querySelector('#root')

cusomRender(react, maincontent)

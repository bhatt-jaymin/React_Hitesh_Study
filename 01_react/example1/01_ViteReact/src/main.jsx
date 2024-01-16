import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
    
    return(
        <>
        <h1>Custom App !</h1>
        </>
    )
}

/* const MyHtml=(
    <a href='https://google.com'>visit google </a>
) */

// First create react  element using createelement 

const firstCreateReactElement=React.createElement(                              
                              'a',
                              {href:"https://google.com", target:'_blank'},                              
                              'click me to visit Google'  
) 

ReactDOM.createRoot(document.getElementById('root')).render(
 
   // firstCreateReactElement
   <App/>
   //<MyApp/>
   //<firstCreateReactElement/>
   
  
)


import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
/**
 * ReactDom has a method on it that we want to call called render
 */

/**
 * ReactDOM.render() this will take two arguments, the first is whatever we want to insert,
 * which is going to be our main app component. But for now we just insert 
 * <h1>My App</h1>, the second argument is going to be where we want to put 
 * this  and we want to put this in a div with an
 *  id of root  <div id="root"></div>
 * 
 * The way that we embed components is with an XML like syntax. So we just 
 * do app close that off <App />
 * So we just put it in angle brackets.
 * 
 * Ok, as you can see, the public folder in the index.html, HTML is being 
 * loaded in the browser and then we're bringing in react with `React DOM 
 * library`. We're calling React DOM render passing in our main app
 * component, and that's bring output into that <div> with the idea of root.
 */
ReactDOM.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>,
    document.getElementById('root'))
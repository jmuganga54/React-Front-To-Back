## Topic
>
> So the last couples of sessions were just to kind of show you the basics of a react component and how to use JSX, and how to create conditions and lists and so on

## Keywords && Notes
### Creating Your First Components and Props
>
> Now we're going to start to really get into building our application. So we have our main app component, which just has an `<h1>` and a `<div>`.
```
function App() {
    return (
        <div className='container' >
            <h1>My App</h1>
        </div>
    )
}
export default App
```
> We're gong to go ahead and create in the source folder a new folder called components.So every components that we create is gong to go in this folder and the first one is going to be a header component.
>
> React component can either have a js extension or jsx extension. We're going to go ahead and use jsx extension.
>
> And from here, we want to create a functional component.Now we could type it out, or you can install an extension called es7 [ES7 React/ Redux/ GraphQL/ React-Native snippets], this extension it hs some snippets to do a lot of things, actually, but one of them is generating components. For example class based components, so you could use RCC and RC. The one that we want to use is functional component which is `rfcp` but `rfc` will be the best, but I will use 'rfce`.
>
> So for now you're not required to import react when you want to create react component to do so use start with the underscore `_rfce`
>
> Now I also want to talk about props because props can be passed in to a component, and they're essentially properties of that component.So let's say for this header,we want this `feeback UI`, whatever this text is, we want that to be a `prop` that's passed in. So we want to make it dynamic so we can change it if we want. So let's pass in a prop called text, and I could call this anything. I'm just choosing to call it text, and we'll set it to 'Hello World` for now.
```
App Component
function App() {
    return (
        <>
            <Header text='Hello World'/>
            <div className='container' >
                <h1>My App</h1>
            </div>
        </>
    )
```
>
```
Header Component 
function Header(props) {
    return (
        <header>
            <div className="cont">
                <h2>
                    {props.text}
                </h2>
            </div>
        </header>
    )
}
```
> 
> An easier way or not, really an easier but a shorthand way of doing this, you don't have to keep doing `props.` instead of just passing in this props variables, you can d structure with curlly braces. As long as you know what props are being passed in, such as text, we can just pull that out and then we no longer need to do props dot. 
```
function Header({text}) {
    return (
        <header>
            <div className="cont">
                <h2>
                    {text}
                </h2>
            </div>
        </header>
    )
}
```
>
> Now you can also set default props.
```
function Header({ text }) {
    return (
        <header>
            <div className="cont">
                <h2>
                    {text}
                </h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI'
}
```
> Now we also have something called prop types in React, which is basically type checking for your props. So you can specify if it should be a string or a number or a function, whatever it should be. And the way we do that is first go up to the top of the file and we can import prop types.

```
import PropTypes from 'prop-types'

function Header({ text }) {
    return (
        <header>
            <div className="cont">
                <h2>
                    {text}
                </h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI'
}

Header.propTypes = {
    text: PropTypes.string,
}
```
> So now if I were to pass in the text prop and I set it to a number and if no setting for passing, so actually, let's do a Boolean, so we set it to `true`.
>
```
import Header from "./components/Header"
function App() {
    return (
        <>
            <Header text={true}/>
            <div className='container' >
                <h1>My App</h1>
            </div>
        </>
    )
}
```

> I I save that and we take a look a the console you'll see we'll get this warning, it says failed prop type, invalid prop text of type Boolean supplied to header where it expected a string. So i'ts telling it's getting a Boolean, but it expected a string so it just give you some extra type checking for your props. And it's not you don't need to use prop types. In fact, if you use TypeScript, which is a superset of Javascript that includes static type checking, you don't need to use prop types at all, but you don't even need to use if  you don't use TypeScript. Infact, there's a lot of times where I don't, and they'll probably be some projects in this course where we don't at least use prop type on every single prop.
>
> Oftentimes, I'll forget but I just want to show you that it is there and it does make your application a little robust
>
> In the next session, I want to talk a little bit about CSS and styling.We do have a global style sheet, which I'm going to fill, and then I'll show you hwo we can add style from withing our React components as well.





## Summary
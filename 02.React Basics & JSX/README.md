## Topic
> Building Feedback Application
>
>> On this section we will be building Feedback application, this is going to allow us to touch on everything from component, props, state, and events.
>
>> We are going to be using the context API and basically we'll build the client side app first and then we're going to use a tool called Jason Server, which will give us a mock rest API or kind of like a  fake backend to work, with so that we can make request as if it were a full stack app.

## Keyword & Notes

### Create React App
> [React Documentation](https://reactjs.org/)
>> So this is reactjs.org. This is where we can find all the documentation. Through this website you can see all the main concepts, you have some advanced guides, APIs references, hooks and so on. So you can use the documentation as kind of a supplement for the course. So under installation we go to create new React app and we scroll down. You'll see that there's a tool or a command line interface tool called Create React app, which does just that.
>
>>> So we can either install this globally with `npm install - g` or we can just run it with `npx create-react-app my-app`, 

```
npx create-react-app feedback-app --us-npm
```
![**After running the above command**](./img/install_react.png)


> Now let's go over some of the files and folders here.
> `package.json` we have all of our dependencies and this include, of course, `React`, which is our main framework or library, and then `React Dom`, which is used to basically allow react to work with the document object model (DOM).So whenever you create a web app, you're going to be using react alongside of the React Dom library, then `react-scripts`, which just gives us some additional tools like the Dev Server. `Web-vitals` will allow us to see some performance analytics.We're not going to really deal with this, but it is included with Create React app.And then you just see the scripts that I've already explained here.
>
>> Righ now, there two main folers to begin with here.There's a `public folder` and a `source folder`
>
>>> So in the `public` you have your `indexed HTML` and when we talk about single page applications or spies, which is what we're creating here, this is the single page that is being loaded in the browser. Ok, so the browser load this HTML page, which has some basic meta tags (as observed in the head), but in the body, all it has is a div with the id of root.
>
```
 <div id="root"></div>
```
>>> Now the reason for that is when we build a single page application.Everything we do, including all of our components, any routes that we have.Everything is done within Javascript.Its  done within React and then its basically inserted into this div.So this div you can think of it like a placeholder for our entire front end, our entire user interface. And I'm gong to show you how that how React knows to, to put it here in a minute.
>
>>> And you can also put in CDNs here on `<head>`. For example, if you wanted to use font awesome or something like tha, you could put in these in the head tags. We'll look more into that later.So whenever we make any changes and save, the server will automatically reload.And then as far as what else we have in the public folder, you can see there's the favicon, any static assets you want to put in here, like images, you can do that, but the source folder is basically where all the magic happens. That's where we create all of our components.All of our context, anything that we do is really going to go in the source folder.
>
>>>Now, usually, I would just kind of go through and explain some of these files.But what I'm going to do and what I'd like you to do is just delete everything in the source folder.Ok, so you should have nothing in the source folder and we're going to see an error over because it's looking for a file called `index.js` in the source folder, which we no longer have. And what I want to do, the reason I deleted all this is so that we can in the next video, recreate the files so you can see exactly what's going on and how react is actually initialized.

### Initializing React
> All right, so in the last session, we did something little crazy, we deleted everything in the source folder. Now the truth is a lot of that stuff we didn't need there was like a logo and some csv file. So we're just going to recreate the things that we need.
>
>> So first of all lets create a file called index.js. That's what it's being looked for.Now, you might see this page again now this is just cached in your browser. We deleted the component that was actually displaying this.So if you're seeing this on windows, you can do shift five, that will do hard refresh. If you're on Mac, you can do command shift R, and that will do a hard refresh, and you should now just a blank white page. Now this page that we're seeing is that public index HTML file, right? You can see the title up here feedback UI. And if we were to to into this HTML file and just type something in there and save, you'll see that's going to show up.
>
> Now what we want to do is, like I said in the last video, this div right here `  <div id="root"></div>`, we want to insert our front end application or Reat app into that div. So that happens in the `index.js` in the source folder, this is basically the entry point to react.
>
> And like I said earlier, the React Dom Library allows us to basically interact with the Document Object Model(DOM) in the browser.So React DOM has a method on it that we want to called render.
>
```
ReactDOM.render()
```
>
> So React is made up of components and you have a root component called app.And then any other components we create, like maybe like a navigation feedback items, whatever it might be, that's going to be embedded into main app component.
>
> So let's go ahead and create inside of source a file called App.js.
>
> Now, as far as components, they can be either classes or functions.Classes are kind of the old school way of creating react components.With more modern react, you're going to see functional components using something called hooks to use state and in some other do some other things with state and lifecycle.
>
>Now there is something called `strict mode` that React offers that add additional checks and warnings within our application. So what we would do is `<App />` where we have our app component, we're  going to wrap this, we're no going to see any difference, but this just activates some additional checks and warnings. And this is what was here befere I actualy deleted the index.js.
>
```
ReactDOM.render( 
    <React.StrictMode >
    <App / >
    </React.StrictMode>,
    document.getElementById('root'))
```
>
> Now the last thing I want to do here , is to add the last file which is called global.css file. So in the source file we are going to create another file called index.css
> 
> There's a lot of different ways to do styling in react. I would say the easiest way is to just have a global style sheet with all your classes and so on. And that's what we're going to do in this particular project.And the way that we can bring this in is in our index.js.

### Intro To JSX
> JSX it's basically HTML. However, it's syntactic sugar, it's really Javascript under the hood.It just allows us to write HTML within our components, which makes it much more convenient.
>
> Now there are some rules, for example an error message can occur which says JSX expressions must have one parent element. What that means is what we return directly has to be just one main or parent element.So we can't have an `<h1> and <p>` or any two or more elements, it has to be one.
>
> So in this case, what we would do is we could have a div and then we could take this and put that in.
>
```
 return ( 
     <div >
        <h1 > My App </h1>   
        <p> Hellow </p> 
    </div>

    )
```
> Ok, so just remember that you always have to have one parent element. Now you might not want to have a div wrapping all the content.So if you don't want the div, we still have to have something wrapping this, but we can use what's called a `fragment`, which is just an empty angle bracket like the below
>
```
 return ( 
     < >
        <h1 > My App </h1>   
        <p> Hellow </p> 
    </>

```
> There are some differences between HTML and JSX. There's some attributes that you can't use. So, for instance, class, let's say that I'm actually going to want a div.
>
```
 return ( 
     <div class = 'container'>
        <h1 > My App </h1>   
        <p> Hellow </p> 
    </div>

    )
```
> The above code will work, but when we see on the console,in our browser, we will see an error `Invalid DOM property class`. Did you mean class name?. So classes, it's basically a reserved word. So we can't use a class attribute here instead in React, or I should say in JSX, we use `className` instead of `class`.
>
```
 return ( 
     <div className = 'container'>
        <h1 > My App </h1>   
        <p> Hello </p> 
    </div>

    )
```
>
> Now, another attribute that you can't use in JSX is the `for` attribute, which isn't that common, so instead we use `htmlFor`
```
  return (
        <div className='container' >
            <h1> My App </h1>
            <p> Hellow </p>
            <label htmlFor=""></label>
        
        </div>

    )
```
>
> So those are the two big attributes that are different than just regular HTML
>
> Now I want to show you how we could get the above, the same thing without using JSX, just using Javascript.So basically showing you what's happening under the hood when we do this.
>
>And up until just very recently, a recent release, you had to do this no mater what (import React from 'react') on all of your components, you had to import react, if you were using JSX, you don't have to anymore, but you used to. So the below code does exactly what we just had in JSX only this is regular Javascript. And this might not look too bad, but just imagine if you had just a ton of HTML with different components and different elements and attributes and props. This would be an absolute nightmare to work with. So that's why JSX is so great, and it's why nobody virtually nobody builds components without it.
```
import React from 'react'
function App() {
    /**
     * you pass the element that you want to create (first argument), 
     * second argument are attributes you want to attach to a 
     * created element
     */
    return React.createElement('div', { className: 'container' },
        React.createElement('h1', {}, 'My App'))

}
```
> So this is kind of an intro to JSX. We didn't really look at anything dynamic because you can output values and variables and expressions and all that.So we're going to dive into that a little bit in the next session.

### Dynamic Values & lists in JSX
> In this session we're going to kind of go over some of the basics of components and JSX and outputting dynamic values.We're going to look at creating lists which basically allow us to loop through an array of values and output and JSX for each item.
>
> And in the next session , we'll look at conditions.
>
> And to output something dynamic like a variable or expression, we just use curly braces. So here we could put our title.

```
function App() {

    const title = 'Blog post'
    const body = 'This is my blog post'
    /**
     * Now, usually if you have variables like this, let's say this was 
     * a blog post component, this would put this data would probably
     * be part of your state. And this is not how you set state in react, in 
     * functional components there's a hook special hook that you use called
     * `use state`, and I'm going to get to that later.
     * 
     * 
     */
  

    return (
        <div className='container' >
            <h1>{title}</h1>
            <p>{body}</p>
        </div>

    )
}
```
> Like I said, these curly braces can be used not only for variables, but also for any type of expression,So if I put in curly braces an expression `{5+5}`, it will be evaluated as 10. I could even put like `{Math.randon() *(5+5)}', which will give us some random decimal up to 10.So you can put pretty much any Javascript expression in here.Even this is Ok {title.toUpperCase()}
>
> So now what I want to do is show you how you can create a list because you might have an array.
```
function App() {

    const title = 'Blog post'
    const body = 'This is my blog post'
    const comments = [
        { id: 1, text: 'Comment one' },
        { id: 2, text: 'Comment two' },
        { id: 3, text: 'Comment three' }
    ]
    /**
     * Now, usually if you have variables like this, let's say this was 
     * a blog post component, this would put this data would probably
     * be part of your state. And this is not how you set state in react, in 
     * functional components there's a hook special hook that you use called
     * `use state`, and I'm going to get to that later.
     * 
     * 
     */


    return (
        <div className='container' >
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            <div className="comments">
                <h3>Comments ({comments.length})</h3>
                <ul>
                    {comments.map((comment, index) => (
                        /**
                         * So we need to pass on a key that's unique and 
                         * we're going to set that so you can set a prop
                         * or an attribute to something dynamic with curly 
                         * braces. And in here we'll just use index, which
                         * is coming from map function. You could also use 
                         * the comment id because that 's going to be unique
                         * as well.
                         * 
                         * So just make sure when you create a list  using
                         * map that you add a key onto the child prop
                         */
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
```
> So that's how we can outuput variables, expression, creating lists. In the next session we will learn about conditionals
### Conditionals
> On this session , we'll go over conditionals within a React components, and after this we will start to work on our application, we're going to create our head component and talk about props and all that.
>
> So let's say that I want to have a specific return value or return JSX based on a specific condition.So for instance, we might have a value called loading.
>
```
 if (loading) return <h1>Loading...</h1>
```
>So in the next section of the course, we're going to go ahead and start on a first component, our firs custom component, which is going to be the header.

On how 
## Summary
> On this section on the course, we have learn some of the foundation of react, this foundation includes how we can output dynamic values, create lists and conditionals.

## final Code
```
/**
 * So we're going to create a function here, and we'ge going to call it app.So is going to our
 * main app component and what we want to return
 * form it is something called JSX, which stands for Javascript XML
 * 
 * So its' a syntax that basically allows us to 
 * have some syntactic sugar to put HTML directly
 * into our Javascript. 
 */

function App() {

    const title = 'Blog post'
    const body = 'This is my blog post'
    const comments = [
        { id: 1, text: 'Comment one' },
        { id: 2, text: 'Comment two' },
        { id: 3, text: 'Comment three' }
    ]

    /**
     * Learning about conditionals
     * So let's say that I want to have a specific return value
     * or return JSX based on a specific condition.
     * So for instance, we might have a value called loading 
     * (see the variable below), Now, if loading is set to true, I
     * want to return something different than what we have here.
     * 
     * 
     */
    const loading = false
    const showComments = true
    const commentBlock = (
        <div className="comments">
            <h3>Comments ({comments.length})</h3>
            <ul>
                {comments.map((comment, index) => (
                    /**
                     * So we need to pass on a key that's unique and 
                     * we're going to set that so you can set a prop
                     * or an attribute to something dynamic with curly 
                     * braces. And in here we'll just use index, which
                     * is coming from map function. You could also use 
                     * the comment id because that 's going to be unique
                     * as well.
                     * 
                     * So just make sure when you create a list  using
                     * map that you add a key onto the child prop
                     */
                    <li key={index}>{comment.text}</li>
                ))}
            </ul>
        </div>
    )

    if (loading) return <h1>Loading...</h1>

    /**
     * For above code, and now you can see that only the above code was rendered because loading values is true and we're setting this 
     * conditional.
     * 
     * And a common case for this would be if you're fetching data from a 
     * back end, like, let's say this blog data was or this blog data
     * was coming from a backend, you might have loading set to true while
     * it's being fetched.And then when loading is set to false, it'll 
     * go ahead and, you know, render the actual data because you don't
     * want to try to render data before you actually fetch it.
     */

    /**
     * Now, usually if you have variables like this, let's say this was 
     * a blog post component, this would put this data would probably
     * be part of your state. And this is not how you set state in react, in 
     * functional components there's a hook special hook that you use called
     * `use state`, and I'm going to get to that later.
     * 
     * 
     */


    return (
        <div className='container' >
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            {/* this means if the showComments is true the print the 
            what is after and */}
            {showComments && commentBlock}

        </div>
    )
}



export default App
```

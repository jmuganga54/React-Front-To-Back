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
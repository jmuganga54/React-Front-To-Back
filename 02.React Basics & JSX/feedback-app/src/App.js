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



export default App
import React from 'react';
import react from '../../react-router.png';
import context from '../../react-context.png';
import href from '../../twitterimage.jpg';

const Blogs = () => {
    return (
        <div>
            <div className='bg-violet-700 flex justify-center items-center py-28 md:py-40'>
                <h2 className='text-5xl font-semibold text-white'>Question and Answer</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 m-7'>
                <div className='col-span-1 py-5 md:py-0'>
                    <img className='w-96 mx-auto' src={react} alt="" />
                </div>
                <div className=' text-left col-span-3 m-0 md:m-5'>
                    <h2 className='text-2xl md:text-3xl font-semibold mb-3'>What is the purpose of react-router?</h2>
                    <p className='text-xl'>
                        <strong>Answer: </strong>
                        Single-page applications (SPAs) rewrite sections of a page rather than loading entire new pages from a server. <br /> <br />

                        Twitter is a good example of this type of application. When you click on a tweet, only the tweet’s information is fetched from the server.<br /><br />

                        One of them is browser history. Because the application is contained in a single page, it cannot rely on the browser’s forward/back buttons per se. It needs something else. Something that, according to the application’s state, changes the URL to push or replace URL history events within the browser. At the same time, it also needs to rebuild the application state from information contained within the URL.
                    </p>
                </div>
            </div>
            <div className='my-20'>
                <hr className='border-2 w-80 mx-auto' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 m-7'>
                <div className=' text-left col-span-3 m-0 md:m-5'>
                    <h2 className='text-2xl md:text-3xl font-semibold mb-3'>How does context API work?</h2>
                    <p className='text-xl'>
                        <strong>Answer: </strong>
                        Despite React’s popularity, one of the biggest obstacles developers face when working with the library is components re-rendering excessively, slowing down performance, and harming readability. Component re-rendering is especially damaging when developers need components to communicate with each other in a process known as prop drilling.
                    </p>
                </div>
                <div className='col-span-1 py-5 md:py-0'>
                    <img className='w-96 mx-auto' src={context} alt="" />
                </div>
            </div>
            <div className='my-20'>
                <hr className='border-2 w-80 mx-auto' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 m-7'>
                <div className='col-span-1 py-5 md:py-0'>
                    <img className='w-96 mx-auto' src={href} alt="" />
                </div>
                <div className=' text-left col-span-3 m-0 md:m-5'>
                    <h2 className='text-2xl md:text-3xl font-semibold mb-3'>Explain about Use href hooks?</h2>
                    <p className='text-xl'>
                        <strong>Answer: </strong>
                        useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. <br /> <br />
                        Essentially, useRef is like a “box” that can hold a mutable value in its .current property. <br /> <br />
                        However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.


                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
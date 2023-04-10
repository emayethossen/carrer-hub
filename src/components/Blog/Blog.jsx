import React from 'react';

const Blog = () => {
    return (
       <div>
        <h2 className='text-3xl text-center font-bold text-sky-700 my-8'>Blog Page</h2>
         <div className='w-3/4 mx-auto flex items-center justify-center lg:h-screen'>
            
            <div className='space-y-5'>
            <p className='text-2xl font-bold'>a. When should you use context API?</p>
            <p className='text-lg font-bold'>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            <p className='text-2xl font-bold'>b. What is a custom hook?</p>
            <p className='text-lg font-bold'>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JS hook and React JS components: A custom hook does not require a specific signature</p>
            <p className='text-2xl font-bold'>c. What is useRef?</p>
            <p className='text-lg font-bold'>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p>
            <p className='text-2xl font-bold'>d. What is useMemo?</p>
            <p className='text-lg font-bold'>useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations</p>
            </div>
        </div>
       </div>
    );
};

export default Blog;
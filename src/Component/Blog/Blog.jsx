import React from 'react';
const Blog = () => {
    return (
        <div className='mx-12 my-12 pt-12'>
             <div className='my-2 pb-4'>
                  <h1 className='text-2xl font-bold mb-2'> Q_1 : When should you use Context Api ? </h1>
                     <p className='text-lg font-semibold ms-4'>Ans : Context API is a feature in React that allows for global state management and simplifies passing data through the component tree. It can be useful when you have data that needs to be accessed by multiple components, when you have deeply nested components, when you want to avoid "prop drilling," or when you want to improve code reusability and maintainability. By using Context API, you can avoid passing props down through multiple levels of the component tree, reduce code complexity, and improve application performance</p>
             </div>
             <div className='my-2 pb-4'>
                  <h2 className='text-2xl font-bold mb-2'> Q_2 : What is Custom hook ? </h2>
                     <p className='text-lg font-semibold ms-4'>Ans : A custom hook in React is a JavaScript function that allows for ;the reuse of stateful logic across multiple components. By using React's built-in hooks, a custom hook can manage state or interact with the component lifecycle, making the code more reusable, readable, and maintainable. The convention for naming a custom hook is to start it with "use." Custom hooks can be used in multiple components to manage their own state without duplicating code. Overall, custom hooks are a powerful tool for abstracting away complex logic and improving the modularity and scalability of React applications.</p>
                     
             </div>
             <div className='my-2 pb-4'>
                  <h2 className='text-2xl font-bold mb-2'> Q_3 : What is useRef _? when we should use this ? </h2>
                    <p className='text-lg font-semibold ms-4 mb-2'> Ans : useRef is a hook in React that creates a reference to a DOM element or any other mutable value, which can persist across renders and can be accessed using the current property of the returned object. It is commonly used to manipulate the DOM or store values that don't trigger a re-render.</p>
                    <p>
                      <h6 className='text-lg font-semibold ms-4'>1.. To store a reference to a DOM element and perform imperative operations on it, such as setting the focus, changing its size or position, or triggering animations.</h6>

                      <h6 className='text-lg font-semibold ms-4'> 2..To store a mutable value that needs to persist across renders but does not trigger a re-render. For example, you might use useRef to store a counter, a timer ID, or a previous state value.</h6>

                      <h6 className='text-lg font-semibold ms-4'> 3..To cache expensive computations or data between renders, especially if the computation is only needed for a specific user interaction or event.</h6>

                       <h6 className='text-lg font-semibold ms-4'>4..To communicate between parent and child components without passing props down the component tree. In this case, you might store a callback or a value in a useRef object in the parent component and pass it down to the child component as a prop.</h6>
                    </p>
             </div>
             <div className='my-2 pb-4'>
                 <h2 className='text-2xl font-bold mb-2'> Q_4 : What is useMemo _? when we should use this ?</h2>
                    <p className='text-lg font-semibold ms-4 mb-2'> Ans :  useMemo is a hook in React that memoizes the result of a function and returns a cached value if the dependencies haven't changed since the last render. It can be used to optimize performance by avoiding unnecessary recomputations of expensive calculations or data transformations. You should use useMemo when you have a computationally expensive function that depends on certain inputs and you want to cache the result to avoid recomputing it unnecessarily.</p>
                    <h6 className='text-lg font-semibold ms-4'> 1.. When you have a computationally expensive function that depends on certain inputs, such as props or state, and you want to memoize the result to avoid recomputing it unnecessarily on every render.</h6>
                    <h6 className='text-lg font-semibold ms-4'> 2..When you need to transform or filter large arrays or objects in a way that is computationally expensive and does not change frequently. By memoizing the result of the transformation, you can avoid recomputing it on every render.</h6>
                    <h6 className='text-lg font-semibold ms-4'>3..When you need to pass a function as a prop to a child component and want to ensure that the function reference remains stable across renders, even if the component re-renders due to changes in other props or state.</h6>
                    <h6 className='text-lg font-semibold ms-4'> 4..When you need to calculate a value based on a complex or nested data structure and want to avoid deeply nested function calls in your render method</h6>
             </div>
        </div>
    );
};

export default Blog;
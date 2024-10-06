
// React: library to create UI working with multiple libraries to manage different functions to create single page application
// single-page application: rewrite current web page with dynamic data
// comparison to angular or vuejs: web framework --> not need any extra library
//option+shift+0: erase unused components
//vps+ domain setting+ngix+heroku(only react deployment)
//<> </>: react fragment - used to wrap multiple HTML elements in return statement in replace ment for parent div tag
//vite: react + environment setup ( typescripe, js)
// react/processor/webpack --> no need to use create-react-app command
//babel: transform a js file into another js file. HTML inside JS - JSX(JavaScript-XML)
// create React project: npm create vite@latest -> project name -> open vs code ( code.) -> npm run dev

//overview about file structure: strict mode, create root, app
//The React component lifecycle refers to the series of phases and methods that a component goes through from its creation to its removal from the DOM
//class-based component: state object, componentDidMount, componentDidUpdate,componentWillUnmount, destructuring inside render() function
//function-based component: 
            //useState: cornerstone of morden react, called at the top level of component("Top level" refers to the immediate body of the function component, outside of any conditions, loops, or nested functions),
                //---> manage state in functional components -> module, reuseable code: declare state variables + update them -> return an array of 2 elements : the current state value and a function to update it
              //--> multiple uses for different state variables, preserves states between re-renders
              //--> the update function takes new state value as its argument and return a new state -> trigger re-render of the component
            // useEffect(callBack, [dependencies]) ,
            // list of individual components
//embedding JS expression: curly bracket
//passing props to component: existing props/ new props -> receive as object entity -> destructuring
//parent-child relationship in React vs nested functions
// use CSS : import css path/ inline(style={{}})/ import styles from css_path
            // effect learned so far: increase count, change text color, toggle between texts, hide text
            //print out a list of nested components
//global state: other ways to pass props to multiple components  
// useReducer :
    // What's happening behind the scenes:
    // The useReducer hook creates the dispatch function and links it internally to the reducer function you provide. This linkage is not visible in your code, but it's handled by React.
    // The dispatch function:
    // When you call dispatch(action), React does the following:
    // It takes the action object you passed to dispatch
    // It retrieves the current state
    // It calls your reducer function with these arguments: reducer(currentState, action)
    // It updates the state with the value returned by the reducer
    // It triggers a re-render of your component with the new state
    // The "magic" connection:
    // The connection between dispatch and reducer is maintained internally by React. When you call dispatch, React knows which reducer to use because of how useReducer was set up.    
//simple form : attributes of input tag, useState for each input -> useState for whole form -> event object destructuring
//dynamic form: generate all input tags using single formular so that we can use to generate different forms: login/register form
//react-hook-form: install hook-form -> useForm hook returns object which can be destructured into 3 variables: formData(register,login), handleSubmit(prevend default submit, validate, call custom onSubmit funciton once validation passed, )
   //--> in each input tag, just need to declare input type, remaining just call register('name_of_input'). Register is a function that return an objects, use spread operator to spread all properties of this object onto input tag
   //properties of object returned by register function: refs(the ref provides a way to interact with the input programmatically), onChange, name, onBlur
//react-router-dom: install the router-dom-> provides Routers component which contains individual Router(path, component) + useNavigate hook which returns function navigate -> button's onClick property
//react-router-dom: no useNavigate -> Link tag which has 'to' property which url path can be passed
//custom-router component -> useRoutes hook which takes array of route objects. Each route objects has properties: path, component,children
//dynamic routing /:id -> useParam hook which returns object contains id property
// extract url path and params -> useLocation.pathname/useLocation.search



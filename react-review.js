
// React: library to create UI working with multiple libraries to manage different functions to create single page application
// single-page application: rewrite current web page with dynamic data
      //HTML, CSS, JS are loaded once
      //when users interact with the application, DOM is dynamically updated without triggering full page reloads. New data is fetched asynchronously to update only relevant parts
      // DOM - Document Object Model - programming interface for HTML and XML document - has tree-like structure starts with a root node which is the document itself,  branches are elements, texts, comments. 
      //DOM structure provides methods, properties which allows scripts (typically JS) to dynamically access and manipulate the content, structure and style of the web doc. Changes made through the DOM are immediately reflected on the webpage without  page reload
      // DOM is the foundation of modern web development to create dynamic, interactive web app by providing a structured way to access and manipulate web doc content
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
// enhance performance with useMemo hook: data is fetched -> filter -> map: multiple expensive computing steps 
        // state changed -> trigger re-rendering of function -> slow down the apps
        // useMemo: save the cache / memorize return results of the function
        //useMemo: takes 2 arguments- synchronous function and dependencies list, only re-compute result if values of dependencies change, triggered during rendering 
        // different to useEffect: create side effects, can handle asynchronous function , trigger after elements are rendered

//enhance performance with useCallback hook: decides if components should be re-rendered. If props havent been changed, return the same components without re-rendering it.
        // useCallback: save the cach/memorize the callback function, not its return result
        // useCallback returns the same function reference if dependencies are the same
        // allows comparing properties of reference type being passed to nested components
        // comparision is manged by memo function wrapping around exported child component, decides if this component should be re-rendered when there is state chagne in parents component

//for other type of reference data type being passed to child component, we use useMemo hook to maintain stable references for arrays and objects. it memoizes the result of a computation
const memoizedArray = useMemo(() => [1, 2, 3, ...data], [data]);
const memoizedObject = useMemo(() => ({ key: 'value', ...data }), [data]);
//useQuery: command: npm i @tanstack/react-query -> create new QueryClient() instance in main where root element is --> wrap Apps with QueryClientProvider tag and pass client= queryClient instance
// useQuery: provided by ReactQuery, used for data fetching, caching, updating, handling loading, error state
//use Query takes an object as its argument with properties: queryKey - identifier for the query, queryFn - function used to fetch the data
// useQuery returns object contains data, isLoading,error, isError, status(idle,loading,error,success)
//useQuery Offers automatic background refetching, refetching on window focus, and interval-based refetching.
// To create new data, update to db, refetch -> button - onClick: pass a function that trigger a function
        //this function does 2 things: trigger mutationAsync/mutation + clear the input field
        // the mutationAsync is the return of useMutation provided by ReactQuery. 
        //useMutation: takes object as argument with properties: mutationFn - the function to be called once triggered, onSuccess: toast, getClientQuery.invalidateQueries([query-key]) to refresh the data
//toast is popsup message lib provided by ReactToastify -> install this lib -> include ToastContainer component in Apps -> download css of the toast -> import toast in components where it is used
//css-tailwind install
// shopping cart: npm i react-router-dom -> 3 pages: product list, product detail, cart


// Tic-tac-toe game

// 1. square component: button --> make 9 square --> style it into a board
// 2. board component with nested square components
// 3. const(value,setValue) = useState("") 
        //--> later replaced by const(squares,setSquares) = useState(Array.fill(9,null))
// 4. everytime a square is clicked --> function take i as argument
        //const currentSquares = squares.slice()
        // -> need to check if currentSquares[i] the square has value yet? if yes,return do nothing
// 5. const(xIsNext,setXIsNext) = useState(true)
        //if square does not have value -> if (xIsnext), currentSquares[i] = 'X',else currentSquares[i] = 'O'
        // setSquares(currentSquares)
// 6. need a function to calculate win
        //6.1 const winCases = [[x,y,z],...] of all possible win cases
        //6.2 this function need to take in the current state of the square 
                // const(squares,setSquares) = useState(Array.fill(9,null)) -> replace const(value,setValue) with this
                // everytime a square is clicked -> use map to iterate over win cases 
                //(x,y,z) => { if(currentSquare[x] && currentSquare[x] === currentSquare[y] && currentSquare[x]===currentSquare[z]) return winner + currentSquare[x] 
                        //-->  let status; 
                        //--> in case winner found -> status= 'winner: '+ currentSquare[x])
        // 6.3 this function need to be called everytime button is clicked, if winner found -> stop player from playing further -> place in condition of step 4
//summary: 
        //when a square is clicked, function (i) is triggered and check if the square has value -> if the square has value, check if winner is found -> if either is true, return, else tick X or O
        // to do this: state of squares, function to handle the click will be passed from board to square component       
// 7. display the list of moves -> memorize moves -> const [history,setHistory] = useState([Array(9).fill(null)]) -> no need to use useState for squares anymore
                // --> create component Game that nests Board inside it, Board needs : isXnext, squares and function to handle click to operate
        //7.1 everytime the square is clicked, it triggers handle click[i] in Board component which trigger the handle click[i] in Game component.
                // check if the value is in square and if winner is found, otherwise write X or O into square
                // -> setHistory ([...history,currentSquares])
        //7.2 display the move: 
                // add <ol> tag, and moves = history.length >0? history.map(element,moveIndex -> {if move >0 return <li key=move> <button> "go to move" + move else return <li key=move> <button> "reset" } )
                // when button is click, it trigger a function to render the past move, this function take moveIndex as its argument
                // identify the state of squares  displayed if any button click: 
                        //setMoveIndex(moveIndex)
                // const squares = history[moveIndex] --> pass this to Board component
                // re-calcuate isXNext? isXNext can be calculated as (moveIndex % 2 ===0) since we start with X first
                // ---> moveIndex is important: it used to decide if X or O is in the cell + it determines the squares state
                        //---> const [moveIndex,setMoveIndex] = useState(0)
                // from here if any square is clicked: 
                        //  decide if X or O should be written
                        //  trigger the function in Game component, new state of squares will be passed to the function as argument
                        //in Game component, the function receives the newSquares does two things
                                // const newHistory = [...history.slice(0,moveIndex+1),newSquares]
                                // setHistory(newHistory)
                                // setMoveIndex(newHistory.length-1)
import { useState } from "react/cjs/react.development";
import Square from "./Square";
function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  function handleClick(i) {
    const nextSquares = squares.slice();
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
export default function Game() {
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  // const currentSquares = history[history.length - 1];
  const currentSquares = history[currentMove];
  function handlePlay(nextSquares) {
    // setXIsNext(!xIsNext);
    // setHistory([...history, nextSquares]);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    // setHistory(history.slice(0, nextMove + 1));
    setCurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
//  Todo: 
//  When someone wins, highlight the three squares that caused the win (and when no one wins, display a message about the result being a draw).
//  Display the location for each move in the format (row, col) in the move history list.

                



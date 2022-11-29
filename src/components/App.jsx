import {useState} from "react";

const App = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h2>React component</h2>
            <button onClick={() => setCounter(prevState => prevState + 1)}>Counter: {counter}</button>
            <button onClick={() => setCounter(0)}>Reset</button>
        </div>
    );
};

export default App;
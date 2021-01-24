import React from 'react';
import Todo from "./components/pages/Todo";
import './App.less';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>vipi</h1>
          <input className="bg-white
                            focus:outline-none
                            focus:shadow-outline
                            border border-gray-300
                            rounded-lg py-2 px-4 block
                            appearance-none
                            leading-normal m-10"
                 type="email" placeholder="jane@example.com" />
          <Todo/>

      </header>
    </div>
  );
}

export default App;

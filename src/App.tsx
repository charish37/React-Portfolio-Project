import React from 'react';
// import { Child,ChildAsFC } from './props/child';
// import GuestList from './state/GuestList';

// import UserSearch  from './state/UserSearch';
// import EventComponent from './events/EventComponent';
// import UserSearch from './Classes/UserSearch';
import UserSearch from './refs/UserSearch';
import './App.css';

function App() {

  const users = [
      {name: 'Sarah', age: 20},
      {name: 'Alex', age: 24},
      {name: 'Michael', age: 35},
      {name: 'Charish', age: 21}
  ]

  return (
    <div className="App">
      {/* <Child color='red' onClick={() => console.log("clicked")}>
        gfggh
      </Child>
      <ChildAsFC color='red' onClick={() => console.log("clicked")}>
        gfggh
      </ChildAsFC> */}

      {/* <GuestList></GuestList> */}
      {/* <UserSearch /> */}
      {/* <EventComponent /> */}
      <UserSearch />
    </div>
  );
}

export default App;

import React from "react";
import store from "./config";
import { Provider } from "react-redux";
import AddNotes from "./components/add-notes";
import Notes from "./components/notes-list";
import './styles.scss'
const App = () => {
  return (
    <Provider store={store}>
      <div className="note-taking-app">
        <Notes />
        <AddNotes />
      </div>
    </Provider>
  );
}

export default App;

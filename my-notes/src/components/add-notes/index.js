import React, { useState } from "react";
import { connect } from "react-redux";
import { addNote } from "./../../config/actions/note-actions";
import {Row,Col} from 'react-bootstrap';
import './styles.scss'
function AddNotes(props) {
  const [form, setForm] = useState({
    title: "",
    text: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    let newForm = { ...form };
    newForm[name] = value;

    setForm(newForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addNote(form);
    setForm({ title: "", text: "" });
  }

  return (
      <div className="parent-div">
    <form onSubmit={handleSubmit}>
      <h4>Add a Note</h4>
      <div>
        {/* <label>Title:</label> */}
        <input
          name="title"
          value={form.title}
          placeholder="Enter your title here..."
          onChange={handleChange}
          required
        />
      </div>
      <div>
               {/* <label>Text:</label> */}
        <textarea
          name="text"
          value={form.text}
          placeholder="Enter your note here..."
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <button className="success">Add Note + </button>
      </div>
    </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addNote: payload => {
      console.log(payload);
      dispatch(addNote(payload));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AddNotes);
// export default AddNotes
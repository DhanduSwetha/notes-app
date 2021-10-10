import React from "react";
import Note from "./../note";
import { connect } from "react-redux";

const Notes = props => {
  return (
    <div className="note-list">
      {props.notes.map(note => (
        <Note key={note.id} text={note.text} title={note.title} id={note.id} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    notes: state
  };
}

export default connect(mapStateToProps)(Notes);
import React from "react";
import { connect } from "react-redux";
import { removeNote } from "../../config/actions/note-actions";

const Note = props => {
  return (
    <div class="note">
      <h4>{props.title}</h4>
      <p>{props.text}</p>

      <button class="delete" onClick={() => props.remove(props.id)} />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    remove: id => dispatch(removeNote(id))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Note);
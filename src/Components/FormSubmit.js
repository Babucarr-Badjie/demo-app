import React from "react";

export default function FormSubmit(props) {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <label htmlFor="user">User: </label>
      <input
        type="text"
        id="user"
        value={props.user}
        onChange={props.onUserChange}
      />
      <input type="submit" value="save" />
    </form>
  );
}

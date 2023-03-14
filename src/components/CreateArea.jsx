import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value
      };
    });
  }

  function handleAddNote(event) {
    props.onAdd(input);

    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleAddNote}>
        <input
          onChange={handleInputChange}
          value={input.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleInputChange}
          value={input.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

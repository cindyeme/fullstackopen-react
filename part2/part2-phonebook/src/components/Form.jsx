import React from 'react';

const PersonForm = ({ handleSubmit, handleChange, addPerson }) => {
  console.log(addPerson.id);
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input
          type="text"
          value={addPerson.name}
          onChange={handleChange}
          name="name"
          required
        />
      </div>{" "}
      <br />
      <div>
        number:{" "}
        <input
          type="number"
          name="number"
          value={addPerson.number}
          onChange={handleChange}
          required
        />
      </div>{" "}
      <br />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;

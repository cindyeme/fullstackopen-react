import React from 'react'

export default function Persons({ filterPerson }) {
  return (
    <div>
      {filterPerson.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
}

import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/Form";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [addPerson, setAddPerson] = useState({ name: "", number: "", id: "" });
  const [search, setSearch] = useState("");
  const copyPersons = [...persons];
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddPerson((prev) => ({ ...prev, [name]: value }));
  };

  // handle filter input change
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  // filtering persons
  const filterPerson = copyPersons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handles form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: addPerson.name,
      number: addPerson.number,
      id: Math.random().toString(36).slice(2),
    };

    copyPersons.forEach((person) => {
      if (person.name !== addPerson.name) {
        setPersons(persons.concat(newPerson));
      } else {
        alert(`'${addPerson.name}' is already added to phonebook`);
        setPersons(persons);
      }
    });
    setAddPerson({ name: "", number: "", id: "" });
  };

  // Fetching initial state from json-server
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      const persons = response.data;
      console.log(persons);
      setPersons(persons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleChange={handleFilterChange} />
      <h2>Add a New</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons filterPerson={filterPerson} />
    </div>
  );
};

export default App;

import { useState } from "react";

import "./App.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactList } from "./components/ContactList/ContactList";

function App() {
  const cards = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const [filter, setFilter] = useState("");
  const handleChange = (ev) => {
    setFilter(ev.target.value);
  };
  const filteredCards = cards.filter((card) =>
    card.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox handleChange={handleChange} />
      <ContactList cards={filteredCards} filter={filter} />
    </div>
  );
}

export default App;

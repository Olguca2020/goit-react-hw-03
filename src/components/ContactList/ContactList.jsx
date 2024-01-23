import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({ cards, onButtonClick }) => {
  return (
    <ul className={css.contactWrapper}>
      {cards.map((card) => (
        <li key={card.id}>
          <Contact
            name={card.name}
            number={card.number}
            onButtonClick={() => onButtonClick(card.id)}
          />
        </li>
      ))}
    </ul>
  );
};

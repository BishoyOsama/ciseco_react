import { useState } from "react";

const TryRadio = () => {
  const initialCards = [
    {
      id: 1,
      options: [
        { id: "opt1", label: "Option 1" },
        { id: "opt2", label: "Option 2" },
        { id: "opt3", label: "Option 3" },
      ],
      selectedOption: "opt1",
    },
    {
      id: 2,
      options: [
        { id: "optA", label: "Option A" },
        { id: "optB", label: "Option B" },
        { id: "optC", label: "Option C" },
      ],
      selectedOption: "optA",
    },
    {
      id: 3,
      options: [
        { id: "optA", label: "Option A" },
        { id: "optB", label: "Option B" },
        { id: "optC", label: "Option C" },
      ],
      selectedOption: "optC",
    },
    {
      id: 4,
      options: [
        { id: "optA", label: "Option A" },
        { id: "optB", label: "Option B" },
        { id: "optC", label: "Option C" },
      ],
      selectedOption: "optC",
    },
    {
      id: 5,
      options: [
        { id: "optA", label: "Option A" },
        { id: "optB", label: "Option B" },
        { id: "optC", label: "Option C" },
      ],
      selectedOption: "optC",
    },
    // Add more cards as needed
  ];

  const [cards, setCards] = useState(initialCards);

  const handleRadioChange = (cardId, optionId) => {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === cardId) {
          return { ...card, selectedOption: optionId };
        }
        return card;
      });
    });
  };
  return (
    <div className="mx-auto">
      {cards.map((card) => (
        <div key={card.id}>
          <h2>Card {card.id}</h2>
          {card.options.map((option) => (
            <div key={option.id}>
              <input
                type="radio"
                id={`card-${card.id}-option-${option.id}`}
                value={option.id}
                checked={card.selectedOption === option.id}
                onChange={() => handleRadioChange(card.id, option.id)}
              />
              <label htmlFor={`card-${card.id}-option-${option.id}`}>
                {option.label}
              </label>
            </div>
          ))}
          <p>Selected Option: {card.selectedOption}</p>
        </div>
      ))}
    </div>
  );
};

export default TryRadio;

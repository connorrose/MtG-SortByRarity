export const CardList = ({ title, cards }) => (
  <div className="rarity-container">
    <h2>{title}</h2>
    <ul>
      {cards.map(({ name, type, cmc, colorClass }, idx) => (
        <li key={`${name}-${idx}`} className={colorClass}>
          <strong>{name}</strong>
          <span>{` (${type}) `}</span>
          {typeof cmc === 'number' && <span>{`| CMC: ${cmc}`}</span>}
        </li>
      ))}
    </ul>
  </div>
);

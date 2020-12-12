import { CardList } from './CardList';
import deckData from '../data-processing';

const { mythics, rares, uncommons, commons, basicLands } = deckData;

console.log({
  mythics,
  rares,
  uncommons,
  commons,
  basicLands,
});

const handleClick = (e) => {
  e.target.parentNode.classList.toggle('strike');
};

const App = () => (
  <>
    <h1>{deckData.deckTitle}</h1>
    <div id="lists-container" onClick={handleClick}>
      <CardList cards={mythics} title="Mythic" />
      <CardList cards={rares} title="Rare" />
      <CardList cards={uncommons} title="Uncommon" />
      <CardList cards={commons} title="Common" />
      <CardList cards={basicLands} title="Basic Lands" />
    </div>
  </>
);

export default App;

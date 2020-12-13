import { CardList } from './CardList';
import deckData from '../data-processing';

const { mythics, rares, uncommons, commons, basicLands, special } = deckData;

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
      <CardList cards={special} title="Special" />
    </div>
  </>
);

export default App;

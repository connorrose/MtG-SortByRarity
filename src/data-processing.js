import rawWindgrace from '../Decklists/Windgrace.json';

const deckTitle = rawWindgrace.info.name;
const { mainboard } = rawWindgrace.list;

const mythics = [];
const rares = [];
const uncommons = [];
const commons = [];
const basicLands = [];
const special = [];

const convertColorsToClass = (rawColors) => {
  if (!rawColors) return 'colorless';
  if (rawColors.length > 1) return 'multi';

  let colorClass = '';
  switch (rawColors) {
    case 'W':
      colorClass = 'white';
      break;
    case 'U':
      colorClass = 'blue';
      break;
    case 'B':
      colorClass = 'black';
      break;
    case 'R':
      colorClass = 'red';
      break;
    case 'G':
      colorClass = 'green';
      break;
    default:
    // Do nothing
  }

  return colorClass;
};

const getRarityList = (rarity) => {
  if (/mythic/i.test(rarity)) return mythics;
  if (/rare/i.test(rarity)) return rares;
  if (/uncommon/i.test(rarity)) return uncommons;
  if (/common/i.test(rarity)) return commons;
  if (/basic/i.test(rarity)) return basicLands;
  return special;
};

mainboard.forEach(({ card, count }) => {
  // eslint-disable-next-line camelcase
  const { name, type, converted_cost, rarity, colors } = card;
  const rarityList = getRarityList(rarity);
  const processedCard = {
    name,
    type,
    cmc: converted_cost,
    colorClass: convertColorsToClass(colors),
  };

  for (let i = 0; i < count; i += 1) {
    rarityList.push(processedCard);
  }
});

const colorOrder = {
  white: 0,
  blue: 1,
  black: 2,
  red: 3,
  green: 4,
  colorless: 5,
  multi: 6,
};

const sortListByColor = (a, b) => colorOrder[a.colorClass] - colorOrder[b.colorClass];

mythics.sort(sortListByColor);
rares.sort(sortListByColor);
uncommons.sort(sortListByColor);
commons.sort(sortListByColor);
basicLands.sort(sortListByColor);
special.sort(sortListByColor);

export default {
  deckTitle,
  mythics,
  rares,
  uncommons,
  commons,
  basicLands,
  special,
};

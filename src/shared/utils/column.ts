const boughtCount = 31;

const priceLevel = 1;

const countRange: string[][] = [
  ['1', '52'],
  ['53', '222'],
  ['223', '1000'],
  ['1001', '∞'],
];
const priceList = [
  {
    label: `${countRange[0][0]}～${countRange[0][1]}`,
    value: ['-', '198.8'],
  },
  {
    label: `${countRange[1][0]}～${countRange[1][1]}`,
    value: ['198.8', '999'],
  },
  {
    label: `${countRange[2][0]}～${countRange[2][1]}`,
    value: ['365', '1988'],
  },
  {
    label: `${countRange[3][0]}～${countRange[3][1]}`,
    value: ['365', '-'],
  },
];

function getBoughtCount(): number {
  return boughtCount;
}

function getIndexInPriceList(): number {
  return priceLevel - 1;
}

function getPriceList() {
  return [...priceList];
}

function getPrice(index: number = getIndexInPriceList()) {
  return [...priceList[index].value];
}

function getCountRange(index: number = getIndexInPriceList()): string[] {
  return [...countRange[index]];
}

function getRemainingCount() {
  return Number(getCountRange()[1]) - getBoughtCount();
}

export {
  getIndexInPriceList, getPriceList, getPrice,
  getCountRange, getBoughtCount, getRemainingCount,
};

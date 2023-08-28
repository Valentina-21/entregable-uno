const getRandomElemArrays = (array, shownItems = []) => {
  const remainingItems = array.filter(item => !shownItems.includes(item));
  if (remainingItems.length === 0) {
      return null;
  }
  const randomIndex = Math.floor(Math.random() * remainingItems.length);
  const randomElem = remainingItems[randomIndex];
  return randomElem;
}

export default getRandomElemArrays;
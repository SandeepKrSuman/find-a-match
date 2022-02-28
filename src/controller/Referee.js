let assetArray = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

const shuffle = (arr) => {
  let len = arr.length,
    temp,
    i;
  while (len) {
    i = Math.floor(Math.random() * len--);
    temp = arr[len];
    arr[len] = arr[i];
    arr[i] = temp;
  }

  return arr;
};

const drawer = () => {
  assetArray = shuffle(assetArray);
  return assetArray;
};

const handleClick = (
  store,
  setStore,
  emojiId,
  setFlipped,
  elem,
  setElem,
  elemid
) => {
  if (!store) {
    setStore(emojiId);
    setElem(elemid);
    setFlipped(true);
  } else {
    if (emojiId !== store) {
      setFlipped(true);
      var delayInMilliseconds = 800;
      setTimeout(function () {
        setFlipped(false);
        document.getElementById(elem).classList.remove("is-flipped");
        setStore(null);
        setElem(null);
      }, delayInMilliseconds);
    }
    if (emojiId === store) {
      setFlipped(true);
      setStore(null);
      setElem(null);
    }
  }
};

export { handleClick, drawer };

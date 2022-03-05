let assetArray = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

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
  flip,
  store,
  setStore,
  emojiId,
  currElem,
  setCurrElem,
  move,
  setMove,
  matchFound,
  setMatchFound
) => {
  if (!store) {
    flip(true);
    setStore(emojiId);
    const fl = {
      fliplast: (x) => {
        flip(x);
      },
    };
    setCurrElem(fl);
  } else {
    setMove(move + 1);
    if (emojiId !== store) {
      flip(true);
      var delayInMilliseconds = 800;
      setTimeout(function () {
        flip(false);
        currElem.fliplast(false);
      }, delayInMilliseconds);
      setStore(null);
      setCurrElem(null);
    } else if (emojiId === store) {
      setMatchFound(matchFound + 1);
      flip(true);
      setStore(null);
      setCurrElem(null);
    }
  }
};

export { handleClick, drawer };

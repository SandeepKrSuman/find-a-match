let assetArray1 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
let assetArray2 = [7, 8, 9, 10, 11, 12, 7, 8, 9, 10, 11, 12];
let assetArray3 = [13, 14, 15, 16, 17, 18, 13, 14, 15, 16, 17, 18];

const chooseRandomAssets = (start, end) => {
  return Math.floor(Math.random() * (end - start + 1) + start);
};

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
  const asset = chooseRandomAssets(1, 3);
  if (asset === 1) {
    assetArray1 = shuffle(assetArray1);
    return assetArray1;
  } else if (asset === 2) {
    assetArray2 = shuffle(assetArray2);
    return assetArray2;
  } else if (asset === 3) {
    assetArray3 = shuffle(assetArray3);
    return assetArray3;
  }
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

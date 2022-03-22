let assetArray1 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
let assetArray2 = [7, 8, 9, 10, 11, 12, 7, 8, 9, 10, 11, 12];
let assetArray3 = [13, 14, 15, 16, 17, 18, 13, 14, 15, 16, 17, 18];
let assetArray4 = [19, 20, 21, 22, 23, 24, 19, 20, 21, 22, 23, 24];
let assetArray5 = [25, 26, 27, 28, 29, 30, 25, 26, 27, 28, 29, 30];
let assetArray6 = [31, 32, 33, 34, 35, 36, 31, 32, 33, 34, 35, 36];
let assetArray7 = [37, 38, 39, 40, 41, 42, 37, 38, 39, 40, 41, 42];
let assetArray8 = [43, 44, 45, 46, 47, 48, 43, 44, 45, 46, 47, 48];
let assetArray9 = [49, 50, 51, 52, 53, 54, 49, 50, 51, 52, 53, 54];
let assetArray10 = [55, 56, 57, 58, 59, 60, 55, 56, 57, 58, 59, 60];
let assetArray11 = [61, 62, 63, 64, 65, 66, 61, 62, 63, 64, 65, 66];

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
  const asset = chooseRandomAssets(1, 11);
  if (asset === 1) {
    assetArray1 = shuffle(assetArray1);
    return assetArray1;
  } else if (asset === 2) {
    assetArray2 = shuffle(assetArray2);
    return assetArray2;
  } else if (asset === 3) {
    assetArray3 = shuffle(assetArray3);
    return assetArray3;
  } else if (asset === 4) {
    assetArray4 = shuffle(assetArray4);
    return assetArray4;
  } else if (asset === 5) {
    assetArray5 = shuffle(assetArray5);
    return assetArray5;
  } else if (asset === 6) {
    assetArray6 = shuffle(assetArray6);
    return assetArray6;
  } else if (asset === 7) {
    assetArray7 = shuffle(assetArray7);
    return assetArray7;
  } else if (asset === 8) {
    assetArray8 = shuffle(assetArray8);
    return assetArray8;
  } else if (asset === 9) {
    assetArray9 = shuffle(assetArray9);
    return assetArray9;
  } else if (asset === 10) {
    assetArray10 = shuffle(assetArray10);
    return assetArray10;
  } else if (asset === 11) {
    assetArray11 = shuffle(assetArray11);
    return assetArray11;
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

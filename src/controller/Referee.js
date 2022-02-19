import { useState } from "react";

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

const handleClick = (store, setStore, emojiId, setFlipped) => {
  if (!store) {
    setStore(emojiId);
    setFlipped(true);
  } else {
    if (emojiId != store) {
      setFlipped(true);
      var delayInMilliseconds = 800;
      setTimeout(function () {
        setFlipped(false);
        setStore(null);
      }, delayInMilliseconds);
    }
  }
};

export { handleClick, drawer };

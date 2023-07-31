"use-strict";

//Task : calculate the amplitude of the given temperatures and ignor errors
// given tempertaures:
const temperatures1 = [9, -13, 4, 23, "error", 6, 18];
const temperatures2 = [6, 3, "error", 30, 23, -8, 25];

let calcTemp = function (temp1, temp2) {
  let mergedTemps = temp1.concat(temp2);
  let min = mergedTemps[0];
  let max = mergedTemps[0];

  for (let i = 0; i < mergedTemps.length; i++) {
    let current = mergedTemps[i];

    if (typeof mergedTemps[i] !== "number") continue;
    if (current < min) min = current;
    if (current > max) max = current;
  }
  if (min < 0) min = -min;

  console.log(
    `The max temperature is: ${max}, the minimum temperature is: ${min}`
  );
  console.log(`The amplitude is: ${max - min}`);
};

calcTemp(temperatures1, temperatures2);

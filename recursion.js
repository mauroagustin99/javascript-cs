function fibs(number) {
  let array = [0, 1];

  for (let i = 2; i <= number; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array;
}

function fibsRec(number) {
  let array = [0, 1];
  if (array.length == number) {
    return array;
  } else {
    for (let i = 2; i < number; i++) {
      array.push(array[i - 1] + array[i - 2]);
      fibsRec(number - 1);
    }
  }
  return array;
}

console.log(fibsRec(9));

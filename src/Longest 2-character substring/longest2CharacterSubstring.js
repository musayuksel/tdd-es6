function substring(str) {
  const longest = {
    slice: "",
    differentChar: 0,
  };

  const current = {
    slice: "",
    differentChar: 0,
  };
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    console.log(`currentChar>>>>>>>>>>>>>>>>>>>>>>>>>>>>: ${currentChar}`);
    if (current.slice.includes(currentChar)) {
      current.slice += currentChar;
      console.log(
        `current ALREADY exist and ADDED : current.slice: ${current.slice}`
      );
    } else if (current.differentChar < 2) {
      current.slice += currentChar;
      current.differentChar++;
      console.log(
        `current NOT exist and ADDED : current.slice: ${current.slice}`
      );
    } else {
      if (current.slice.length > longest.slice.length) {
        longest.slice = current.slice;
        longest.differentChar = current.differentChar;
        console.log(
          `3th char : ${currentChar} come Current is longer than longest new longest: ${current.slice}`
        );
      }
      current.slice = currentChar;
      current.differentChar = 1;
      console.log(`new current.slice: ${current.slice}`);
    }
  }
  if (current.slice.length > longest.slice.length) {
    longest.slice = current.slice;
    longest.differentChar = current.differentChar;
  }
  return longest.slice;
}

export { substring };

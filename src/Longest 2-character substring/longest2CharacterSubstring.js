function substring(str) {
  let longestSubString = "";
  let currentSubString = "";

  const isIncludesMostTwoChar = (str) => {
    const uniqueChars = [...new Set(str)];
    return uniqueChars.length <= 2;
  };

  for (let i = 0; i < str.length; i++) {
    currentSubString += str[i];

    if (isIncludesMostTwoChar(currentSubString)) {
      if (currentSubString.length > longestSubString.length) {
        longestSubString = currentSubString;
      }
    } else {
      currentSubString = currentSubString.slice(1);
    }
  }
  return longestSubString;
}

export { substring };

function ucFirst(str) {
  if (str.length == 0) {
    return str;
  } else if (str.length == 1) {
    return str.toUpperCase();
  }

  return str[0].toUpperCase() + str.slice(1, str.length); 
}


// slice(indexStart, indexEnd). indexEnd: the index of the first character to EXCLUDE from the returned substring.
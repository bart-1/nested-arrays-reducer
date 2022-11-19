const nestedArraysReducer = <T>(arrayToReduce: T[]): T[] => {
  return arrayToReduce.reduce(
    (newArray: T[], nestedElement) =>
      Array.isArray(nestedElement)
        ? newArray.concat(nestedArraysReducer(nestedElement))
        : newArray.concat(nestedElement),
    []
  );
};

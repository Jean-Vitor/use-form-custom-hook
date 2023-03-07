const isValidString = (str) => {
  return (str instanceof String || typeof str === "string") && str.length > 0;
}

export default isValidString;

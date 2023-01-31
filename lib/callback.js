const callback = (error, result) => {
  if (error) {
    console.log(error);
    return error;
  } else {
    console.log(result);
    return result;
  }
};

module.exports = callback;

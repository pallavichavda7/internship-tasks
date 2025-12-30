let count = 0;
module.exports = (req, res, next) => {
  count++;
  console.log("Request Count:", count);
  next();
};

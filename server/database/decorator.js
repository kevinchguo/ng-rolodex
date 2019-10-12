module.exports = function(req, res, next) {
  req.db = { User: User, Contact: Contact };
  next();
};

const isAuthenticated = (req, res, next) => {
  const { username, password } = req.session;
  if (username && password && username !== '' && password !== '') {
    next();
  } else {
    next(new Error('user not properly defined'));
  }
};

module.exports = isAuthenticated;

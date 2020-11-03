const isAuthenticated = (req, res, next) => {
  const { username, password } = req.session;
  if (!username || !password || username === '' || password === '') {
    next(new Error('user not properly defined'));
  }
  next();
};

module.exports = isAuthenticated;

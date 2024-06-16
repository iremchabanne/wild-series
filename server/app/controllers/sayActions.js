const sayWelcome = (req, res) => {
  console.info(req.query);
  res.send("Welcome!");
};

module.exports = { sayWelcome };

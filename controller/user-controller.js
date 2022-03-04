class UserController {
  register(req, res, next) {
    res.json('The user passed the validation');
  }
}

module.exports = new UserController();

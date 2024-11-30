const CrudRepository = require("./crudRepository");
const { User } = require("../models");

class AuthRepository extends CrudRepository {
  constructor() {
    super(User);
  }
}

module.exports = AuthRepository;

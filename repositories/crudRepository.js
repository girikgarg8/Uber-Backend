const { ConflictError, BadRequestError, NotFoundError } = require("../errors");

class CrudRepository {

  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      console.log("Successfully created the resource");
      return result;
    } catch (error) {
      console.error("Error while creating the resource", error);
      if (error.errorResponse?.code === 11000) {
        throw new ConflictError("auth", error.errorResponse.keyValue);
      }
      if (error.name === "ValidationError") {
        throw new BadRequestError("auth", error.message);
      }
      throw error;
    }
  }

  async get(data) {
    try {
      const result = await this.model.findOne(data).lean();
      console.log("Successfully queried the resource with the specified filters");
      if (!result){
        throw new NotFoundError("auth", JSON.stringify(data));
      }
      return result;
    } catch (error) {
      console.error("Error while querying resource", error);
      throw error;
    }
  }

  async findById(id) {
    try {
      const response = await this.model.findById(id);
      if (!response){
        throw new NotFoundError("auth", id);
      }
      console.log("Successfully located the resource with id");
      return response;
    }
    catch(error){
      console.error("Error while locating the resource with id", error);
      throw error;
    }
  }
}

module.exports = CrudRepository;

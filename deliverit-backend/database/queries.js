const UserModel = require("../models/UserModel");

const newUserQuery = UserModel => {
  let query = `INSERT INTO UsersTable VALUES('${UserModel.fullName}', '${
    UserModel.email
  }', '${UserModel.clientId}', '${UserModel.imageUrl}', '${
    UserModel.phoneNum
  }', ${UserModel.cancelCount}, ${UserModel.isActive}, ${UserModel.delivery}, ${
    UserModel.ratings
  });`;
  return query;
};

const getUserInfo = email => {
  let query = "SELECT * FROM UsersTable WHERE email = '" + email + "';";
  return query;
};

const getAllStores = "SELECT * FROM StoreTable";

module.exports = {
  storeQuery: getAllStores,
  newUser: newUserQuery,
  getUserInfo: getUserInfo
};

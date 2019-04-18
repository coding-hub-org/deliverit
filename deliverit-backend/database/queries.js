const UserModel = require("../models/UserModel");
const UserAddressModel = require("../models/UserAddressModel");

const newUserQuery = UserModel => {
  return `INSERT INTO UsersTable VALUES('${UserModel.fullName}', '${
    UserModel.email
  }', '${UserModel.imageUrl}', '${UserModel.phoneNum}', ${
    UserModel.cancelCount
  }, ${UserModel.isActive}, ${UserModel.delivery}, ${UserModel.ratings});`;
};

const getUserInfo = email => {
  let query = `SELECT * FROM UsersTable WHERE email = '${email}';`;
  return query;
};

const getAllStores = "SELECT * FROM StoreTable";

const newUserAddress = UserAddressModel => {
  return `INSERT INTO AddressTable VALUES('${UserAddressModel.email}', '${
    UserAddressModel.address
  }');`;
};

const getUserAddresses = email => {
  return `SELECT address FROM AddressTable WHERE email = '${email}'`;
};

const updateUserAddress = UserAddressModel => {
  return `UPDATE AddressTable SET address = '${
    UserAddressModel.address
  }' WHERE email = '${UserAddressModel.email}';`;
};

module.exports = {
  storeQuery: getAllStores,
  newUser: newUserQuery,
  getUserInfo: getUserInfo,
  newAddress: newUserAddress,
  getUserAddresses: getUserAddresses,
  updateAddress: updateUserAddress
};

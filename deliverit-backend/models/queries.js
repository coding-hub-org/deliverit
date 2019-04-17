newUserQuery = (email, fullName, clientId, phoneNum) => {
  let a =
    "INSERT INTO UsersTable VALUES('" +
    fullName +
    "', '" +
    email +
    "','" +
    clientId +
    "'," +
    "''" +
    "," +
    phoneNum +
    "," +
    0 +
    ", " +
    true +
    "," +
    0 +
    "," +
    0.0 +
    ");";

  return a;
};

getUserInfo = email => {
  let query = "SELECT * FROM UsersTable WHERE email = '" + email + "';";
  return query;
};

module.exports = {
  storeQuery: "SELECT * FROM StoreTable",
  newUser: newUserQuery,
  getUserInfo: getUserInfo
};

import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },

  {
    name: "John Doe",
    email: "john@email.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },

  {
    name: "Jane Doe",
    email: "jane@email.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },

];

export default users;

const Users = require("./users-model.js");
const db = require("../database/dbConfig.js");
const bcrypt = require("bcryptjs");

describe("users model", function() {
  describe("test environment", function() {
    it("should use the testing environment", function() {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe("get /", function() {
    it("should check the test db is not empty", function() {
      expect(db).toHaveLength(2);
    });
  });

  describe("insert()", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("adds 2 new users to the database", async function() {
      //it checks the database is empty
      let tbl = await db("users");
      expect(tbl).toHaveLength(0);

      //it adds 2 users to the database
      await Users.add({
        userName: "bob",
        password: bcrypt.hashSync("tomato", 3),
        department: "vegetable"
      });
      await Users.add({
        userName: "larry",
        password: bcrypt.hashSync("cucumber", 3),
        department: "vegetable"
      });
      // it checks user was deleted
      tbl = await db("users");
      expect(tbl).toHaveLength(2);
    });
  });

  describe("remove", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("adds 2 new users to the database", async function() {
      //it checks the database is empty
      let tbl = await db("users");
      expect(tbl).toHaveLength(0);

      //it adds 2 users to the database
      await Users.add({
        userName: "bob",
        password: bcrypt.hashSync("tomato", 3),
        department: "vegetable"
      });
      await Users.add({
        userName: "larry",
        password: bcrypt.hashSync("cucumber", 3),
        department: "vegetable"
      });

      tbl = await db("users");
      expect(tbl).toHaveLength(2);
      // it deletes a single user from the database
      tbl = await Users.remove(1);
      // it checks user was deleted
      tbl = await db("users");
      expect(tbl).toHaveLength(1);
    });
  });
});

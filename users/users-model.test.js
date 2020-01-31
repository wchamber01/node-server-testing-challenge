const Users = require("./users-model.js");
const db = require("../database/dbConfig.js");
const server = require("../api/server.js");
const request = require("supertest");

describe("users model", function() {
  describe("test environment", function() {
    it("should use the testing environment", function() {
      // console.log(process.env, "process line 7");
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe("get /", function() {
    it("should check the test db is empty", function() {
      expect(db).toHaveLength(2);
    });
  });

  describe("insert()", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("adds a new user to the database", async function() {
      await Users.add({
        userName: "bob",
        password: "tomato",
        department: "vegetable"
      });
      await Users.add({
        userName: "larry",
        password: "cucumber",
        department: "vegetable"
      });

      const user = await db("users");

      expect("users").toHaveLength(5);
    });
  });
  describe("test environment", function() {});
  describe("test environment", function() {});
});

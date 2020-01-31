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
  // describe("test environment", function() {
  // });
  // describe("test environment", function() {});
  // describe("test environment", function() {});
});

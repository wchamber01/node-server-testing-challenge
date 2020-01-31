const request = require("supertest");
const server = require("./server.js");

describe("server", function() {
  describe("server", function() {
    it("should return 200 OK", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("should return 200 OK", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("should return JSON", function() {
      //make a GET request to /
      return request(server)
        .get("/")
        .then(res => {
          //check for json
          expect(res.type).toMatch(/json/);
        });
    });

    it("should return value of api to be up", function() {
      //make a GET request to /
      return request(server)
        .get("/")
        .then(res => {
          //check for property in the body
          expect(res.body.api).toBe("up");
        });
    });
  });
  describe("server", function() {});
  describe("server", function() {});
  describe("server", function() {});
});

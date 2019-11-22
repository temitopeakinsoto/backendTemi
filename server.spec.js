const request = require("supertest");
const server = require("./server");
const db = require("./config/db-config");

let incompleteUser = { username: "fakeUser" };
let user = { username: "tops", password: "1234" };
let student = { name: "temi" };


describe("CHECK DB ENVIRONMENT", () => {
  it("the db env is testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("POST /api/auth/register ENDPOINT", () => {
  it("user cant register without complete credentials", () => {
    return request(server)
      .post("/api/auth/register") 
      .send(incompleteUser)
      .expect(400);
  });
  it("should return 201 status and return the correct username for register", () => {
    return request(server)
      .post("/api/auth/register")
      .send(user)
      .set("Content-Type", "application/json")
      .then(res => {
        expect(201);
      });
  });
});

describe("POST /api/auth/login ENDPOINT", () => {
  it("user cant login without complete credentials", () => {
    return request(server)
      .post("/api/auth/login")
      .send(incompleteUser)
      .expect(401);
  });
  it("should return 200 status upon successful login", () => {
    return request(server)
      .post("/api/auth/login")
      .send(user)
      .set("Content-Type", "application/json")
      .then(res => {
        expect(200);
      });
  });
});

describe("GET /api/students ENDPOINT", function() {
  it("respond with json containing a list of all students", () => {
    request(server)
      .get("/api/students")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("GET /api/students/:id ENDPOINT", function() {
  it("respond with json containing a single user", () => {
    request(server)
      .get("/api/students/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("POST /api/student ENDPOINT", () => {
  
  it("should return 201 status for a valid student body", () => {
    return request(server)
      .post("/api/students")
      .send(student)
      .set("Content-Type", "application/json")
      .expect(201);
  });
});

describe("GET /api/messages ENDPOINT", function() {
  it("respond with json containing a list of all messages", () => {
    request(server)
      .get("/api/messages")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("GET /api/projects ENDPOINT", function() {
    it("respond with json containing a list of all projects", () => {
      request(server)
        .get("/api/projects")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });

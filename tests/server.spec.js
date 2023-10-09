import request from "supertest";
import server from "../index.js";

describe("Test operations for users routes", () => {

  it("POST /users returns an statusCode 201 and adds a new user", async () => {
    const randomizeEmailId = Math.floor(Math.random() * 999);
    const testUser = {
      'name': 'test',
      'lastName': 'testlastname',
      'email': `test${randomizeEmailId}@test.com`,
      'password': 'test',
      'img_avatar': 'link-img'
    };

    const response = await request(server).post("/api/v1/users").send(testUser);
    const status = response.statusCode;

    expect(status).toBe(201)
  })

  it("GET /users/:id returns an statusCode 404 when searching for an inexistent id", async () => {
    const response = await request(server).get("/api/v1/users/7988").send();
    const status = response.statusCode;

    expect(status).toBe(404)
  })
})

describe("Test operations for favorites routes", () => {
  it("DELETE /favorites/id returns statusCode 401 when the Token is invalid", async () => {
    const randomizeId = Math.floor(Math.random() * 999)
    const response = await request(server).delete(`/api/v1/favorites/${randomizeId}`).set('Authorization', `Bearer token`).send()
    const status = response.statusCode;

    expect(status).toBe(401)
  })
})

describe("Test operations for classes routes", () => {
  it("GET /classes returns statusCode 200 and the data type returned is an array of more than one item", async () => {
    const response = await request(server).get("/api/v1/classes").send();
    const status = response.statusCode;
    const classes = response.body.result;

    expect(status).toBe(200);
    expect(classes.length).toBeGreaterThanOrEqual(1)
  })
})

describe("Test operations for comments routes", () => {
  it("GET /comments/class/:id returns statusCode 200 when there is not comments on a class", async () => {
    const testId = 15
    const response = await request(server).get(`/api/v1/comments/class/${testId}`).send();

    const status = response.statusCode;
    const classes = response.body.result;

    expect(status).toBe(200);
    expect(classes.length).toBe(0)
  })
})

import { testAxios, test404Error } from "./test_functions";

describe("Testing Axios", () => {
  test("Axios Get Request", async () => {
    expect.assertions(1);
    const data = await testAxios();
    expect(data.length).toBeGreaterThanOrEqual(1);
  });
});

describe("Testing 404 error ", () => {
  test("API route doesnt exist", async () => {
    expect.assertions(1);
    const result = await test404Error();
    expect(result.response.status).toBe(404);
  });
});

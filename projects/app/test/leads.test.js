import { getAllLeadsFromAPI } from "./test_functions";

describe("Get Total Leads from API", () => {
  //   test("Total Leads 0 if none are added", async () => {
  //     expect.assertions(1);
  //     const result = await getAllLeadsFromAPI();
  //     expect(result.length).toBe(0);
  //   });

  test("Total Leads Should be greater than 0 if leads are added", async () => {
    expect.assertions(1);
    const result = await getAllLeadsFromAPI();
    expect(result.length).toBeGreaterThanOrEqual(1);
  });
});
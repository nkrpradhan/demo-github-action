import { sum } from ".";
describe("first", () => {
  test("should check sum fn", () => {
   expect(sum({a:3,b:7})).toEqual(10)
  });
});

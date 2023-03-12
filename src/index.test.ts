import { sum } from ".";
describe("first", () => {
  test("should check sum fn", () => {
    //test
   expect(sum({a:3,b:7})).toEqual(10)
  });
});

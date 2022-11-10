import { Test } from "./components/Test";

//자주 사용되는 Matcher
//toEqual / toBeTruthy / toBeFalsy / toHaveLength / toContain /not.toContain
//toMatch() 정규식 / toThrow() 예외발생여부 테스트
test("1 is 1", () => {
  expect(1).toBe(1); //toXXX 가 test Matcher
});

test("number 0 is falsy but string 0 is truthy", () => {
  expect(0).toBeFalsy();
  expect("0").toBeTruthy();
});

test("array", () => {
  const colors = ["Red", "Yellow", "Blue"];
  expect(colors).toHaveLength(3);
  expect(colors).toContain("Yellow");
  expect(colors).not.toContain("Green");
});

test("compareNSaveResult", () => {
  expect(Test.compareNSaveResult("e", "n")).toBe("e");
});

//test는 작은 테스트만
//describe는 여러개의 테스트를 진행하는 block을 생성

// describe("Filter function", () => {
//   test("it should filter by a search term (link)", () => {
//     const input = [
//       { id: 1, url: "https://www.url1.dev" },
//       { id: 2, url: "https://www.url2.dev" },
//       { id: 3, url: "https://www.link3.dev" },
//     ];

//     const output = [{ id: 3, url: "https://www.link3.dev" }];

//     expect(filterByTerm(input, "link")).toEqual(output);
//   });
// });

import { substring } from "./longest2CharacterSubstring";

describe("substring function", () => {
  it("should return string itself as longest substring", () => {
    expect(substring("a")).toEqual("a");
  });
  it("should return longest substring", () => {
    expect(substring("abacd")).toEqual("aba");
    expect(substring("abacddcd")).toEqual("cddcd");
  });
});

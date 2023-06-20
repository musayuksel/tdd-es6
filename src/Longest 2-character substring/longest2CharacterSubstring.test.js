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

describe("Edge cases", () => {
  it("should return empty string if input is empty string", () => {
    expect(substring("")).toEqual("");
  });
  it("should return correct string if input is long", () => {
    expect(substring("cefageaacceaccacca")).toEqual("accacca");
  });
});

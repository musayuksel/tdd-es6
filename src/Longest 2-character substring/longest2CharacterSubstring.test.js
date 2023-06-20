import { substring } from "./longest2CharacterSubstring";

describe("substring function", () => {
  it("should return string itself as longest substring", () => {
    expect(substring("a")).toEqual("a");
  });
});

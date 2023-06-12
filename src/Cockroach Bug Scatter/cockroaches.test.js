import {
  findAllCockroaches,
  moveCockroachToWall,
  findAllHolesFromTopToLeft,
} from "./cockroaches";

const room1 = [
  "8----6-----------0---------------+",
  "|                                |",
  "|                                |",
  "7          U        D            |",
  "|     L                          9",
  "|              R                 |",
  "|           L                    |",
  "|  U                             1",
  "3        U    D                  |",
  "|         L              R       |",
  "|                                |",
  "+---------------2---------------+",
];

const room1Cockroaches = [
  { position: [3, 11], direction: "U" },
  { position: [3, 20], direction: "D" },
  { position: [4, 6], direction: "L" },
  { position: [5, 15], direction: "R" },
  { position: [6, 12], direction: "L" },
  { position: [7, 3], direction: "U" },
  { position: [8, 9], direction: "U" },
  { position: [8, 14], direction: "D" },
  { position: [9, 10], direction: "L" },
  { position: [9, 25], direction: "R" },
];

const holesFromTopToLeft = [
  { position: [0, 17], holeIndex: "0" },
  { position: [0, 5], holeIndex: "6" },
  { position: [0, 0], holeIndex: "8" },
  { position: [3, 0], holeIndex: "7" },
  { position: [8, 0], holeIndex: "3" },
  { position: [11, 16], holeIndex: "2" },
  { position: [7, 33], holeIndex: "1" },
  { position: [4, 33], holeIndex: "9" },
];

describe("findAllCockroaches function :", () => {
  it("should return all cockroaches positions and directions", () => {
    expect(findAllCockroaches(room1)).toEqual(room1Cockroaches);
  });
});

describe("moveCockroachToWall function :", () => {
  it("should move cockroach to wall", () => {
    expect(moveCockroachToWall(room1Cockroaches[0], room1)).toEqual({
      position: [0, 11],
      direction: "U",
    });
    expect(moveCockroachToWall(room1Cockroaches[1], room1)).toEqual({
      position: [11, 20],
      direction: "D",
    });
    expect(moveCockroachToWall(room1Cockroaches[2], room1)).toEqual({
      position: [4, 0],
      direction: "L",
    });
    expect(moveCockroachToWall(room1Cockroaches[3], room1)).toEqual({
      position: [5, 33],
      direction: "R",
    });
  });
});

describe("findAllHolesFromTopToLeft function :", () => {
  it("should return all holes positions starting from top and going to left", () => {
    expect(findAllHolesFromTopToLeft(room1)).toEqual(holesFromTopToLeft);
  });
});

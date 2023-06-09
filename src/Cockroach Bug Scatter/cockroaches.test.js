import { findAllCockroaches, moveCockroachToWall } from "./cockroaches";

const room1 = [
  "+----------------0---------------+",
  "|                                |",
  "|                                |",
  "|          U        D            |",
  "|     L                          |",
  "|              R                 |",
  "|           L                    |",
  "|  U                             1",
  "3        U    D                  |",
  "|         L              R       |",
  "|                                |",
  "+----------------2---------------+",
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

import { findAllCockroaches } from "./cockroaches";

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

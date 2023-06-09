const findAllCockroaches = (room) => {
  const cockroachesPositions = [];
  const cockroachesDirections = "UDLR";

  room.forEach((row, rowIndex) => {
    row.split("").forEach((cell, cellIndex) => {
      if (cockroachesDirections.includes(cell)) {
        cockroachesPositions.push({
          position: [rowIndex, cellIndex],
          direction: cell,
        });
      }
    });
  });

  return cockroachesPositions;
};

const moveCockroachToWall = (cockroach, room) => {
  const currentPos = cockroach.position;
  const currentDir = cockroach.direction;

  if (currentDir === "U") {
    currentPos[0] = 0;
  } else if (currentDir === "D") {
    currentPos[0] = room.length - 1;
  } else if (currentDir === "L") {
    currentPos[1] = 0;
  } else if (currentDir === "R") {
    currentPos[1] = room[0].length - 1;
  }

  return cockroach;
};

const cockroaches = (room) => {
  return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
};

export { cockroaches, findAllCockroaches, moveCockroachToWall };

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

  console.log({ currentPos, currentDir });
  return cockroach;
};

const findAllHolesFromTopToLeft = (room) => {
  const holesPositions = [];
  const holesDirections = "0123456789";

  room.forEach((row, rowIndex) => {
    row.split("").forEach((cell, cellIndex) => {
      if (holesDirections.includes(cell)) {
        holesPositions.push({
          position: [rowIndex, cellIndex],
          holeIndex: cell,
        });
      }
    });
  });

  const upWall = holesPositions
    .filter((hole) => hole.position[0] === 0)
    .reverse();
  const downWall = holesPositions.filter(
    (hole) => hole.position[0] === room.length - 1
  );
  const leftWall = holesPositions.filter((hole) => hole.position[1] === 0);
  const rightWall = holesPositions
    .filter((hole) => hole.position[1] === room[0].length - 1)
    .reverse();

  const sortedHolesFromUpToLeft = new Set([
    ...upWall,
    ...leftWall,
    ...downWall,
    ...rightWall,
  ]);
  console.log([...sortedHolesFromUpToLeft]);
  return [...sortedHolesFromUpToLeft];
};
const cockroaches = (room) => {
  return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
};

export {
  cockroaches,
  findAllCockroaches,
  moveCockroachToWall,
  findAllHolesFromTopToLeft,
};

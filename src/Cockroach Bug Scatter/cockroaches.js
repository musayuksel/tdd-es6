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

const findAllHolesFromTopToLeft = (room) => {
  const holesPositions = [];
  const holesDirections = "0123456789";

  room.forEach((row, rowIndex) => {
    row.split("").forEach((cell, cellIndex) => {
      if (holesDirections.includes(cell)) {
        holesPositions.push({
          position: [rowIndex, cellIndex],
          holeIndex: +cell,
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
  return [...sortedHolesFromUpToLeft];
};
const cockroaches = (room) => {
  const allCockroaches = findAllCockroaches(room);
  const allHoles = findAllHolesFromTopToLeft(room);
  const holes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  allCockroaches.forEach((cockroach) => {
    const newPositionOfCockroach = moveCockroachToWall(cockroach, room);
    let { position, direction } = newPositionOfCockroach;
    // if (direction === "U") { find first hole that position[0] =0 and position[1] is same or less than cockroach position[1] }
    // if (direction === "D") { find first hole that position[0] =room.length -1 and position[1] is same or less than cockroach position[1] }
    // if (direction === "L") { find first hole that position[1] =0 and position[0] is same or less than cockroach position[0] }
    // if (direction === "R") { find first hole that position[1] =room[0].length -1 and position[0] is same or less than cockroach position[0] }

    if (direction === "U") {
      const hole = allHoles.find(
        (hole) => hole.position[0] === 0 && hole.position[1] <= position[1]
      );
      // if there is no hole put the position to top left corner

      if (!hole) {
        position[0] = 0;
        position[1] = 0;
        direction = "L";
      } else {
        holes[hole.holeIndex] += 1;
      }
    }
    if (direction === "L") {
      const hole = allHoles.find(
        (hole) => hole.position[1] === 0 && position[0] <= hole.position[0]
      );
      if (!hole) {
        position[0] = room.length - 1;
        position[1] = 0;
        direction = "D";
      } else {
        holes[hole.holeIndex] += 1;
      }
    }
    if (direction === "D") {
      const hole = allHoles.find(
        (hole) =>
          hole.position[0] === room.length - 1 &&
          position[1] <= hole.position[1]
      );
      if (!hole) {
        position[0] = room.length - 1;
        position[1] = room[0].length - 1;
        direction = "R";
      } else {
        holes[hole.holeIndex] += 1;
      }
    }

    if (direction === "R") {
      const hole = allHoles.find(
        (hole) =>
          hole.position[1] === room[0].length - 1 &&
          hole.position[0] <= position[0]
      );
      if (!hole) {
        position[0] = 0;
        position[1] = room[0].length - 1;
        direction = "U";
      } else {
        holes[hole.holeIndex] += 1;
      }
    }
    if (direction === "U") {
      const hole = allHoles.find(
        (hole) => hole.position[0] === 0 && hole.position[1] <= position[1]
      );
      // if there is no hole put the position to top left corner

      if (!hole) {
        position[0] = 0;
        position[1] = 0;
        direction = "L";
      } else {
        holes[hole.holeIndex] += 1;
      }
    }
  });

  return holes;
};

export {
  cockroaches,
  findAllCockroaches,
  moveCockroachToWall,
  findAllHolesFromTopToLeft,
};

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

const cockroaches = (room) => {
  return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
};

export { cockroaches, findAllCockroaches };

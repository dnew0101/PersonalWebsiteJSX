const generateDistantPositions = (count, minDistance, maxDistance) => {
  const positions = []
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos((Math.random() * 2) - 1);
    const radius = minDistance + Math.random() * (maxDistance - minDistance);

    const x = radius * Math.sin(phi) * Math.cos(theta)
    const y = 10+Math.abs(radius * Math.sin(phi) * Math.sin(theta))
    const z = -1*Math.abs(radius * Math.cos(phi))

    positions.push([x, y, z])
  }
  return positions;
}

export default generateDistantPositions;
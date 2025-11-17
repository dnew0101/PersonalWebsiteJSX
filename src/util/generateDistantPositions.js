const generateDistantPositions = (count, minDistance = 30, maxDistance = 50) => {
  const positions = []
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos((Math.random() * 2) - 1);
    const radius = minDistance + Math.random() * (maxDistance - minDistance);

    const x = radius * Math.sin(phi) * Math.cos(theta)
    const y = Math.abs(radius * Math.sin(phi) * Math.sin(theta))
    const z = -1*Math.abs(radius * Math.cos(phi))

    positions.push([x, y, z])
  }
  return positions;
}

export default generateDistantPositions;
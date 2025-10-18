export function calculateNpcMetrics(xRatio, mapWidth, mcX) {
    const npcX = xRatio * mapWidth;
    const distance = Math.abs(mcX - npcX);
    return { npcX, distance };
}
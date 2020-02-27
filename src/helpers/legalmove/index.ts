function legalMove(x: number, y: number, gridSize: number) {
    if (!gridSize || gridSize<=1 || !Number.isInteger(gridSize)) {
        throw new Error("Grid size should be an integer greater than 1") 
    }

    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        throw new Error("X & Y should both be integers") 
    }
    
    return x >= 0 && x < gridSize && y >= 0 && y < gridSize
}

export default legalMove
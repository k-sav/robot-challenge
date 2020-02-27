import legalMove from '../helpers/legalmove'
import Compass from '../helpers/compass'
import CompassNode from '../helpers/compass/compassnode'
import roboLogger from './logger'

export const fourBearings = ['NORTH', 'EAST', 'SOUTH', 'WEST']
const myCompass = new Compass(fourBearings)

class Robot {
  private gridSize: number;
  private x: number;
  private y: number;
  private placed: boolean;
  private bearing: CompassNode;

  constructor(gridSize) {
    this.gridSize = gridSize
    this.placed = false
  }

  place(xPos, yPos, bearing) {
    this.x = xPos
    this.y = yPos
    

    if (typeof(bearing) !== 'string') {
      throw new Error(roboLogger('placeBearing', fourBearings))
    }

    if (!fourBearings.includes(bearing.toUpperCase())) {
      throw new Error(roboLogger('placeBearing', fourBearings))
    }

    if (typeof xPos !== 'number' || typeof yPos !== 'number') {
      throw new Error(roboLogger('placexPosYPos'))
    }

    this.bearing = myCompass.find(bearing)



    const validMove = legalMove(this.x, this.y, this.gridSize)
    if (validMove) {
      this.placed = true
      return this.report()
    } else {
      throw new Error(roboLogger('potentiallyOffTable'))
    }
  }

  move() {
    let newX = this.x
    let newY = this.y
    if (!this.placed) throw new Error(roboLogger('notPlacedYet'))
    switch (this.bearing.value) {
      case 'WEST':
        newX = this.x - 1
        break
      case 'EAST':
        newX = this.x + 1
        break
      case 'NORTH':
        newY = this.y + 1
        break
      case 'SOUTH':
        newY = this.y - 1
        break
    }

    const moveIsLegal = legalMove(newX, newY, this.gridSize)
    if (moveIsLegal) {
      this.x = newX
      this.y = newY
      return this.report()
    } else {
      throw new Error(roboLogger('potentiallyOffTable'))
    }
  }

  left() {
    if (!this.placed) throw new Error(roboLogger('notPlacedYet'))
    this.bearing = this.bearing.left
    return this.report()
  }

  right() {
    if (!this.placed) throw new Error(roboLogger('notPlacedYet'))
    this.bearing = this.bearing.right
    return this.report()
  }

  report() {
    if (!this.placed) throw new Error(roboLogger('notPlacedYet'))
    return roboLogger('report', [`${this.x}`, `${this.y}`, `facing ${this.bearing.value}`])
  }
}

export default Robot


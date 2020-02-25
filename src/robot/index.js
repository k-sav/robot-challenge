import legalMove from '../helpers/legalmove'
import Compass from '../helpers/compass'
import roboLogger from './logger'

export const fourBearings = ['NORTH', 'EAST', 'SOUTH', 'WEST']
const myCompass = new Compass(fourBearings)

export default class Robot {
  constructor(gridSize) {
    this._gridSize = gridSize
    this._placed = false
  }

  place(xPos, yPos, bearing) {
    this._x = xPos
    this._y = yPos
    this._bearing = myCompass.find(bearing)

    if (!fourBearings.includes(bearing)) {
      throw new Error(roboLogger('placeBearing', fourBearings))
    }

    if (typeof xPos !== 'number' || typeof yPos !== 'number') {
      throw new Error(roboLogger('placexPosYPos'))
    }

    const validMove = legalMove(this._x, this._y, this._gridSize)
    if (validMove) {
      this._placed = true
      return this.report()
    } else {
      throw new Error(roboLogger('potentiallyOffTable'))
    }
  }

  move() {
    let newX = this._x
    let newY = this._y
    if (!this._placed) throw new Error(roboLogger('notPlacedYet'))
    switch (this._bearing.value) {
      case 'WEST':
        newX = this._x - 1
        break
      case 'EAST':
        newX = this._x + 1
        break
      case 'NORTH':
        newY = this._y + 1
        break
      case 'SOUTH':
        newY = this._y - 1
        break
    }

    const moveIsLegal = legalMove(newX, newY, this._gridSize)
    if (moveIsLegal) {
      this._x = newX
      this._y = newY
      return this.report()
    } else {
      throw new Error(roboLogger('potentiallyOffTable'))
    }
  }

  left() {
    if (!this._placed) throw new Error(roboLogger('notPlacedYet'))
    this._bearing = this._bearing.left
    return this.report()
  }

  right() {
    if (!this._placed) throw new Error(roboLogger('notPlacedYet'))
    this._bearing = this._bearing.right
    return this.report()
  }

  report() {
    if (!this._placed) throw new Error(roboLogger('notPlacedYet'))
    return roboLogger('report', [this._x, this._y, `facing ${this._bearing.value}`])
  }
}


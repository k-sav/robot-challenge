import Robot, {fourBearings} from '../robot/index'

let myUnplacedRobot
let myPlacedRobot
let placedBotReturn
const x = 0
const y = 0
const bearing = 'EAST'

beforeEach(() => {
    myUnplacedRobot = new Robot(5)
    myPlacedRobot = new Robot(5)
    placedBotReturn = myPlacedRobot.place(x, y, bearing)
});

test('Uplaced robot throws on move, left, right, report methods', () => {
    expect(myUnplacedRobot._placed).toBe(false)
    expect(() => myUnplacedRobot.move()).toThrow(Error)
    expect(() => myUnplacedRobot.left()).toThrow(Error)
    expect(() => myUnplacedRobot.right()).toThrow(Error)
    expect(() => myUnplacedRobot.report()).toThrow(Error)
})

test('Wrongly placed robot throws', () => {
    expect(() => myUnplacedRobot.place(0, 0, 'bad bearing')).toThrow(Error)
    expect(() => myUnplacedRobot.place(-1, 0, 'EAST')).toThrow(Error)
    expect(() => myUnplacedRobot.place(0, 5, 'EAST')).toThrow(Error)
    expect(() => myUnplacedRobot.place(null, 5, 'EAST')).toThrow(Error)
    expect(() => myUnplacedRobot.place('', 5, 'EAST')).toThrow(Error)
    expect(() => myUnplacedRobot.place(undefined, 5, 'EAST')).toThrow(Error)
})


test('Correctly placed robot returns string with placed values', () => {
    const bearingExpectation = expect.stringContaining(bearing)
    const xExpectation = expect.stringContaining('' + x)
    const yExpectation = expect.stringContaining('' + y)
    expect(placedBotReturn).toEqual(bearingExpectation)
    expect(placedBotReturn).toEqual(xExpectation)
    expect(placedBotReturn).toEqual(yExpectation)
})

test('Correctly placed robot has _x _y props', () => {
    expect(myPlacedRobot._x).toBe(x)
    expect(myPlacedRobot._y).toBe(y)
})


test('Correctly placed robot returns string with placed values', () => {
    const bearingExpectation = expect.stringContaining(bearing)
    const xExpectation = expect.stringContaining('' + x)
    const yExpectation = expect.stringContaining('' + y)
    expect(placedBotReturn).toEqual(bearingExpectation)
    expect(placedBotReturn).toEqual(xExpectation)
    expect(placedBotReturn).toEqual(yExpectation)
})

test('Correctly placed robot turns', () => {
    myPlacedRobot.left()
    expect(myPlacedRobot._bearing.value).toBe('NORTH')
    myPlacedRobot.right()
    expect(myPlacedRobot._bearing.value).toBe('EAST')
    myPlacedRobot.right()
    expect(myPlacedRobot._bearing.value).toBe('SOUTH')
    myPlacedRobot.right()
    expect(myPlacedRobot._bearing.value).toBe('WEST')
    const turnedBot = myPlacedRobot.right()
    expect(myPlacedRobot._bearing.value).toBe('NORTH')
    expect(turnedBot).toEqual(expect.stringContaining('NORTH'))
})

test('Correctly placed robot moves', () => {
    //SOUTH
    myPlacedRobot.right()
    expect(() => myPlacedRobot.move()).toThrow(Error)
    //EAST
    myPlacedRobot.left()
    myPlacedRobot.move()
    expect(myPlacedRobot._placed).toBe(true)
    expect(myPlacedRobot._x).toBe(x + 1)
    expect(myPlacedRobot._y).toBe(y)
    //NORTH
    myPlacedRobot.left()
    myPlacedRobot.move()
    myPlacedRobot.move()
    expect(myPlacedRobot._x).toBe(x + 1)
    expect(myPlacedRobot._y).toBe(y + 2)
    //WEST
    myPlacedRobot.left()
    myPlacedRobot.move()
    expect(myPlacedRobot._x).toBe(x)
    expect(myPlacedRobot._y).toBe(y + 2)
    //SOUTH
    myPlacedRobot.left()
    myPlacedRobot.move()
    expect(myPlacedRobot._x).toBe(x)
    expect(myPlacedRobot._y).toBe(y + 1)
})

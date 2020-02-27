import Compass from './index'

const fourBearings = ['NORTH', 'EAST', 'SOUTH', 'WEST']
const eightBearings = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
let my4WayCompass: Compass
let my8WayCompass: Compass

let compassNode = expect.objectContaining({
    value: expect.any(String),
    left: expect.any(Object),
    right: expect.any(Object),
})

beforeEach(() => {
    my4WayCompass = new Compass(fourBearings);
    my8WayCompass = new Compass(eightBearings);
});

test('Compass length is correct', () => {
    expect(my4WayCompass).toHaveLength(4)
    expect(my8WayCompass).toHaveLength(8)
})

test('Compass head is NORTH', () => {
    expect(my4WayCompass.head.value).toBe('NORTH')
    expect(my8WayCompass.head.value).toBe('N')
})

test('Left of head', () => {
    expect(my4WayCompass.head.left.value).toBe('WEST')
    expect(my8WayCompass.head.left.value).toBe('NW')
})

test('Right of head', () => {
    expect(my4WayCompass.head.right.value).toBe('EAST')
    expect(my8WayCompass.head.right.value).toBe('NE')
})

test('Find to equal a compassNode', () => {
    expect(my4WayCompass.find('EAST')).toEqual(compassNode)
    expect(my8WayCompass.find('E')).toEqual(compassNode)
})

test('Right of EAST', () => {
    expect(my4WayCompass.find('EAST').right.value).toBe('SOUTH')
    expect(my8WayCompass.find('E').right.value).toBe('SE')
})

test('Left of EAST', () => {
    expect(my4WayCompass.find('EAST').left.value).toBe('NORTH')
    expect(my8WayCompass.find('E').left.value).toBe('NE')
})



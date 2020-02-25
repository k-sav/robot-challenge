import legalMove from './index'

test('0,0 on 5 x 5 grid is valid', () => {
    expect(legalMove(0, 0, 5)).toBe(true)
})

test('-1,0 on 5 x 5 grid is invalid', () => {
    expect(legalMove(-1, 0, 5)).toBe(false)
})

test('4,4 on 5 x 5 grid is valid', () => {
    expect(legalMove(4, 4, 5)).toBe(true)
})

test('5,5 on 5 x 5 grid is invalid', () => {
    expect(legalMove(5, 5, 5)).toBe(false)
})

test('5,5 on 0 x 0 grid to error', () => {
    expect(legalMove.bind(this, 5, 5, 0)).toThrow()
})

test('5,5 on 5.5 x 5.5 grid to error', () => {
    expect(legalMove.bind(this, 5, 5, 5.5)).toThrow()
})

test('5,5.5 on 10 x 10 grid to error', () => {
    expect(legalMove.bind(this, 5, 5.5, 10)).toThrow()
})

test('5,5 on ten x ten grid to error', () => {
    expect(legalMove.bind(this, 5, 5.5, 'ten')).toThrow()
})
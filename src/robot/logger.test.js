import logger, {prefix} from './logger'

test('Logger returns returns a string with our prefix', () => {
    const returnExpectation = expect.stringContaining(prefix)
    expect(logger()).toEqual(returnExpectation)
    expect(logger('wrongKey')).toEqual(returnExpectation)
    expect(logger('wrongKey', [])).toEqual(returnExpectation)
})



import logger, {prefix} from './logger'

test('Logger returns returns a string with our prefix', () => {
    const returnExpectation = expect.stringContaining(prefix)
    expect(logger('wrongKey', [])).toEqual(returnExpectation)
})
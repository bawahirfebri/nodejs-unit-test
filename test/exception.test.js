import { MyExceptioon, callMe } from "../src/exception"

test('exception', () => {
    expect(() => callMe('Eko')).toThrow()
    expect(() => callMe('Eko')).toThrow(MyExceptioon)
    expect(() => callMe('Eko')).toThrow('Ups my exceptions happen')
})

test('exception not happens', () => {
    expect(callMe('Budi')).toBe('ok')
})
import { sayHello } from "../src/sayHello"

test('sayHello success', () => {
    expect(sayHello('Eko')).toBe('Hello Eko')
})

test.failing('sayHello error', () => {
    expect(sayHello('Eko')).toThrow()
})
beforeAll(() => console.log('Before all outer'))
afterAll(() => console.log('After all outer'))
beforeEach(() => console.log('Before each outer'))
afterEach(() => console.log('After each outer'))

test('outer', () => console.log('Test Outer'))

describe('inner', () => {

    beforeEach(() => console.log('Before each inner'))
    afterEach(() => console.log('After each inner'))
    test('Test inner', () => console.log('Test Inner'))
})
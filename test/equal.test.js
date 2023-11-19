test('test toBe', () => {
    const name = 'Eko'
    const hello = `Hello ${name}`

    expect(hello).toBe('Hello Eko')
})

test('test toEqual', () => {
    let person = {id: 'eko'}
    Object.assign(person, {name: 'Febri'})

    expect(person).toEqual({id: 'eko', name: 'Febri'})
})


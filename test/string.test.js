test('string', () => {
    const name = 'Febri Bawahir'

    expect(name).toBe('Febri Bawahir')
    expect(name).toMatch(/ahir/)
})
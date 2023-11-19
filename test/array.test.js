test('array simple', () => {
    const names = ['eko', 'kurniawan', 'khannedy']
    expect(names).toEqual(['eko', 'kurniawan', 'khannedy'])
    expect(names).toContain('eko')
})

test('array object', () => {
    const persons = [{name: 'Eko'}, {name: 'Febri'}]
    expect(persons).toContainEqual({name: 'Febri'})
})
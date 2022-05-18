import {
    every,
    length,
    pop,
    push,
    shift,
    some,
    unshift,
    find,
} from './arrays.js';

const noIsArray = 'string';

describe('Given length function', () => {
    describe('When array have 2 elements', () => {
        test('it should show the length of the array -> 2 ', () => {
            // ARRANGE

            const array = ['pepe', 2];
            const expectedResult = 2;
            // ACT

            const result = length(array);

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => length(noIsArray)).toThrow(Error);
        });
    });
});

describe('Given push function', () => {
    describe('When array have 2 elements', () => {
        test('it should show 3 elements', () => {
            // ARRANGE

            const array = ['pepe', 2];
            const element = 'pepa';
            const expectedResult = 3;
            // ACT
            const result = push(array, element);

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => push(noIsArray)).toThrow(Error);
        });
    });
});
describe('Given pop function', () => {
    describe('When array have 3 elements', () => {
        test('it should show the dropped element', () => {
            // ARRANGE

            const array = ['pepe', 2, 12];
            const expectedResult = 12;
            // ACT
            const ejecutar = pop(array);

            // ASSERT

            expect(ejecutar).toBe(expectedResult);
        });
    });

    describe('When array have 3 elements', () => {
        test("should show array's length -> 2 ", () => {
            // ARRANGE

            let array = ['pepe', 2, 12];
            const expectedResult = 2;
            // ACT
            const ejecutar = pop(array);
            const result = array.length;

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => push(noIsArray)).toThrow(Error);
        });
    });
});

describe('Given shift function', () => {
    describe('When array have 3 elements', () => {
        test("should show array's length -> 4", () => {
            // ARRANGE

            let array = ['pepe', 2, 12];
            const expectedResult = 4;
            // ACT
            const result = shift(array, 'nuevo elemento');
            // const result = array.length;

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => push(noIsArray)).toThrow(Error);
        });
    });
});

describe('Given unshift function', () => {
    describe('When array have 3 elements', () => {
        test('it should show the new array length', () => {
            // ARRANGE

            const array = ['pepe', 2, 12];
            const expectedResult = 2;
            // ACT
            const result = unshift(array);

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => push(noIsArray)).toThrow(Error);
        });
    });
    describe('When function is given', () => {
        test('it should return true ', () => {
            // ARRANGE
            const array = [3, 2, 3, 4];
            function mayor(elem) {
                return elem > 10;
            }

            const result = some(array, mayor);
            // ACT

            // ASSERT
            expect(result).toBe(false);
        });
    });

    describe('When function is given', () => {
        test('it should return error ', () => {
            // ARRANGE
            const array = [12, 22, 33, 44];
            function mayor(elem) {
                return elem > 10;
            }

            const result = every(array, mayor);
            // ACT

            // ASSERT
            expect(result).toBe(true);
        });
    });

    describe('When function find element', () => {
        test('it should return true ', () => {
            // ARRANGE
            const array = [12, 22, 33, 44];
            function mayor(elem) {
                return elem > 20;
            }

            const result = find(array, mayor);

            // ACT

            // ASSERT
            expect(result).toBe(22);
        });
    });
});

const arrayRemoveRepeat = require('../dist/index.min');

test(`数组去重`, () => {
    console.log(arrayRemoveRepeat([1, 1, 2, 1, 3, 3, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 'a', 'a'])); // [1, 2, 3, 4, 5, 6, 7, 8, 'a']
    expect(true).toEqual(true);
});

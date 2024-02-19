import merge from './main';

describe("merge function test", () => {
  it("case1: [3, 6, 9], [1, 5, 7], [8, 6, 4] => [1, 3, 4, 5, 6, 6, 7, 8, 9]", () => {
    const collection1 = [3, 6, 9];
    const collection2 = [1, 5, 7];
    const collection3 = [8, 6, 4];
    const expected = [1, 3, 4, 5, 6, 6, 7, 8, 9];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });

  it("case2: [1, 2, 3], [4, 5, 6], [9, 8, 7] => [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
    const collection1 = [1, 2, 3];
    const collection2 = [4, 5, 6];
    const collection3 = [9, 8, 7];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });

  it("case3: [4, 6, 3, 7], [1, 4, 5, 8], [7, 4] => [1, 3, 4, 4, 4, 5, 6, 7, 7, 8]", () => {
    const collection1 = [3, 4, 6, 7];
    const collection2 = [1, 4, 5, 8];
    const collection3 = [7, 4];
    const expected = [1, 3, 4, 4, 4, 5, 6, 7, 7, 8];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });

  it("case4: [2, 4, 5], [1, 8, 9], [] => [1, 2, 4, 5, 8, 9]", () => {
    const collection1 = [2, 4, 5];
    const collection2 = [1, 8, 9];
    const collection3: number[] = [];
    const expected = [1, 2, 4, 5, 8, 9];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });
  
  it("case5: [], [], [] => []", () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const collection3: number[] = [];
    const expected: number[] = [];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });

  it("case6: [], [4], [2] => [2, 4]", () => {
    const collection1 = [];
    const collection2 = [4];
    const collection3 = [2];
    const expected = [2, 4];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });

  it("case7: [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1] => [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]", () => {
    const collection1 = [1, 1, 1, 1, 1, 1, 1];
    const collection2 = [1, 1, 1, 1, 1];
    const collection3 = [1, 1];
    const expected = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });
});
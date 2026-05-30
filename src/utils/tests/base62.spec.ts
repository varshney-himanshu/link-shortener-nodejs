import { Base62 } from "../base62";

describe("Base62 utility", () => {
  it("should map first lowercase correctly", () => {
    expect(Base62.base62Chars[0]).toBe("a");
  });

  it("should map last lowercase correctly", () => {
    expect(Base62.base62Chars[25]).toBe("z");
  });

  it("should map first uppercase correctly", () => {
    expect(Base62.base62Chars[26]).toBe("A");
  });

  it("should map last uppercase correctly", () => {
    expect(Base62.base62Chars[51]).toBe("Z");
  });

  it("should map first digit correctly", () => {
    expect(Base62.base62Chars[52]).toBe("0");
  });

  it("should map last digit correctly", () => {
    expect(Base62.base62Chars[61]).toBe("9");
  });

  describe("encode", () => {
    it.each([
      [0, "a"],
      [1, "b"],
      [25, "z"],
      [26, "A"],
      [51, "Z"],
      [52, "0"],
      [61, "9"],
      [62, "ba"],
      [63, "bb"],
      [124, "ca"],
    ])("should encode %i to %s", (input, expected) => {
      expect(Base62.encode(input)).toBe(expected);
    });
  });

  describe("decode", () => {
    it.each([
      ["a", 0],
      ["b", 1],
      ["z", 25],
      ["A", 26],
      ["Z", 51],
      ["0", 52],
      ["9", 61],
      ["ba", 62],
      ["bb", 63],
      ["ca", 124],
    ])("should decode %s to %i", (input, expected) => {
      expect(Base62.decode(input)).toBe(expected);
    });
  });
});

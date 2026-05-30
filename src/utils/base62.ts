export class Base62 {
  public static readonly base62Chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  static encode = (num: number): string => {
    let encodedStr: string = "";

    if (num === 0) {
      return Base62.base62Chars[0];
    }

    while (num > 0) {
      const remainder = num % 62;
      num = Math.floor(num / 62);

      const char = Base62.base62Chars[remainder];
      encodedStr = char + encodedStr;
    }

    return encodedStr;
  };

  static decode = (encodedStr: string): number => {
    let num = 0;
    for (let i = 0; i < encodedStr.length; i++) {
      const char = encodedStr[i];
      const index = Base62.base62Chars.indexOf(char);
      num = num * 62 + index;
    }
    return num;
  };
}

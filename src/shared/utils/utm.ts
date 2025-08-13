type UtmKey = `${typeof Utm.prefix}${string}`;
type UTM = Array<[UtmKey, string]>;

export class Utm {
  static readonly prefix = "utm_";
  private static readonly _key = "stroy_utms";

  private static _isUtmPrefixed(val: string): val is UtmKey {
    return val.startsWith(Utm.prefix);
  }

  static setUtm(usp: URLSearchParams) {
    const initParams: UTM = [];
    for (const [key, value] of usp.entries()) {
      if (Utm._isUtmPrefixed(key)) {
        initParams.push([key, value]);
      }
    }

    if (initParams.length > 0) {
      localStorage.setItem(Utm._key, JSON.stringify(initParams));
    }
  }

  static getUtm(): [] {
    const params = localStorage.getItem(Utm._key);
    if (!params) return [];
    return JSON.parse(params);
  }
}

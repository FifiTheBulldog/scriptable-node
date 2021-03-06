const Device = require('./device.js');
const hexRgb = require('hex-rgb');

class Color {
  constructor(hex, alpha) {
    const parsedHex = hexRgb(hex);

    const red = parsedHex.red / 255;

    const green = parsedHex.green / 255;

    const blue = parsedHex.blue / 255;

    // RGB to hex:
    // https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/ConvertRGBtoHTMLColor.html

    let r = parseInt(red, 10).toString(16).slice(-2);
    if (r.length == 1) r = "0" + r;

    let g = parseInt(green, 10).toString(16).slice(-2);
    if (g.length == 1) g = "0" + g;

    let b = parseInt(blue, 10).toString(16).slice(-2);
    if (b.length == 1) b = "0" + b;

    Object.defineProperties(this, "hex", {
      hex: {
        enumerable: true,
        value: (r + g + b).toUpperCase()
      },
      red: {
        value: parsedHex.red / 255,
        enumerable: true
      },
      green: {
        enumerable: true,
        value: parsedHex.green / 255
      },
      blue: {
        enumerable: true, 
        value: parsedHex.blue / 255
      },
      alpha: {
        enumerable: true,
        value: (alpha == undefined) ? parsedHex.alpha : alpha
      }
    });
  }

  static black() {
    return new this("000000", 1);
  }

  static darkGray() {
    return new this("555555", 1);
  }

  static lightGray() {
    return new this("AAAAAA", 1);
  }

  static white() {
    return new this("FFFFFF", 1);
  }

  static gray() {
    return new this("808080", 1);
  }

  static red() {
    return new this("FF0000", 1);
  }

  static green() {
    return new this("00FF00", 1);
  }

  static blue() {
    return new this("0000FF", 1);
  }

  static cyan() {
    return new this("00FFFF", 1);
  }

  static yellow() {
    return new this("FFFF00", 1);
  }

  static magenta() {
    return new this("FF00FF", 1);
  }

  static orange() {
    return new this("FF8000", 1);
  }

  static purple() {
    return new this("800080", 1);
  }

  static brown() {
    return new this("996633", 1);
  }

  static clear() {
    return new this("000000", 0);
  }

  static dynamic(lightColor, darkColor) {
    if (Device.isUsingDarkAppearance()) {
      return darkColor;
    } else {
      return lightColor;
    }
  }
}
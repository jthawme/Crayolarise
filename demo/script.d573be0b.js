// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/hex-rgb/index.js":[function(require,module,exports) {
'use strict';

var hexCharacters = 'a-f\\d';
var match3or4Hex = "#?[".concat(hexCharacters, "]{3}[").concat(hexCharacters, "]?");
var match6or8Hex = "#?[".concat(hexCharacters, "]{6}([").concat(hexCharacters, "]{2})?");
var nonHexChars = new RegExp("[^#".concat(hexCharacters, "]"), 'gi');
var validHexSize = new RegExp("^".concat(match3or4Hex, "$|^").concat(match6or8Hex, "$"), 'i');

module.exports = function (hex) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof hex !== 'string' || nonHexChars.test(hex) || !validHexSize.test(hex)) {
    throw new TypeError('Expected a valid hex string');
  }

  hex = hex.replace(/^#/, '');
  var alpha = 1;

  if (hex.length === 8) {
    alpha = parseInt(hex.slice(6, 8), 16) / 255;
    hex = hex.slice(0, 6);
  }

  if (hex.length === 4) {
    alpha = parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
    hex = hex.slice(0, 3);
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  var num = parseInt(hex, 16);
  var red = num >> 16;
  var green = num >> 8 & 255;
  var blue = num & 255;
  return options.format === 'array' ? [red, green, blue, alpha] : {
    red: red,
    green: green,
    blue: blue,
    alpha: alpha
  };
};
},{}],"../node_modules/crayola-colors/index.js":[function(require,module,exports) {
module.exports = {
    "Red": "EE204D",
    "Maroon": "C32148",
    "Scarlet": "FC2847",
    "Brick Red": "C62D42",
    "English Vermilion": "CC474B",
    "Madder Lake": "CC3336",
    "Permanent Geranium Lake": "E12C2C",
    "Maximum Red": "D92121",
    "Indian Red": "B94E48",
    "Orange-Red": "FF5349",
    "Sunset Orange": "FE4C40",
    "Bittersweet": "FE6F5E",
    "Dark Venetian Red": "B33B24",
    "Venetian Red": "CC553D",
    "Light Venetian Red": "E6735C",
    "Vivid Tangerine": "FF9980",
    "Middle Red": "E58E73",
    "Burnt Orange": "FF7F49",
    "Red-Orange": "FF681F",
    "Orange": "FF7538",
    "Macaroni and Cheese": "FFB97B",
    "Middle Yellow Red": "ECAC76",
    "Mango Tango": "E77200",
    "Yellow-Orange": "FFAE42",
    "Maximum Yellow Red": "F2BA49",
    "Banana Mania": "FBE7B2",
    "Maize": "F2C649",
    "Orange-Yellow": "F8D568",
    "Goldenrod": "FCD667",
    "Dandelion": "FDDB6D",
    "Yellow": "FCE883",
    "Green-Yellow": "F1E788",
    "Middle Yellow": "FFEB00",
    "Olive Green": "B5B35C",
    "Spring Green": "ECEBBD",
    "Maximum Yellow": "FAFA37",
    "Canary": "FFFF99",
    "Lemon Yellow": "FFFF9F",
    "Maximum Green Yellow": "D9E650",
    "Middle Green Yellow": "ACBF60",
    "Inchworm": "AFE313",
    "Light Chrome Green": "BEE64B",
    "Yellow-Green": "C5E17A",
    "Maximum Green": "5E8C31",
    "Asparagus": "7BA05B",
    "Granny Smith Apple": "9DE093",
    "Fern": "63B76C",
    "Middle Green": "4D8C57",
    "Green": "1CAC78",
    "Medium Chrome Green": "6CA67C",
    "Forest Green": "5FA777",
    "Sea Green": "93DFB8",
    "Shamrock": "33CC99",
    "Mountain Meadow": "1AB385",
    "Jungle Green": "29AB87",
    "Caribbean Green": "6ADA8E",
    "Tropical Rain Forest": "00755E",
    "Middle Blue Green": "8DD9CC",
    "Pine Green": "01786F",
    "Maximum Blue Green": "30BFBF",
    "Robin's Egg Blue": "00CCCC",
    "Teal Blue": "008080",
    "Light Blue": "8FD8D8",
    "Aquamarine": "95E0E8",
    "Turquoise Blue": "6CDAE7",
    "Outer Space": "2D383A",
    "Sky Blue": "76D7EA",
    "Middle Blue": "7ED4E6",
    "Blue-Green": "0095B7",
    "Pacific Blue": "009DC4",
    "Cerulean": "1DACD6",
    "Maximum Blue": "47ABCC",
    "Blue (I)": "2EB4E6",
    "Cerulean Blue": "339ACC",
    "Cornflower": "93CCEA",
    "Green-Blue": "2887C8",
    "Midnight Blue": "00468C",
    "Navy Blue": "0066CC",
    "Denim": "1560BD",
    "Blue (III)": "0066FF",
    "Cadet Blue": "A9B2C3",
    "Periwinkle": "C3CDE6",
    "Blue (II)": "4570E6",
    "Wild Blue Yonder": "7A89B8",
    "Indigo": "5D76CB",
    "Manatee": "8D90A1",
    "Cobalt Blue": "8C90C8",
    "Celestial Blue": "7070CC",
    "Blue Bell": "9999CC",
    "Maximum Blue Purple": "ACACE6",
    "Violet-Blue": "766EC8",
    "Blue-Violet": "6456B7",
    "Ultramarine Blue": "3F26BF",
    "Middle Blue Purple": "8B72BE",
    "Purple Heart": "652DC1",
    "Royal Purple": "6B3FA0",
    "Violet (II)": "8359A3",
    "Medium Violet": "8F47B3",
    "Wisteria": "C9A0DC",
    "Lavender (I)": "BF8FCC",
    "Vivid Violet": "803790",
    "Maximum Purple": "733380",
    "Purple Mountains' Majesty": "D6AEDD",
    "Fuchsia": "C154C1",
    "Pink Flamingo": "FC74FD",
    "Violet (I)": "732E6C",
    "Brilliant Rose": "E667CE",
    "Orchid": "7B4259",
    "Plum": "8E3179",
    "Medium Rose": "D96CBE",
    "Thistle": "EBB0D7",
    "Mulberry": "C8509B",
    "Red-Violet": "BB3385",
    "Middle Purple": "D982B5",
    "Maximum Red Purple": "A63A79",
    "Jazzberry Jam": "A50B5E",
    "Eggplant": "614051",
    "Magenta": "EB58DD",
    "Cerise": "DA3287",
    "Wild Strawberry": "FF3399",
    "Lavender (II)": "FBAED2",
    "Cotton Candy": "FFB7D5",
    "Carnation Pink": "FFAACC",
    "Violet-Red": "F7468A",
    "Razzmatazz": "E30B5C",
    "Pig Pink": "FDD7E4",
    "Carmine": "E62E6B",
    "Blush": "DB5079",
    "Tickle Me Pink": "FC80A5",
    "Mauvelous": "F091A9",
    "Salmon": "F1444A",
    "Middle Red Purple": "A55353",
    "Mahogany": "CD4A4C",
    "Melon": "FEBAAD",
    "Pink Sherbert": "F7A38E",
    "Burnt Sienna": "EA7E5D",
    "Brown": "B4674D",
    "Sepia": "A5694F",
    "Fuzzy Wuzzy": "87421F",
    "Beaver": "926F5B",
    "Tumbleweed": "DEA681",
    "Raw Sienna": "D27D46",
    "Van Dyke Brown": "664228",
    "Tan": "FAA76C",
    "Desert Sand": "EDC9AF",
    "Peach": "FFD0B9",
    "Burnt Umber": "805533",
    "Apricot": "FDD9B5",
    "Almond": "EED9C4",
    "Raw Umber": "665233",
    "Shadow": "837050",
    "Raw Sienna (I)": "E6BC5C",
    "Timberwolf": "D9D6CF",
    "Gold (I)": "92926E",
    "Gold (II)": "E6BE8A",
    "Silver": "C9C0BB",
    "Copper": "DA8A67",
    "Antique Brass": "C88A65",
    "Black": "000000",
    "Charcoal Gray": "736A62",
    "Gray": "95918C",
    "Blue-Gray": "C8C8CD",
    "White": "FFFFFF",
    "Radical Red": "FF355E",
    "Wild Watermelon": "FD5B78",
    "Outrageous Orange": "FF6037",
    "Atomic Tangerine": "FF9966",
    "Neon Carrot": "FF9933",
    "Sunglow": "FFCC33",
    "Laser Lemon": "FFFF66",
    "Unmellow Yellow": "FFFF66",
    "Electric Lime": "CCFF00",
    "Screamin' Green": "66FF66",
    "Magic Mint": "AAF0D1",
    "Blizzard Blue": "50BFE6",
    "Shocking Pink": "FF6EFF",
    "Razzle Dazzle Rose": "EE34D2",
    "Hot Magenta": "FF00CC",
    "Purple Pizzazz": "FF00CC",
    "Aztec Gold": "C39953",
    "Burnished Brown": "A17A74",
    "Cerulean Frost": "6D9BC3",
    "Cinnamon Satin": "CD607E",
    "Snowy Powder": "C45768",
    "Copper Penny": "AD6F69",
    "Cosmic Cobalt": "2E2D88",
    "Glossy Grape": "AB92B3",
    "Granite Gray": "676767",
    "Green Sheen": "6EAEA1",
    "Lilac Luster": "AE98AA",
    "Misty Moss": "BBB477",
    "Mystic Maroon": "AD4379",
    "Pearly Purple": "B768A2",
    "Pewter Blue": "8BA8B7",
    "Polished Pine": "5DA493",
    "Quick Silver": "A6A6A6",
    "Rose Dust": "9E5E6F",
    "Rusty Red": "DA2C43",
    "Shadow Blue": "778BA5",
    "Shiny Shamrock": "5FA778",
    "Steel Teal": "5F8A8B",
    "Sugar Plum": "914E75",
    "Twilight Lavender": "8A496B",
    "Wintergreen Dream": "56887D",
    "Baby Powder": "FEFEFA",
    "Banana": "FFD12A",
    "Blueberry": "4F86F7",
    "Bubble Gum": "FFD3F8",
    "Cedar Chest": "C95A49",
    "Cherry": "DA2647",
    "Chocolate": "BD8260",
    "Coconut": "FEFEFE",
    "Daffodil": "FFFF31",
    "Dirt": "9B7653",
    "Eucalyptus": "44D7A8",
    "Fresh Air": "A6E7FF",
    "Grape": "6F2DA8",
    "Jelly Bean": "DA614E",
    "Leather Jacket": "253529",
    "Lemon": "FFFF38",
    "Licorice": "1A1110",
    "Lilac": "DB91EF",
    "Lime": "B2F302",
    "Lumber": "FFE4CD",
    "New Car": "214FC6",
    "Pine": "45A27D",
    "Rose": "F03865",
    "Shampoo": "FFCFF1",
    "Smoke": "738276",
    "Soap": "CEC8EF",
    "Strawberry": "FC5A8D",
    "Tulip": "FF878D",
    "Amethyst": "64609A",
    "Citrine": "933709",
    "Emerald": "14A989",
    "Jade": "469A84",
    "Jasper": "D05340",
    "Lapis Lazuli": "436CB9",
    "Malachite": "469496",
    "Moonstone": "3AA8C1",
    "Onyx": "353839",
    "Peridot": "ABAD48",
    "Pink Pearl": "B07080",
    "Rose Quartz": "BD559C",
    "Ruby": "AA4069",
    "Sapphire": "2D5DA1",
    "Smokey Topaz": "832A0D",
    "Tiger's Eye": "B56917",
    "Blue": "1F75FE",
    "Violet": "963D7F",
    "Pink": "FF8ABA",
    "Color changer": "FFE9D1",
    "Aqua": "5FBED7",
    "Black Coral": "54626F",
    "Cultured": "F5F5F5",
    "Key Lime": "E8F48C",
    "Mandarin": "F37A48",
    "Midnight": "702670",
    "Mystic": "D65282",
    "Ocean Blue": "4F42B5",
    "Ocean Green": "48BF91",
    "Sunny": "F2F27A",
    "Sunset": "F1CC79",
    "Turquoise": "3BBCD0",
    "Alloy Orange": "C46210",
    "B'dazzled Blue": "2E5894",
    "Big Dip O' Ruby": "9C2542",
    "Bittersweet Shimmer": "BF4F51",
    "Blast Off Bronze": "A57164",
    "Cyber Grape": "58427C",
    "Deep Space Sparkle": "4A646C",
    "Gold Fusion": "85754E",
    "Illuminating Emerald": "319177",
    "Metallic Seaweed": "0A7E8C",
    "Metallic Sunburst": "9C7C38",
    "Razzmic Berry": "8D4E85",
    "Sheen Green": "8FD400",
    "Shimmering Blush": "D98695",
    "Sonic Silver": "757575",
    "Steel Blue": "0081AB",
    "Alien Armpit": "84DE02",
    "Big Foot Feet": "E88E5A",
    "Booger Buster": "DDE26A",
    "Dingy Dungeon": "C53151",
    "Gargoyle Gas": "FFDF46",
    "Giant's Club": "B05C52",
    "Magic Potion": "FF4466",
    "Mummy's Tomb": "828E84",
    "Ogre Odor": "FD5240",
    "Pixie Powder": "391285",
    "Princess Perfume": "FF85CF",
    "Sasquatch Socks": "FF4681",
    "Sea Serpent": "4BC7CF",
    "Smashed Pumpkin": "FF6D3A",
    "Sunburnt Cyclops": "FF404C",
    "Winter Wizard": "A0E6FF",
    "Sizzling Red": "FF3855",
    "Red Salsa": "FD3A4A",
    "Tart Orange": "FB4D46",
    "Orange Soda": "FA5B3D",
    "Bright Yellow": "FFAA1D",
    "Yellow Sunshine": "FFF700",
    "Slimy Green": "299617",
    "Green Lizard": "A7F432",
    "Denim Blue": "2243B6",
    "Blue Jeans": "5DADEC",
    "Plump Purple": "5946B2",
    "Purple Plum": "9C51B6",
    "Sweet Brown": "A83731",
    "Brown Sugar": "AF6E4D",
    "Eerie Black": "1B1B1B",
    "Black Shadows": "BFAFB2",
    "Blue Green": "0D98BA",
    "Blue Violet": "7366BD",
    "Green Yellow": "F0E891",
    "Red Orange": "FF5349",
    "Red Violet": "C0448F",
    "Violet (Purple)": "926EAE",
    "Violet Red": "F75394",
    "Yellow Green": "C5E384",
    "Yellow Orange": "FFAE42",
    "Amazon Forest": "92F646",
    "Caribbean Current": "5D8DDF",
    "Florida Sunrise": "FFB329",
    "Grand Canyon": "6D3834",
    "Maui Sunset": "8E599F",
    "Milky Way": "070707",
    "Sahara Desert": "F5CBBD",
    "Yosemite Campfire": "ED4C44",
    "Fiery Rose": "FF5470",
    "Sizzling Sunrise": "FFDB00",
    "Heat Wave": "FF7A00",
    "Lemon Glacier": "FDFF00",
    "Spring Frost": "87FF2A",
    "Absolute Zero": "0048BA",
    "Winter Sky": "FF007C",
    "Frostbite": "E936A7"
};
},{}],"../packs.js":[function(require,module,exports) {
var Crayola = require('crayola-colors'); // Place to bootstrap new colours


Crayola["Bluetiful"] = "3F6DE4";
var PACKS = {
  "52-3024": [Crayola["Brown"], Crayola["Violet Red"], Crayola["Red"], Crayola["Scarlet"], Crayola["Red Orange"], Crayola["Orange"], Crayola["Yellow Orange"], Crayola["Apricot"], Crayola["Yellow"], Crayola["Green Yellow"], Crayola["Yellow Green"], Crayola["Green"], Crayola["Blue Green"], Crayola["Cerulean"], Crayola["Blue"], Crayola["Indigo"], Crayola["Bluetiful"], Crayola["Blue Violet"], Crayola["Violet (Purple)"], Crayola["Red Violet"], Crayola["Carnation Pink"], Crayola["White"], Crayola["Gray"], Crayola["Black"]]
};
module.exports = PACKS;
},{"crayola-colors":"../node_modules/crayola-colors/index.js"}],"../index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hexRgb = _interopRequireDefault(require("hex-rgb"));

var _packs = _interopRequireDefault(require("./packs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT = "52-3024";

function Color(_r, _g, _b, _a) {
  var r = _r;
  var g = _g;
  var b = _b;
  var a = _a;
  return {
    r: r,
    g: g,
    b: b,
    a: a,
    toString: function toString() {
      return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
    }
  };
}

var Crayolarise =
/*#__PURE__*/
function () {
  function Crayolarise() {
    _classCallCheck(this, Crayolarise);

    this.setPack(DEFAULT);
  }

  _createClass(Crayolarise, [{
    key: "setPack",
    value: function setPack(pack) {
      if (!(pack in _packs.default)) {
        throw new Error('Sorry that pack doesnt exist. Submit a PR to add it!');
      }

      this._pack = pack;
      this._colors = Crayolarise.convertPack(_packs.default[this._pack]);
    }
  }, {
    key: "_process",
    value: function _process(realCanvas) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var draw = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      var width = realCanvas.width / scale;
      var height = realCanvas.height / scale;
      var canvas = new OffscreenCanvas(width, height);
      var ctx = canvas.getContext('2d');
      ctx.drawImage(realCanvas, 0, 0, width, height);
      var id = ctx.getImageData(0, 0, width, height);
      realCanvas.getContext('2d').clearRect(0, 0, realCanvas.width, realCanvas.height);

      for (var x = 0; x < Math.floor(width); x++) {
        for (var y = 0; y < Math.floor(height); y++) {
          var i = this._getIndex(x, y, width);

          var c = Color(id.data[i + 0], id.data[i + 1], id.data[i + 2], id.data[i + 3]);
          var newColorIndex = this.match(c);
          draw(newColorIndex, x, y); // break;
        } // break;

      }
    }
  }, {
    key: "convert",
    value: function convert(realCanvas) {
      var _this = this;

      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var rCtx = realCanvas.getContext('2d');

      this._process(realCanvas, scale, function (newC, x, y) {
        rCtx.fillStyle = _this._colors[newC].rgb.toString();
        rCtx.fillRect(x * scale, y * scale, scale, scale);
      });
    }
  }, {
    key: "print",
    value: function print(realCanvas) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var ctx = realCanvas.getContext('2d');
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';

      this._process(realCanvas, scale, function (newC, x, y) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.rect(x * scale, y * scale, scale, scale);
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.fillText(newC, x * scale + scale / 2, y * scale + scale / 2);
      });
    }
  }, {
    key: "match",
    value: function match(comp) {
      var closest = 99;
      var closestIndex = -1;

      this._colors.forEach(function (c, index) {
        var distance = [Math.abs(comp.r - c.rgb.r) / 255, Math.abs(comp.g - c.rgb.g) / 255, Math.abs(comp.b - c.rgb.b) / 255];
        var check = distance.reduce(function (prev, curr) {
          return prev + curr;
        }, 0) / distance.length;

        if (check < closest) {
          closest = check;
          closestIndex = index;
        }
      });

      return closestIndex;
    }
  }, {
    key: "_getIndex",
    value: function _getIndex(x, y, width) {
      return x * 4 % (width * 4) + y * 4 * width;
    }
  }, {
    key: "_getPos",
    value: function _getPos(idx, width) {
      return {
        x: Math.floor(idx / 4) % width,
        y: Math.floor(Math.floor(idx / 4) / width)
      };
    }
  }], [{
    key: "convertPack",
    value: function convertPack(pack) {
      var packKeys = Object.keys(pack);
      return pack.map(function (color, index) {
        var rgb = (0, _hexRgb.default)(color);
        return {
          name: packKeys[index],
          hex: color,
          rgb: Color(rgb.red, rgb.green, rgb.blue, rgb.alpha)
        };
      });
    }
  }, {
    key: "list",
    value: function list() {
      return _packs.default;
    }
  }]);

  return Crayolarise;
}();

var _default = new Crayolarise();

exports.default = _default;
},{"hex-rgb":"../node_modules/hex-rgb/index.js","./packs":"../packs.js"}],"images/test.jpg":[function(require,module,exports) {
module.exports = "/test.c211eec2.jpg";
},{}],"images/test1.jpg":[function(require,module,exports) {
module.exports = "/test1.98a20ab2.jpg";
},{}],"images/test2.jpg":[function(require,module,exports) {
module.exports = "/test2.b2ed19ae.jpg";
},{}],"images/test3.jpg":[function(require,module,exports) {
module.exports = "/test3.3da020cb.jpg";
},{}],"images/test4.jpg":[function(require,module,exports) {
module.exports = "/test4.e5614c92.jpg";
},{}],"js/script.js":[function(require,module,exports) {
"use strict";

var _index = _interopRequireDefault(require("../../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var images = [require('../images/test.jpg'), require('../images/test1.jpg'), require('../images/test2.jpg'), require('../images/test3.jpg'), require('../images/test4.jpg')];
var imageIndex = 0;
var media = {
  el: null,
  width: 0,
  height: 0
};
var tileScale = 10;
var print = false;

function loadImage(src) {
  return new Promise(function (resolve, reject) {
    var img = new Image();

    img.onload = function () {
      resolve(img);
    };

    img.src = src;
  });
}

function draw() {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var printMod = print ? 4 : 1;
  var width = 500 * printMod;
  var height = width / media.width * media.height;
  canvas.style.width = "".concat(width / printMod, "px");
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(media.el, 0, 0, width, height);

  if (print) {
    _index.default.print(canvas, tileScale * printMod);
  } else {
    _index.default.convert(canvas, tileScale);
  }

  if (!print) {
    requestAnimationFrame(function () {
      draw();
    });
  }
}

function getWebcam() {
  var video = document.querySelector('video');
  video.style.display = 'block';
  var img = document.querySelector('img');
  img.style.display = 'none';
  return new Promise(function (resolve, reject) {
    navigator.mediaDevices.getUserMedia({
      video: true
    }).then(function (stream) {
      video.srcObject = stream;
      video.addEventListener('canplay', function (e) {
        media.el = video;
        media.width = e.target.videoWidth;
        media.height = e.target.videoHeight;
        media.stream = stream;
        resolve();
      });
    });
  });
}

function doWebcam() {
  getWebcam().then(function () {
    draw();
  });
}

function doImage() {
  var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var video = document.querySelector('video');
  video.style.display = 'none';
  var img = document.querySelector('img');
  img.style.display = 'block';
  img.src = images[imageIndex];

  if (media.stream) {
    media.stream.getTracks().forEach(function (t) {
      return t.stop();
    });
  }

  loadImage(images[imageIndex]).then(function (img) {
    imageIndex++;

    if (imageIndex >= images.length) {
      imageIndex = 0;
    }

    media.el = img;
    media.width = img.width;
    media.height = img.height;

    if (force || print) {
      draw();
    }
  });
}

doImage(true);
document.querySelector('#webcam').addEventListener('click', function (e) {
  doWebcam();
});
document.querySelector('#image').addEventListener('click', function (e) {
  doImage();
});
document.querySelector('#size').addEventListener('change', function (e) {
  tileScale = parseInt(e.target.value);
  draw();
});
document.querySelector('#print').addEventListener('change', function (e) {
  print = !!e.target.checked;
  draw();
});
},{"../../index":"../index.js","../images/test.jpg":"images/test.jpg","../images/test1.jpg":"images/test1.jpg","../images/test2.jpg":"images/test2.jpg","../images/test3.jpg":"images/test3.jpg","../images/test4.jpg":"images/test4.jpg"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57237" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map
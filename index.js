import hexRgb from 'hex-rgb';

import PACKS from './packs';
const DEFAULT = "52-3024";

function Color(_r, _g, _b, _a) {
    let r = _r;
    let g = _g;
    let b = _b;
    let a = _a;

    return {
        r, g, b, a,
        toString: () => `rgba(${ r }, ${ g }, ${ b }, ${ a })`
    };
}

class Crayolarise {
    constructor() {
        this.setPack(DEFAULT);
    }

    setPack(pack) {
        if (!(pack in PACKS)) {
            throw new Error('Sorry that pack doesnt exist. Submit a PR to add it!');
        }

        this._pack = pack;
        this._colors = Crayolarise.convertPack(PACKS[this._pack]);
    }

    _process(realCanvas, scale = 1, draw = () => {}) {

        const width = realCanvas.width / scale;
        const height = realCanvas.height / scale;

        const canvas = new OffscreenCanvas(width, height);
        const ctx = canvas.getContext('2d');

        ctx.drawImage(realCanvas, 0, 0, width, height);

        const id = ctx.getImageData(0, 0, width, height);
        realCanvas.getContext('2d').clearRect(0, 0, realCanvas.width, realCanvas.height);

        for (let x = 0; x < Math.floor(width); x++) {
            for (let y = 0; y < Math.floor(height); y++) {
                let i = this._getIndex(x, y, width);

                const c = Color(
                    id.data[i + 0],
                    id.data[i + 1],
                    id.data[i + 2],
                    id.data[i + 3],
                );
    
                const newColorIndex = this.match(c);

                draw(newColorIndex, x, y);

                // break;
            }
            // break;
        }
    }

    convert(realCanvas, scale = 1) {
        const rCtx = realCanvas.getContext('2d');

        this._process(realCanvas, scale, (newC, x, y) => {
            rCtx.fillStyle = this._colors[newC].rgb.toString();
            rCtx.fillRect(x * scale, y * scale, scale, scale);
        });
    }

    print(realCanvas, scale = 1) {
        const ctx = realCanvas.getContext('2d');

        ctx.font = '10px monospace';
        ctx.textAlign = 'center';

        this._process(realCanvas, scale, (newC, x, y) => {
            ctx.strokeStyle = 'black';
            ctx.fillStyle = 'white';

            ctx.beginPath();
            ctx.rect(x * scale, y * scale, scale, scale);
            ctx.stroke();
            ctx.fill();
            
            ctx.fillStyle = 'black';
            ctx.fillText(newC, (x * scale) + (scale / 2), (y * scale) + ( scale / 2));
        });
    }
    
    match(comp) {
        let closest = 99;
        let closestIndex = -1;

        this._colors.forEach((c, index) => {
            const distance = [
                Math.abs(comp.r - c.rgb.r) / 255,
                Math.abs(comp.g - c.rgb.g) / 255,
                Math.abs(comp.b - c.rgb.b) / 255,
            ];

            let check = distance.reduce((prev, curr) => (prev + curr), 0) / distance.length;
            
            if (check < closest) {
                closest = check;
                closestIndex = index;
            }
        });

        return closestIndex;
    }

    _getIndex(x, y, width) {
        return ((x * 4) % (width * 4)) + ((y * 4) * width);
    }

    _getPos(idx, width) {
        return {
            x: Math.floor(idx / 4) % width,
            y: Math.floor(Math.floor(idx / 4) / width),
        }
    }

    static convertPack(pack) {
        const packKeys = Object.keys(pack);

        return pack.map((color, index) => {
            const rgb = hexRgb(color);

            return {
                name: packKeys[index],
                hex: color,
                rgb: Color(rgb.red, rgb.green, rgb.blue, rgb.alpha)
            };
        });
    }

    static list() {
        return PACKS;
    }
    
}

export default new Crayolarise();
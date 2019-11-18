import Crayolarise from '../../index';

const images = [
    require('../images/test.jpg'),
    require('../images/test1.jpg'),
    require('../images/test2.jpg'),
    require('../images/test3.jpg'),
    require('../images/test4.jpg'),
];
let imageIndex = 0;

const media = { el: null, width: 0, height: 0 };

let tileScale = 10;
let print = false;

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve(img);
        };
        img.src = src;
    });
}

function draw() {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    const printMod = (print ? 4 : 1);
    const width = 500 * printMod;
    const height = (width / media.width) * media.height;

    canvas.style.width = `${width / printMod}px`;

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(media.el, 0, 0, width, height);

    if (print) {
        Crayolarise.print(canvas, tileScale * printMod);
    } else {
        Crayolarise.convert(canvas, tileScale);
    }

    if (!print) {
        requestAnimationFrame(() => {
            draw();
        });
    }
}

function getWebcam() {
    const video = document.querySelector('video');
    video.style.display = 'block';
    const img = document.querySelector('img');
    img.style.display = 'none';

    return new Promise((resolve, reject) => {
        navigator.mediaDevices.getUserMedia({
            video: true
        })
            .then(stream => {
                video.srcObject = stream;

                video.addEventListener('canplay', e => {
                    media.el = video;
                    media.width = e.target.videoWidth;
                    media.height = e.target.videoHeight;
                    media.stream = stream;

                    resolve();
                })
            })
    });
}

function doWebcam() {
    getWebcam()
        .then(() => {
            draw()
        });
}

function doImage(force = false) {
    const video = document.querySelector('video');
    video.style.display = 'none';

    const img = document.querySelector('img');
    img.style.display = 'block';
    img.src = images[imageIndex];
    
    if (media.stream) {
        media.stream.getTracks().forEach(t => t.stop());
    }

    loadImage(images[imageIndex])
        .then(img => {
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

document.querySelector('#webcam').addEventListener('click', e => {
    doWebcam();
});

document.querySelector('#image').addEventListener('click', e => {
    doImage();
});

document.querySelector('#size').addEventListener('change', e => {
    tileScale = parseInt(e.target.value);
    draw();
});

document.querySelector('#print').addEventListener('change', e => {
    print = !!(e.target.checked);
    draw();
});
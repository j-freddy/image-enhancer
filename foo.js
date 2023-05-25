const YCBCR_MATRIX = [
    [65.738/256, 129.057/256, 25.064/256],
    [-37.945/256, -74.494/256, 112.439/256],
    [112.439, -94.154/256, -18.285/256]
];

const YCBCR_CONST = math.transpose([16, 128, 128]);

const pixels = [168, 139, 106];
const i = 0;


const r = pixels[i];
const g = pixels[i + 1];
const b = pixels[i + 2];

// UG0639: Color Space Conversion User Guide

const ycbcr = math.add(
    YCBCR_CONST,
    math.multiply(YCBCR_MATRIX, math.transpose([r, g, b]))
);

pixels[i] = ycbcr[0];
pixels[i + 1] = ycbcr[1];
pixels[i + 2] = ycbcr[2];

console.log(ycbcr);

const y = pixels[i];
const cb = pixels[i + 1];
const cr = pixels[i + 2];

const rgb = math.multiply(
    math.inv(YCBCR_MATRIX),
    math.subtract(math.transpose([y, cb, cr]), YCBCR_CONST)
);

pixels[i] = rgb[0];
pixels[i + 1] = rgb[1];
pixels[i + 2] = rgb[2];

console.log(rgb);

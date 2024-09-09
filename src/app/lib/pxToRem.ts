export default function pxToRem(px: number, base = 16) {
    return `${px / base}rem`;
}

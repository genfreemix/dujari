const fs = require('fs');
let c = fs.readFileSync('src/i18n/index.tsx', 'utf8');

// 1. Fix fr: split poem2 and poem3 that got concatenated (no newline between them)
c = c.replace(
  '!",    "poetry.poem3": "Les ombres',
  '!",\n    "poetry.poem3": "Les ombres'
);

// 2. Add poem4 fr before the last footer.tagline in fr block
const poem4fr =
  '    "poetry.poem4": "Mourir et ressusciter,\\nDebout\u2026\\nApr\u00e8s-midi \u2014 un petit-d\u00e9jeuner sobre :\\nCaf\u00e9, soja\u2026\\nIl ne m\u2019en faut pas plus.\\nAux fen\u00eatres \u2014 des bouffons,\\nDes masques collants,\\nEt des soupirs, des ah\u2026\\nMourir et ressusciter,\\nEn sachant.\\nLa v\u00e9rit\u00e9 sous le c\u00f4t\u00e9 gauche \u2014\\nReviens \u00e0 la vie, sans rincer\u2026",\n';

const frFooter = '    "footer.tagline": "Objets pop-art';
const lastIdx = c.lastIndexOf(frFooter);
c = c.slice(0, lastIdx) + poem4fr + c.slice(lastIdx);

fs.writeFileSync('src/i18n/index.tsx', c, 'utf8');
console.log('done. poem4 fr added at', lastIdx);

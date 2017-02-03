import opentype from 'opentype.js';
import converter from 'base64-arraybuffer';
const decode = converter.decode;

import NotoSansRegular from './fonts/NotoSans-Regular.ttf.js';
import NotoSansItalic from './fonts/NotoSans-Italic.ttf.js';
import NotoSansBold from './fonts/NotoSans-Bold.ttf.js';
import NotoSansBoldItalic from './fonts/NotoSans-BoldItalic.ttf.js';
import NotoSerifRegular from './fonts/NotoSerif-Regular.ttf.js';
import NotoSerifItalic from './fonts/NotoSerif-Italic.ttf.js';
import NotoSerifBold from './fonts/NotoSerif-Bold.ttf.js';
import NotoSerifBoldItalic from './fonts/NotoSerif-BoldItalic.ttf.js';

function load(base64Font) {
  return opentype.parse(decode(base64Font));
}

const NotoFontPack = {
  NotoSans: {
    regular: load(NotoSansRegular),
    italic: load(NotoSansItalic),
    bold: load(NotoSansBold),
    bolditalic: load(NotoSansBoldItalic),
  },
  NotoSerif: {
    regular: load(NotoSerifRegular),
    italic: load(NotoSerifItalic),
    bold: load(NotoSerifBold),
    bolditalic: load(NotoSerifBoldItalic),
  },
  getFont: function(style) {
    /*
      times, Times, Times New Roman, serif, Serif => Noto Serif
      Arial, sans-serif... default => Noto Sans
    */
    const fontName = /(times|serif)+/i.test(style['font-family']) ?
      'NotoSerif' : 'NotoSans';

    let fontStyle = '';
    if (style['font-weight'] === 'bold') fontStyle = 'bold';
    if (style['font-style'] === 'italic') fontStyle += 'italic';
    if (fontStyle.length === 0) fontStyle = 'regular';

    return this[fontName][fontStyle];
  }
};

export default NotoFontPack;
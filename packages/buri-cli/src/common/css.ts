import { get } from 'lodash';
import { existsSync } from 'fs';
import { join, isAbsolute } from 'path';
import { getBuritConfig } from '../common';
import { STYLE_DIR, SRC_DIR } from './constant';

type CSS_LANG = 'css' | 'less' | 'scss';

function getCssLang(): CSS_LANG {
  const buriConfig = getBuritConfig();
  const preprocessor = get(buriConfig, 'build.css.preprocessor', 'less');

  if (preprocessor === 'sass') {
    return 'scss';
  }

  return preprocessor;
}

export const CSS_LANG = getCssLang();

export function getCssBaseFile() {
  const buriConfig = getBuritConfig();
  let path = join(STYLE_DIR, `base.${CSS_LANG}`);

  const baseFile = get(buriConfig, 'build.css.base', '');
  if (baseFile) {
    path = isAbsolute(baseFile) ? baseFile : join(SRC_DIR, baseFile);
  }

  if (existsSync(path)) {
    return path;
  }

  return null;
}

const IMPORT_STYLE_RE = /import\s+?(?:(?:".*?")|(?:'.*?'))[\s]*?(?:;|$|)/g;

// "import 'a.less';" => "import 'a.css';"
export function replaceCssImport(code: string) {
  return code.replace(IMPORT_STYLE_RE, str =>
    str.replace(`.${CSS_LANG}`, '.css')
  );
}

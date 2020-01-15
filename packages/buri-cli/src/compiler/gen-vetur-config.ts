// @ts-ignore
import markdownVetur from '@buri-ui/markdown-vetur';
import { join } from 'path';
import { get } from 'lodash';
import { SRC_DIR, getBuritConfig, ROOT } from '../common/constant';

// generate vetur tags & attributes
export function genVeturConfig() {
  const buriCongig = getBuritConfig();
  const options = get(buriCongig, 'build.vetur');

  if (options) {
    markdownVetur.parseAndWrite({
      path: SRC_DIR,
      test: /zh-CN\.md/,
      outputDir: join(ROOT, 'vetur'),
      ...options
    });
  }
}

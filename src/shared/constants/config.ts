// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { LocaleValue, LocaleConfig } from '../types';

const SITE_TITLE = '欧雷的破局之路';
const SITE_DESCRIPTION = '在可言说的范围内尽量用简单的语言详细地记述我是如何突破 35 周岁中年失业困境并实现自己理想生活方式的。';

const SITE_URL_MAP = {
  projects: '/projects',
  about: '/about',
};

const I18N_DEFAULT_LOCALE = 'zh';

const I18N_CONFIG: LocaleValue<LocaleConfig> = {
  zh: {
    site: {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
    },
    navs: {
      projects: '项目',
      about: '关于',
    },
  },
};

export {
  SITE_TITLE, SITE_DESCRIPTION, SITE_URL_MAP,
  I18N_DEFAULT_LOCALE, I18N_CONFIG,
};

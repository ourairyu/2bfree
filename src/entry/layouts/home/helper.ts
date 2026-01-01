import type { SupportedLocale, LocaleValue } from '@/types';
import { I18N_CONFIG } from '@/constants/config';

import type { HomeLocale } from './typing';

const locales: LocaleValue<HomeLocale> = {
  zh: {
    heading: I18N_CONFIG.zh.site.title,
    slogan: '在可言说的范围内尽量用简单的语言详细地记述我是如何突破 35 周岁中年失业困境并实现自己理想生活方式的。',
    getStarted: '了解更多',
    highlights: '核心价值',
  },
};

function resolveLocale(locale: SupportedLocale): HomeLocale {
  return locales[locale];
}

export { resolveLocale };

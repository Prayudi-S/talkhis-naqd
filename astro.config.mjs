import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://prayudi-s.github.io',
  base: '/talkhis-naqd',
  integrations: [
    starlight({
      title: 'تلخيص النقد الأدبي',
      defaultLocale: 'root',
      locales: { root: { label: 'العربية', lang: 'ar', dir: 'rtl' } },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'الرئيسية', link: '/' },
        { label: 'دروس النقد الأدبي (١)', items: [{ autogenerate: { directory: 'durus' } }] },
      ],
    }),
  ],
});

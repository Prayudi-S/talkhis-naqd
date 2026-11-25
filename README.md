# تلخيص النقد الأدبي (١)

Website talkhis berbasis Astro Starlight (RTL Arab, mesin pencari Pagefind bawaan).

## Menjalankan
    npm install
    npm run dev     # buka http://localhost:4321

## Menambah pelajaran / muqarrar baru
Tambahkan file .mdx di `src/content/docs/durus/` (lihat contoh yang ada). Sidebar & pencarian otomatis diperbarui.

## Publikasi ke GitHub Pages
1. Push repo ini ke GitHub (branch `main`).
2. Settings → Pages → Source: **GitHub Actions**.
3. Tambahkan di `astro.config.mjs`: `site: 'https://USERNAME.github.io', base: '/NAMA-REPO'`.

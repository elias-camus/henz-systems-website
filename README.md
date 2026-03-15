# henz.systems website

Next.js App Router based corporate website for `henz.systems`.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The root path redirects to `/ja`, and English is available at `/en`.

## Scripts

```bash
npm run dev
npm run lint
npm run build
```

## Structure

- `src/app/(ja)/ja/page.tsx`: Japanese landing page
- `src/app/(en)/en/page.tsx`: English landing page
- `src/components/*`: page sections and shared UI
- `src/i18n/*`: Japanese and English copy

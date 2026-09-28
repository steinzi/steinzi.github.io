# steinzi.com

Personal website for Steinn Örvar Bjarnarson. It presents the full career arc from electronics and production infrastructure to AI automation, business-process improvement, open source, community building, teaching, workshops, writing, and podcasting.

## Local development

```sh
npm install
npm start
```

Run the checks before publishing:

```sh
CI=true npm test -- --watchAll=false
npm run build
```

The site's structured editorial content lives in `src/data/publicWork.js`. The sources, scope, public-work inventory, and editorial decisions behind the career-wide review are recorded in `PUBLIC_WORK_AUDIT.md`.

## Publishing

`npm run deploy` publishes the production build to GitHub Pages. `public/CNAME` preserves the `steinzi.com` custom domain in the generated build.

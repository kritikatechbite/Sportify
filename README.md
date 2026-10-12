# Sportify
Static site (HTML/CSS/vanilla JS). Open index.html or deploy to GitHub Pages / any static host.
## Configure
- `assets/js/main.js` -> `SITE`: `url` (production URL, enables canonical tags), `gaId` (GA4, loads only with consent), `email` (contact), `newsletterEndpoint`, `social`.
- `assets/js/match-details.js` -> `popupLinks` (primary, secondary, close). Empty values never create broken links; buttons fall back to on-page or internal destinations, and the X just closes the popup.
- Replace `{{SITE_URL}}` in sitemap.xml and robots.txt: `sed -i 's#{{SITE_URL}}#https://yourdomain.com#g' sitemap.xml robots.txt`
- Search Console: add your verification meta tag to each page `<head>`.
## Notes
- All scores, schedules, players and news are demonstration data. Replace with licensed data before presenting as real.
- Images are original SVG illustrations; add licensed photography as needed. Lucide loads from a CDN.
- Legal pages are templates, not legal advice.

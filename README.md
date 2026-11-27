# OW4U Customer Hub

The page your thank-you card QR code opens. It's plain HTML with no build step, database or cookies.

## Files

| File | What it is |
|---|---|
| `config.js` | **All your links.** This is the only file you normally edit. |
| `index.html` | The page itself (design, wording, layout). |
| `fonts/` | The Archivo brand font (OFL licence, self-hosted, no Google tracking). |

## Updating your links (no Claude needed)

1. On GitHub, open this repository and click `config.js`.
2. Click the pencil icon (Edit).
3. Paste a full `https://` link between the quotes, e.g.
   `store: "https://www.depop.com/yourname/",`
4. Click **Commit changes**.
5. Wait about a minute and refresh the live page.

- A link left as `""` hides its button, so nothing broken is ever shown.
- The shop section appears automatically once at least one store link is filled in.
- Instagram/TikTok buttons, the email line and the announcement strip work the same way.
- The web address never changes when you edit, so printed QR codes keep working.

## Changing the wording

Open `index.html`, edit, and commit. All customer-facing text is plain English in the HTML.

## If the hub ever moves

Put the new address in `redirect` in `config.js` and keep this repository online.
Every old QR code then forwards straight to the new site.

## Measuring visits (optional)

1. Create a free account at goatcounter.com (no cookies, no consent banner needed).
2. Put your site code in `goatcounter` in `config.js`.
3. Visits and button clicks (`shop-vinted`, `review-ebay`, etc.) then show in your GoatCounter dashboard.
   The QR code links to `?src=card`, so card scans are counted separately from other visits.

## Platform-specific links

Adding `?p=vinted`, `?p=depop` or `?p=ebay` to the address puts that platform's review card first,
tagged "Your order". Use this if you ever print separate cards per platform.

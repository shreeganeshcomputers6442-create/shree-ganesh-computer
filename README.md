# SHREE GANESH COMPUTERS — Website

A lightweight, responsive, single-page website for CCTV surveillance, networking and IT services. Built with HTML5, CSS3 and vanilla JavaScript. Suitable for free static hosting such as GitHub Pages.

## Files
- `index.html` — page content, SEO metadata and structured business details
- `styles.css` — silver-and-white responsive design and CSS illustrations
- `script.js` — mobile menu, enquiry-to-WhatsApp form and dynamic footer year
- `assets/favicon.svg` — simple brand favicon

## Before publishing
1. Review the address, phone numbers and service descriptions in `index.html`.
2. The primary WhatsApp link uses `+91 7040704089` (digits only in the wa.me URL). Verify that this number is registered with WhatsApp. If the other number is the WhatsApp number, replace `917040704089` with `919657830434` in the WhatsApp links and in `script.js`.
3. The gallery currently uses CSS-made placeholders, not photos of real projects. Replace these with your own installation photos if available. Do not imply placeholder illustrations are actual completed projects.
4. Add genuine customer testimonials only after you have permission to publish them. No testimonials are fabricated in this version.
5. Business hours are omitted because they have not been verified.
6. The font stylesheet optionally loads Google Fonts; the site falls back to system fonts if unavailable. For fully offline/self-contained hosting, remove the `@import` line at the top of `styles.css`.

## Publish on GitHub Pages using an Android phone
1. Open Chrome and visit **https://github.com**. Sign in or create a free account.
2. Create a new repository. Name it `shree-ganesh-computers` and set it to **Public**. You can skip adding a README because one is included here.
3. Download and extract `shree-ganesh-computers-website.zip` on your phone using your file manager or an archive app.
4. Open your repository on GitHub in Chrome. Choose **Add file → Upload files**. If needed, use Chrome's menu and select **Desktop site**.
5. Upload `index.html`, `styles.css`, and `script.js` to the repository's root. Also upload the `assets` folder and its `favicon.svg` file. Upload `README.md` if you want the instructions visible in the repository.
6. Commit the uploaded files to the `main` branch.
7. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Set branch to `main` and folder to `/(root)`, then save.
8. Wait a few minutes. GitHub will show your published URL, typically `https://YOUR-USERNAME.github.io/shree-ganesh-computers/`.
9. Open that URL on your phone and test the navigation, phone links and WhatsApp form.

## Notes
- Hosting is free on GitHub Pages for a public repository; a custom domain is optional and may cost money.
- The website does not collect or store enquiry form data. It opens WhatsApp with a pre-filled message.
- Google Maps opens a search for the supplied business address. Confirm the map pin and address before sharing the website widely.
- No paid APIs or JavaScript libraries are used.

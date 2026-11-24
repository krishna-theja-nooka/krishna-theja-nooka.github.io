# Krishna Theja Reddy Nooka — Portfolio Website

A responsive, static portfolio for **krishna-theja-nooka.github.io**. Built with HTML, CSS, and vanilla JavaScript. No build system, npm dependencies, paid hosting, or API keys are required.

## Preview locally

Open `index.html` in a browser, or run from this directory:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Publish to GitHub Pages

1. Sign in to https://github.com/krishna-theja-nooka.
2. Create a **Public** repository named **`krishna-theja-nooka.github.io`** (the exact spelling matters).
3. Upload the **contents of this folder**, including `index.html`, `styles.css`, `script.js`, `favicon.svg`, and `.nojekyll` into the root of the new repo. Do not upload the ZIP as a single file.
4. Commit to the `main` branch.
5. Go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, branch **main**, folder **/(root)**, then Save.
6. Visit **https://krishna-theja-nooka.github.io/** after GitHub finishes publishing.
7. Add that URL to your GitHub profile (Edit profile → Website), LinkedIn, and resume.

## Optional: publish with Git

```bash
git init
git add .
git commit -m "Launch AI engineering portfolio"
git branch -M main
git remote add origin https://github.com/krishna-theja-nooka/krishna-theja-nooka.github.io.git
git push -u origin main
```

Create the empty GitHub repository before running these commands. You will need GitHub authentication to push.

## Personalization checklist

- [ ] Confirm the preferred public email address. **The uploaded resumes disagree**; this site currently uses `nookareddy.6@gmail.com` from the November 2026 master resume.
- [ ] Confirm LinkedIn URL; the site uses the specific link from the master resume.
- [ ] Review experience dates and title wording against your official work history before publishing.
- [ ] Optionally add a headshot and downloadable public-facing resume. Neither is included by default to avoid publishing extra personal information.
- [ ] Add verified project screenshots or public demos later. The current visuals are original, CSS-based illustrations rather than actual product screenshots.
- [ ] If you buy a custom domain, configure it in GitHub Pages settings and set DNS with your registrar.

## Constraints

- GitHub Pages only hosts the frontend. FastAPI, Llama/Ollama, and other Python backends in the linked repositories **are not deployed** by this website. Code links point to GitHub; no live demo is implied.
- All portfolio project descriptions were derived from the supplied resumes and the linked public GitHub profile/repositories. Review them before publishing.


## Version 2 updates (November 2026)

- Direct public contact links for email and phone (mailto: and tel:).
- Interactive 1 → N / N → 1 system architecture explorer with keyboard-accessible controls.
- Expanded six-category skills section: AI & multi-agent systems, ML/deep learning, backend, frontend, cloud, and data.
- Enhanced hover and focus states, respects reduced-motion preferences.
- Update GitHub Pages by uploading all six files into the repository root and committing to `main`.

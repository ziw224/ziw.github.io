<h1 align="center">
  <br>
  <a href="https://ziw224.github.io/ziw.github.io/">
  <img src="./src/assets/light-logo.svg" alt="Zihan Wang" width="200"></a>
  <br>
  Zihan Wang's Personal Website
  <br>
</h1>

<h4 align="center">A simple personal website about <a href="https://ziw224.github.io/ziw.github.io/" target="_blank">Zihan Wang</a>.</h4>

<br>

![screenshot](https://github.com/ziw224/ziw.github.io/raw/master/src/assets/screenshot.png)

## Tech Stack

This portfolio is built with:

- **React** ^18.2.0 - JavaScript library for building user interfaces
- **Framer Motion** ^6.5.1 - Animation library for React
- **React Icons** ^4.12.0 - Popular icon library
- **Swiper** ^8.3.1 - Modern mobile touch slider
- **EmailJS** ^3.6.2 - Send emails directly from JavaScript
- **React Toastify** ^9.0.7 - Notification library
- **Axios** ^0.27.2 - HTTP client
- **Create React App** 5.0.1 - React development environment

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) with [Yarn](https://yarnpkg.com/). From your command line:

```bash
# Clone this repository
$ git clone https://github.com/ziw224/ziw.github.io

# Go into the repository
$ cd ziw.github.io

# Install dependencies
$ yarn install

# Run the app
$ yarn start
```

## Deployment

This project is deployed using GitHub Pages. To deploy your own version:

```bash
# Build and deploy to GitHub Pages
$ yarn deploy
```

The `yarn deploy` command will:
1. Build the production version of the app
2. Push the build files to the `gh-pages` branch
3. Deploy automatically to GitHub Pages

**Live Site:** [https://ziw224.github.io/ziw.github.io/](https://ziw224.github.io/ziw.github.io/)

### First-time Deployment Setup

If deploying for the first time:

1. Install gh-pages: `yarn add -D gh-pages`
2. Ensure `package.json` has these configurations:
   ```json
   "homepage": "https://ziw224.github.io/ziw.github.io"
   ```
   ```json
   "scripts": {
     "predeploy": "yarn build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run `yarn deploy`
4. Go to your GitHub repository Settings → Pages
5. Set Source to `gh-pages` branch and `/ (root)` folder
6. Save and wait a few minutes for deployment

---

## License

MIT

---

Made with ❤️ by [Zihan Wang](https://github.com/ziw224)

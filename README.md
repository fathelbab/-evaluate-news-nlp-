# Evaluate News Article EG FWD

a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

## Installation

Use the package manager [npm](https://npmjs.com) to install dependencies.

```bash
npm install
```
Create .env at the root directory and make 3 variables MC_API_KEY, MC_BASE_URL, PORT
## Usage

All scripts can be found in package.json
```python
npm run start // for running the server on port 8082 make sure it is not in use
npm run dev   // for running client-side on default port 8080
npm run prod  // for building production ready file inside dist folder
npm run test  // for running tests using jest
```

## List of Dependencies
Production:
- [babel/polyfill](https://www.npmjs.com/package/babel-plugin-polyfill-env)
- [bootstrap](https://www.npmjs.com/package/bootstrap)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express) 
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [sass](https://sass-lang.com/install)
- [webpack](https://webpack.js.org/guides/installation/)




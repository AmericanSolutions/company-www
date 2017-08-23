![logo](https://user-images.githubusercontent.com/5973579/29640433-d5ad1d1c-8813-11e7-8bba-ce8382eb38cf.jpg)
> American Solutions, llc public website

> See repo wiki for additional configuration docs and info if what you're looking for is not found here

## Installing / Getting started
The minimal setup you need to get dev env up and running. Must have node version 4 or higher installed.
```shell
npm start
```
> If you run in to issues with starting the project, try wiping your node_modules folder then restarting, ie:
```shell
rm -rf node_modules
npm start
```

The start script will install all npm deps and fire up a BrowserSync server which will print the local address to
visit the site in your browser.

## Developing
### Built With
HTML/SCSS/JS

#### Styles CSS/SASS
All style sheets are built from the `gulpgile.js` task 'sass' which preprocess sass in the
`/public/assets/sass` directory and write them to the `css/` directory. Any filenames in the 
`css/`. When running the dev server locally from `npm start` the Gulp & BrowserSync modules 
automatically process and reload the browser when `.scss` files are changed.

### Prerequisites
Node.js version 4 or higher is required. It is recommended that you install NVM and run the command `nvm use` from the
project root to apply the project `.nvmrc` to your env.

[Install NVM](https://github.com/creationix/nvm)

### Setting up Dev
Clone the project
```shell
git clone https://github.com/AmericanSolutions/company-www.git AmericanSolutions
cd AmericanSolutions/
npm install
```
> Be sure to `git pull` to get the latest in the repository or branch you're working on in case another dev is also
working on tasks/features.

### Deploying / Publishing
Deployments are handled server-side via git webhooks on `master` & `develop` branches.

> All pushes to `master` & `develop` are prohibited. You can only get code in those branches via pull request.

More info: (Deployment Wiki Docs)[https://github.com/AmericanSolutions/company-www/wiki/Domain,-Hosting,-Server-Config,-&-Deployment]

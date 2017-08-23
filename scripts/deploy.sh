#!/usr/bin/env bash
# This script is ran on the server to "build & deploy assets" in the dev & prod directories

#dev build & deploy
cd /var/dev/
rm -rf node_modules
nvm use
npm install
npm run build

# prod build & deploy
cd /var/www/
rm -rf node_modules
nvm use
npm install
npm run build
# greasemonkey-scripts
A collection of Greasemonkey scripts I've written to improve web pages

## The Scripts

`YouTube Link Redirect Fixer.user.js` is the only script as of right now. Its job is simple: Remove the YouTube redirected links in YouTube video descriptions and comments and replace them with the original link. It also replaces the truncated URLs with the full URL to make copy-pasting them easier.

`Slickdeals Link Redirect Fixer.user.js` is based on `YouTube Link Redirect Fixer.user.js` and performs a similar role. It removes some of the Slickdeals redirected links in posts and comments. It can't remove all of them, because some redirects don't have the original URL in them, and instead appear to hit some Slickdeals API first to get the external URL. I'll look into those at a later date.

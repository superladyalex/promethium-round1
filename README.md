# promethium-round1

Summary: This project uses cypress/typescript.
yarn is the package manager
The layout uses the page object model 


## Prereqs
1) `brew install node`
2) `brew install typescript`
3) `brew install yarn`

## Setup
1) cd into root and run `yarn install`

## Basic Info
Base url is configured in `cypress.config.js`


## Future Optimizations 
- handle getting text from elements better so verification can be more granular and text can be manipulated like a string. 
- dockerization
- enums for text function inputs.  - For example at the moment most functions take in a string param so the function itself
can be generic. Example: which item to click in a drop down. - It would be nice if everything could map to an enum, so if the
text changed, it would only need to be changed in the enum as opposed to all occurences of it. 
- common functions for things like open link in same tab 
- CI (GHA pieces)

## Problems
1) hovering over the nav bar elements is flaky - even with a realHover()
2) download is always to tab (forced from new window) but never makes it to downloads folder 

# Running
- In an IDE like webstorm, you can click on the green play buttons next to the tests 
- You can either run a yarn command on command line or click on the green play button (from your IDE) in the `package.json` file
example: `yarn cy:run:chrome`

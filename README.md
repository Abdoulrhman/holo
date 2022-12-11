# React App Task For Holo

## Install Packages

npm install | yarn

## To Run the client app

npm start

## To Run cypress for E2E Testing

npx cypres open

## High level explanation

○ The app state was handled with redux/toolkit for users and repos , also using redux-persist to persesit the recent searches , the app configrutions , languages and theme are handled with context api , the network calls implmentd with axios instance , all the styles are pure scss with some mixins .

## Extra Features added to the project

○ Handling the offline status for the app ( when there is no internet ).\
○ Handling recent searches .\
○ E2E Testing with cypress.\
○ A language storage which can be toggled between Ar and En .\
○ Dark Theme implmention .

## Custom hooks added to the project

○ useOutsideAlerter => a hook to triger the outside click for any component with ref .\
○ usePersistedState => a hook to handle saving any value to localstorage and retrive it easliy .\
○ useScrollBottom => a hook to triger the bottom of the page for handling infinte scrolling .

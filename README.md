## Before starting

possible migrations:

- yarn run magazine-migration // creates magazine content type + initalizes it with two entries
- yarn run book-migration // edits book status

SpaceId and Token must be set in the config.json file

## Vue

Inside this proyect we have a simple Vue app that retrieves the values of the 'book' contentype.
Needs .env with

- VITE_SPACE_ID=[YOUR_SPACE_ID]
- VITE_ACCESS_TOKEN=[YOUR_ACCESS_TOKEN]

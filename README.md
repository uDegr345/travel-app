# Travel-App
## Foreword 
Instead of the project recommended  api https://www.geonames.org/ I used the api by https://nominatim.org/. They both fulfill the same purpose for the scope of this project, however nominatim works without an api key and most importantly was easier for me to work with
## Instructions
To get the webapp running you need to do a couple steps:
### Packages
Run `npm i` in the terminal to install all needed packages that are defined as dependencies in package.json

### Api Keys
Rename the `.envPlaceholder` file to `.env` 
create an account at https://www.weatherbit.io/ and https://pixabay.com/ and retrieve your personal api keys.
Store these api keys into the newly renamed .env respectively as `WEATHERBIT_API_KEY` and `PIXABAY_API_KEY`

### Express server
Type `npm run build-prod` and `npm run start` into the terminal to build the project and start the server

## Scope of this project
The goal of the project was to create a type of travel journal which displayed basic information 
1. about a certain location
2. at a set time
3. with the information of temperature and
4. an image of the location being shown

This was done by fetching information from multiple APIs being
1. nominatim.org (in my case) for the geolocation in longitude and latitude
2. weatherbit.org for specific weather infos to this geolocation data
3. pixabay to retrieve a photo based on the location

thus learning about handling multiple api calls and handling the data of all them and connecting it dynamically to the presentation modules.  The technologies generally used for this were:
- **Webpack** as a build tool
- **Express.js** as a server
- **Loaders** for minifying
- **Workbox** for service workers
- **Jest** for testing

## Extra Project Requirement
As an extra requirement I chose **LocalStorage**. With this I was able to save the already entered trips even if the user were to refresh the page or close the tab/window. The challenge I encountered here was clearing the storage. I did not want the user to do it manually in the 
browser console, therefore I added a temporary simple solution by adding a button with the value *clear* in the navigation bar.

## Roadmap
The current state of the app fulfills the basic requirements of the project, however there is stil a couple things I want to work on in the future:
- Improving the UI: Currently the UI is just a plain basic skeleton of how I want the app to look, therefore I plan to add additional styling to give it more life
- Deleting a travel: Right now the only option to delete your already existing trips is by clearing the LocalStorage. This is obviously not a very good user experience and should be replaced by an option to manually delete specific trips
- Proper logic for the trip dates: As of right now the trips can only be added if they are 16 days into the future. My plan is to also allow past trips and also more flexibility with future trips by calling different api entry points based on the existing date logic case by case.
- etc.

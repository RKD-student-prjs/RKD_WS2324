# thkoeln-recommender-system

A svelte implementation of the University of Applied Sciences Cologne recommender system for project III.

## Installation intructions

To start the website it is required to install the following dependencies:

- Node js and npm
    - https://nodejs.org/en/
    - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm (You might wanna install a node version manager nvm/n/nvm-windows from the respective links)

- Vs Code or similar IDE
    - https://code.visualstudio.com/download

## After installation
1. Open the terminal in the IDE and if not already done navigate to the top level of the project "path/to/thkoeln-recommender-system" and run ```npm install``` to install all needed svelte js packages


2. After installing run the following command to start the website on your local machine:
    -  ```npm run dev```

3. Open the browser and enter the url from the terminal:
    -  For example: http://localhost:8080


## Project description

This repository contains the architecture of the "thkoeln-recommender-system" website wich is based on svelte js. Svelte js is a straightforward javascript framework to create fast web applications.


### The important part of the folder structure is as followed:

```
.
+-- public
|   +--images
+-- src
|   +-- App.svelte
|   +-- main.ts
|   +-- routes
        +-- route.svelte
    +-- components
        +-- component.svelte
    +-- data
        +-- data.js

```

- The **App.js** file contains the router, where new routes to pages are added. It also contains the head wich is used for seo optimisations.
- The **public/images** folder is used for store images and icons
- New pages, if needed, needs to be placed inside the **routes** folder
- New components, wich are the building blocks of a page, have to be added in the **components** folder and need to be imported inside the pages where there are needed.
- The data wich contains all the informations needed for the th koeln recommender system is placed inside the **data** folder. The important files inside of the folder are the cleaned_data.json and the data.js file. The data.js file imports the data from cleaned_data.json and transforms it further into the needed format. So when using the data in new pages or components always import the data from the data.js file!

## Features

### Searchbar
The architecture and the logic of the Seachbar can be found inside of the components:

- SearchContainer.svelte
- SearchMask.svelte
- SearchResult.svelte

### Topic categories
The architecture and the logic of the Topic categories can be found inside of the components:

- TopicComponent.svelte
- TopicContainer.svelte


## General


Before working with on the architecture you should have some basic knowledge in svelte js.
To get a basic understanding of the framework and how it works it is recommended to watch the following tutorial: https://www.youtube.com/watch?v=rt-Zx-JHSyg


Links to the framework and the most important technology used:
- https://svelte.dev/docs
- https://svelte.dev/tutorial/basics
- https://svelte.dev/tutorial/declaring-props --> passing props



## Added dependecies

### @rollup/plugin-json

- Installation: npm install @rollup/plugin-json --save-dev
- Tutorial for installation: https://www.youtube.com/watch?v=7CgBGwViuyM

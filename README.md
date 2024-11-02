![TJMAD Club Homepage](/tjmad_club_homepage.png)

# TJMAD Club Website

This repository hosts the code for the [TJMAD club site](https://activities.tjhsst.edu/mobileapps). 

## For Contributors/Future Developers

The site is made using React, TypeScript and Vite. To host the site on TJ domains, you must use 
[Director](https://director.tjhsst.edu) and ask the sponsor/eighth period office for access to the 
project. 

All assets are in the `src/assets` folder and in WebP format. Assets that may be frequently changed
have PDN files, which can be provided upon request.

To contribute to the site, you will first need to install:
* [nodejs](https://nodejs.org)
* [git](https://git-scm.com)

Then, you can clone the repository onto your computer by running:
```bash
git clone https://github.com/tjmadclub/website
```

`cd` into the new directory, and install the required packages:
```bash
npm install
```

Now, the setup is complete and you can start contributing!

### Helpful Info

Below are the necessary commands to interact with the project:

To build the site, run the following command,
```bash
npm run build
```

To run the Vite development server, run the following command,
```bash
npm run dev
```

To preview the site, you can use,
```bash
npm run preview
```

However, if you want to run the build on a production server (e.g., for Director), 
you can use the `serve` package,
```bash
npm i -g serve
npx serve dist
```
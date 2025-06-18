export const websites = [
    {
        name: 'Tool Selling Website',
        url: 'https://circledancetools.vercel.app/',
        description: 'Svelte website using tailwindcss to show and sell some tools and spoons that I make. I used mongodb for the database',
        image: 'CDToolsPreview.png',
        github: "https://github.com/murraycopps/knife_website"
    },
    {
        name: 'Logic Solver',
        description: 'A logic statement solver which can be used to show and verify proofs using step verification. and algorithmic suggestions. This was a group project I worked on with a classmate. I handled the frontend using next.js with typescript and tailwindcss which consisted of making the proof solver and doing some of the proof verification while the classmate did the algorithmic suggestions in the backend using python.',
        image: 'LogicProjectPreview.png',
        github: "https://github.com/justinottesen/logicProject"
    },
    {
        name: 'Running Hub',
        url: 'https://running-hub.vercel.app/',
        description: 'A running website with three main features: reviews of common running gear, strava account integration, tools to calculate pace or equivalent race performances and more tools to help runners. I used next.js with typescript and tailwindcss for the frontend and mongodb for the database to store the reviews and the strava users. I connected with the strava api to show more in depth user data and their activities, strava is the most popular running log platform but they don\'t show all of the data for their runs. I also used openstreetmap to show the users runs on a map. This was a group project I worked on with a classmate, I handled both the tools and the strava integration by combining websites I had already made and recoding parts I was unhappy with while changing the look and feel. I also handled most of the styling using tailwindcss and helped create some of the reviews based off of other reviews or our experiences with the products. Later on I made the website nearly entirely mobile responsive, made it a PWA and added some ease of use features like back buttons on mobile and ability to stay logged in. Use login user: \"test\" password: \"test\" to view the strava integration with my own data.',
        image: 'RunningHubPreview.png',
        github: "https://github.com/murraycopps/running-hub-next"
    },
    {
        name: 'Super Shoes Senior Project',
        url: 'https://senior-project-super-shoes.vercel.app/',
        description: 'A senior project I made on describing the benefits of super shoes, the technology behind them and the controversy they caused. I used svelte with tailwindcss for the frontend focusing on the design first and then the content. I made it very customizable where I wrote the article and added text into it to represent what components I needed to add before parsing the entire text and adding the components based on the specified data.',
        image: 'SuperShoesPreview.png',
        github: "https://github.com/murraycopps/senior-project"
    }
]
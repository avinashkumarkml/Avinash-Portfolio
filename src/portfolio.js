//I Would Highly Recommend You To Customize The Theme According To Your Taste.
export const globalStyles = {
  "--grad": "linear-gradient(315deg,#48a9fe,#00cdac)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #48a9fe 0%, #734ae8 74%)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)",
  "--txtcolor": "#272341",
  "--p_color": "#00cdac",
  "--s_color": "#fff",
};

// Navigation Bar Name
export const navbar_name = "<Avinash>";

// Main Page
export const main = {
  name: "Avinash Kumar",
  doamin: "A Front-End Web Developer",
  resume:
    "https://drive.google.com/file/d/1HcRmY2UPM9m57C2-9Ohggpa5asqDu9p4/view?usp=sharing",
};

// AboutMe
export const aboutme = {
  imgLink: "https://miro.medium.com/max/875/1*xiiT-GCna-KLIe8xgQ-rrA.png",
  p1: "Hello, I'm Avinash Kumar, a passionate and enthusiastic Front-End Web Developer with a strong focus on the MERN stack. ",
  p2: "I thrive on solving complex problems and developing cutting-edge products. I have a knack for writing clean, modular code, making it easily understandable for fellow developers. Continuously seeking new technologies and industry trends to stay ahead of the curve, I am committed to building state-of-the-art, user-friendly websites and applications. As a goal-oriented and productive individual, I am excited to contribute my skills, knowledge, and passion to become an integral part of an organization's success. Beyond coding, I enjoy playing cricket and traveling, adding to my well-rounded personality. ",
};

// Skills
export const whatido = {
  title: "Front End Developer",

  details: [
    "Proficient in building responsive websites using HTML, CSS, JavaScript, and React",
    "Knowledgeable in Web Browsers and skilled in DOM manipulation techniques",
    "Experienced in utilizing Web APIs and developing asynchronous applications",
    "Familiarity with Version Control using Git/Github for collaborative development",
    "Well-versed in various UI libraries, enhancing user interface design and functionality",
  ],
  logos: [
    {
      name: "HTML5",
      iconifyClassName: "vscode-icons:file-type-html", // PS : Use iconify class name
      id: "1",
    },
    {
      name: "CSS",
      iconifyClassName: "vscode-icons:file-type-css",
      id: "2",
    },
    {
      name: "JavaScript",
      iconifyClassName: "logos:javascript",
      id: "3",
    },
    {
      name: "ReactJS",
      iconifyClassName: "vscode-icons:file-type-reactjs",
      id: "4",
    },
    {
      name: "Redux",
      iconifyClassName: "logos:redux",
      id: "5",
    },

    {
      name: "npm",
      iconifyClassName: "logos:npm-icon",
      id: "10",
    },
    {
      name: "GIT",
      iconifyClassName: "logos:git",
      id: "11",
    },
    {
      name: "chakra-ui",
      iconifyClassName: "logos:tailwindcss-icon",
      id: "12",
    },
    {
      name: "Material-UI",
      iconifyClassName: "logos:material-ui",
      id: "13",
    },
    {
      name: "Ant Design",
      iconifyClassName: "logos:ant-design",
      id: "14",
    },
    {
      name: "Netlify",
      iconifyClassName: "vscode-icons:file-type-netlify",
      id: "15",
    },
    {
      name: "Vercel",
      iconifyClassName: "logos:vercel-icon",
      id: "16",
    },
  ],
};

// Project Details
export const details = [
  {
    id: 1,
    title: "App-Tronix-Store ",
    desc: `Created an exclusive E-commerce platform dedicated to Apple products, offering a seamless shopping experience for customers.`,
    feature: `Product Catalog with Filtering and Sorting, Hover effect on Products, Single product pages, Sign-In / Sign-Up, Dynamic progress monitor page, Data fetched from Back-end.
    `,
    tech: `Tech Stack: HTML | CSS | JavaScript | ReactJs | Redux | Bootstrap | MUI.`,
    img: "https://cdn-images-1.medium.com/max/1000/1*VhlaOeu7jp8kfa4THTe4fA.png",
    github:
      "https://github.com/avinashkumarkml/App-Tronix-Mern-Stack/tree/main/mobile",
    link: "https://apptornix-avinashkumarkml.vercel.app/",
  },

  {
    id: 2,
    title: "E-SHOPPERS",
    desc: `Developed a dynamic E-commerce platform catering to sneaker enthusiasts, offering a diverse selection of footwear choices.`,
    feature: `Sign-in/Sign-up, User authentication, Add to cart , Sort and filter functionality,
    `,
    tech: `Tech Stack: HTML | CSS | JavaScript | ReactJs | Redux | Chakra UI .`,
    img: "https://miro.medium.com/max/1100/1*23vUO-ZcFSleks9luh9WEQ.webp",
    github: "https://github.com/avinashkumarkml/E-Shoppers",
    link: "https://eshoppers-three.vercel.app/",
  },
  {
    id: 3,
    title: "E-Commerce Web Application ",
    desc: `The goal of this project was to create a responsive E-commerce web application used for a user where the customer can buy a product.`,
    feature: `User Buy Clothes,
  jewelry,
  Eletronics,
  Bags Online.`,
    tech: `Tech Stack: HTML | CSS | JavaScript | ReactJs | Redux | Chakra UI .`,
    img: "https://cdn-images-1.medium.com/max/1000/1*hAvgDiRJxFDlNBeU4xgR9A.png",
    github: "https://github.com/avinashkumarkml/E-Commerce-Front-End",
    link: "https://e-commerce-two-psi.vercel.app/",
  },

  {
    id: 4,
    title: "Real-Estate Web Application",
    desc: `A small Real-Estate React app to keep the details of the flats and their residents in a society.`,
    feature: `Using Tailwind CSS for UI/UX,
    User Authentication,
    Private Routing, Filter and sorting.`,
    tech: `Tech Stack: HTML | CSS | JavaScript | ReactJs | Tailwind CSS .`,
    img: "https://miro.medium.com/max/1400/1*7q4crrwMHcGmlvY5BKeLJA.png",
    github: "https://github.com/avinashkumarkml/Real-Estate",
    link: "https://real-estate-main-main-ten.vercel.app/",
  },
  {
    id: 5,
    title: "WEATHER-APP",
    desc: `User can search for the city in the search bar and can find the data on UI. Google map is also integrated and user can also see the graph of the particular day. `,
    feature: `Google map integration, Search cities, Live location on start, Live location on start.
    `,
    tech: `Tech Stack: HTML | CSS | JavaScript | ReactJs.`,
    img: "https://port-folio-git-main-vikram-sharma1.vercel.app/assets/weather/three.png",
    link: "https://n-pied-seven.vercel.app/",
    github: "https://github.com/avinashkumarkml/Weather-App",
  },
  {
    id: 6,
    title: "MY Movie App",
    desc: `It's a movie app, users can search various type of movie and also see the Popular, Top Rated as well as the Upcoming Movies.`,
    feature: `Search Movies,
    Filter Movies.`,
    tech: `Tech Stack: HTML | CSS | JavaScript | ReactJs .`,
    img: "https://miro.medium.com/max/1400/1*14jsVYSFWnB3l0Qqk7JLvA.png",
    link: "https://movie-app-mocha-beta.vercel.app/",
    github: "https://github.com/avinashkumarkml/move-app",
  },
];

// Social Media Links
export const links = [
  "https://www.linkedin.com/in/avinashdeveloper/",
  "https://api.whatsapp.com/send/?phone=918619996364&text&app_absent=0",
  "mailto:theavinashbhardwaj@gmail.com",
  "https://medium.com/@avinashdeveloper",
  "https://github.com/avinashkumarkml",
];

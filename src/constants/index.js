import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "computer vision  ",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "ml beginner",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Advanced Learning Algorithm",
      company_name: "Cousera",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Build and train a neural network with TensorFlow to perform multi-class classification",
        "Apply best practices for machine learning development so that your models generalize to data and tasks in the real world",
        "Build and use decision trees and tree ensemble methods, including random forests and boosted trees",
      ],
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      company_name: "Cousera",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Build machine learning models in Python using popular machine learning libraries NumPy & scikit-learn.",
        "Build & train supervised machine learning models for prediction & binary classification tasks, including linear regression & logistic regression",
        "Regularization to Avoid Overfitting.Gradient DescentSupervised Learning",
        "Linear Regression, Logistic Regression for Classification",
      ],
    },
    {
      title: "front end development libraries",
      company_name: "freecodecamp",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "learned how to build user interfaces and single-page applications using React, a popular JavaScript library.",
        " learned to create responsive and visually appealing web designs using the popular Bootstrap framework. Bootstrap enables you to build modern, mobile-first websites and web applications quickly and efficiently.",
        "gained skills in DOM manipulation, event handling, and animation.",
        "learned how to connect your React components to the Redux store and efficiently manage application data.",
      ],
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      company_name: "cousera",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - present",
      points: [
        "Implement collaborative filtering recommender systems in TensorFlow",
        "Understand key terms such as return, state, action, and policy as it applies to reinforcement learning",
        "Implement deep learning content based filtering using a neural network in TensorFlow",
        "Understand ethical considerations in building recommender systems",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "completed internship in web development and design",
      name: "oasis infobyte",
      designation: "internship",
      company: "2 month",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "completed an internship in computervision",
      name: "techmagii",
      designation: "internship",
      company: "1 month",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
   
  ];
  
  const projects = [
    {
      name:"Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image:carrent,
      source_code_link: "https://github.com/",
    },
   
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };
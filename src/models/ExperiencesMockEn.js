import { Status } from "./enums/Status";

export const ExperiencesMockEn = [
    {
        id: 1,
        title: "Nursery numeric",
        entreprise : "AFPA",
        date : "May to June 2022",
        status: Status.Finish,
        work : false,
        resume : "Introduction to HTML 5, CSS 3, JavaScript, Database.",
        stack : "",
        info : ""

    },
    {
        id: 2,
        title: "CDA",
        entreprise : "Id Formation",
        date : "June 2022 to February 2023",
        status: Status.Finish,
        work : false,
        resume : "Professional design of application developer qualification. (bac+3/+4)",
        stack : "",
        info : ""

    },
    {
        id: 3,
        title: "Stage",
        entreprise : "Id formation",
        date : "January 9, 2023 to February 3, 2023",
        status: Status.Finish,
        work : true,
        resume : "Development of a secure business management application.",
        stack : "Java JEE, Spring boot, React.js, Typescript, MySql, i18next",
        info : "Work on application security, user login, creation, modification, deletion and viewing of financial transactions. Set up translation (French - English)."

    },
    {
        id: 4,
        title: "Incubateur numérique",
        entreprise : "1formation=1job EN",
        date : "April to August 2023",
        status: Status.Finish,
        work : true,
        resume : "Work on a car sharing application.",
        stack : " Java JEE, Spring boot 3, React.js, Tailwind, MariaDb, Email.js, Stripe, Formik, Yup",
        info : "Fullstack development for route management, booking, credit management and the contact form."
    },
    {
        id: 5,
        title: "Fullstack Developer",
        entreprise : "Wild Code School",
        date : "March 17 to May 22, 2026",
        status: Status.Soon,
        work : true,
        resume : "Javascript application developer",
        stack : "Javascript, Typescript, React.js, Node.js",
        info : ""
    },
    
]
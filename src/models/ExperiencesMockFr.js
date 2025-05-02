import { Status } from "./enums/Status";


export const ExperiencesMockFr = [
    {
        id: 1,
        title: "Nurserie numérique",
        entreprise : "AFPA",
        date : "Mai à juin 2022",
        status: Status.Finish,
        work : false,
        resume : "Introduction HTML 5, CSS 3, JavaScript, base de données.",
        stack : "",
        info : ""

    },
    {
        id: 2,
        title: "CDA",
        entreprise : "Id Formation",
        date : "Juin 2022 à Février 2023",
        status: Status.Finish,
        work : false,
        resume : "Titre Professionnel Concepteur Développeur d'Applications. (bac+3/+4)",
        stack : "",
        info : ""

    },
    {
        id: 3,
        title: "Stage",
        entreprise : "Id formation",
        date : "9 Janvier au 3 Février 2023",
        status: Status.Finish,
        work : true,
        resume : "Développement d’une application de gestion d'entreprise sécurisée.",
        stack : "Java JEE, Spring boot, React.js, Typescript, MySql, i18next",
        info : "Travail sur la sécurité de l'application, connexion utilisateur, création, modification, suppression et affichages des mouvements financiers. Mise en place de la traduction (français - anglais)."

    },
    {
        id: 4,
        title: "Incubateur numérique",
        entreprise : "1formation=1job",
        date : "Avril à Août 2023",
        status: Status.Finish,
        work : true,
        resume : "Mise en situation professionnelle, travail sur une application de covoiturage.",
        stack : " Java JEE, Spring boot 3, React.js, Tailwind, MariaDb, Email.js, Stripe, Formik, Yup",
        info : "Développement fullstack sur la gestion des trajets, sur les réservations, sur la gestions des crédits et sur le formulaire de contact."

    },
    // {
    //     id: 5,
    //     title: "Développeur Fullstack",
    //     entreprise : "Wild Code School",
    //     date : "29 Septembre 2025 au 27 Novembre 2026",
    //     status: Status.Soon,
    //     work : true,
    //     resume : "Développeur d'applications javascript",
    //     stack : "Javascript, Typescript, React.js, Node.js",
    //     info : ""
    // },
    
]
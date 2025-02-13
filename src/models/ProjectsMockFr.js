import treizzer from "../assets/images/projects/Treizzer/tzr_accueil.png"
import treizzerSong from "../assets/images/projects/Treizzer/tzr_song.png"
import treizzerAlbum from "../assets/images/projects/Treizzer/tzr_album.png"
import treizzerDetail from "../assets/images/projects/Treizzer/tzr_albumDetail.png"
import treizzerShop from "../assets/images/projects/Treizzer/tzr_shop.png"
import pokedexHome from "../assets/images/projects/Pokedex/pokedex_home.png"
import pokedex from "../assets/images/projects/Pokedex/pokedex_pokemon.png"
import marioPizza from "../assets/images/projects/MarioPizza/MarioPizza_img.png"
import financeOpen from "../assets/images/projects/SoftwareBusiness/FinanceOpen.png"
import finance from "../assets/images/projects/SoftwareBusiness/Finance.png"
import financeCreation from "../assets/images/projects/SoftwareBusiness/Creation.png"
import financeLogin from "../assets/images/projects/SoftwareBusiness/PageLogin.png"
import codrive from "../assets/images/projects/CoDrive/Codrive.png"
import codriveAdmin from "../assets/images/projects/CoDrive/admin.png"
import dodgeThem from "../assets/images/projects/DodgeThemGame/dtg_img.png"
import portfolio from "../assets/images/projects/Portfolio/ImagePortfolio.png"
import portfolio2 from "../assets/images/projects/Portfolio/ImagePortfolio2.png"
import GsWainting from "../assets/images/projects/GamesSearch/gs-waiting.png"
import p2homed from "../assets/images/projects/Portfolio2/portfolio_2_home_d.png"
import p2home from "../assets/images/projects/Portfolio2/portfolio_2_home.png"
import p2projects from "../assets/images/projects/Portfolio2/portfolio_2_projects.png"



export const ProjectsMockFr = [
    {
        id: 1,
        name: "Treizzer",
        resume: "Premier projet réalisé",
        badge: ["HTML", "CSS", "Javascript"],
        tech: ["HTML", "CSS", "Javascript"],
        outil:["Miro", "GitHub", "Visual Studio Code"],
        description: "Projet réalisé dans le cadre de la nurserie, lors de 5 semaines de découvertes, avec 3 autres personnes, nous avons eu un fil rouge. Réaliser une application comme spotify.",
        more: "",
        date: "2022",
        github: "https://github.com/tomab23/TreizzerApp",
        site: "",
        imgs: [treizzer, treizzerAlbum, treizzerDetail, treizzerSong, treizzerShop],
        incoming: false
    },
    {
        id: 2,
        name: "Pokedex",
        resume: "Découverte de React js",
        badge: ["React js", "Java", "MySql"],
        tech: ["React js", "Typescript", "Java", "Spring boot", "MySql"],
        outil:["Visual Studio Code", "Eclipse", "Dbeaver"],
        description: "Durant ma formation et pour découvrir React js, j'ai mis en place un pokedex.",
        more: "La première version est juste visuel sans enregistrement mais une deuxième version à été faite en gardant la partie frontend pour lui ajouter une partie backend. Le site montre la première version",
        date: "2022",
        github: "https://github.com/tomab23/PokemonPokedex",
        site: "https://pokedex-app-532e3.web.app",
        imgs: [pokedexHome, pokedex],
        incoming: false
    },
    {
        id: 3,
        name: "Mario Pizza",
        resume: "Application mobile",
        badge: ["React Native", "Java", "MySql"],
        tech: ["React Native", "Expo", "Typescript", "Java", "Spring boot", "MySql"],
        outil:["Trello", "Figma", "Postman", "Dbeaver", "Eclipse", "Visual Studio Code"],
        description: "Réalisé durant un examen, En partant d'un dossier de conception, j’ai créé cette application mobile de livraison de pizzas. J'ai du mettre en place une base de données, lié à une partie backend en Java tout ça avec une partie frontend en React native utilisant expo. Les fonctionnalités principales incluent la création de comptes clients, la connexion à l’application, et la gestion des commandes avec le choix des pizzas.",
        more: "",
        date: "2022",
        github: "https://github.com/tomab23/AppPizza",
        site: "",
        imgs: [marioPizza],
        incoming: false
    },
    {
        id: 4,
        name: "Business software",
        resume: "Application de stage",
        badge: ["React js", "Java", "MySql"],
        tech: ["React js", "Typescript", "Material UI", "Java", "Spring boot", "Maven", "MySql", "Formik", "Yup", "I18Next"],
        outil:["Github", "Trello", "Miro", "Discord", "Lucidchart", "Postman", "Dbeaver", "Eclipse", "Visual Studio Code"],
        description: "Dans le cadre d’un stage au sein d’une équipe avec quatre autres développeurs, nous avons fais la conception et le développement d’une application de gestion d’entreprise. L'application devais permettre de consulter un tableau de bord, gerer des services, des clients, des factures et voir les mouvements finanaciers. Nous avons utilisé une approche agile, Scrum, pour travailler sur ce projet, chaque membre de notre groupe c'est concentré sur une fonctionnalité. Pour ma part, je me suis concentré sur la connexion, la sécurité côté back et sur la gestion des mouvements financiers.",
        more: "Des contraintes techniques étaient imposées , comme l’utilisation côté front de React.js, TypeScript, npm, Formik, Yup, Material UI et i18Next. Coté back Spring boot, Java, Maven. Coté base de données, une base en MySQL.",
        date: "2023",
        github: "https://github.com/tomab23/StageCDA",
        site: "",
        imgs: [financeOpen, finance, financeCreation, financeLogin],
        incoming: false
    },
    {
        id: 5,
        name: "CoDrive",
        resume: "Application de covoiturage",
        badge: ["HTML", "CSS", "Javascript"],
        tech: ["React js", "Javascript", "Tailwindcss", "Redux", "Java", "Spring boot", "Maven", "Lombok", "Mapstruct", "Formik", "Yup"],
        outil:["Github", "Jira", "Discord", "Postman", "Dbeaver", "IntelliJ", "Visual Studio Code"],
        description: "Au cours de cette expérience collaborative de plusieurs mois au sein d'un incubateur, dans une équipe composée d’un testeur QA, d’une designer, et de quatre autres développeurs, notre mission était de concevoir une application web de covoiturage. En travaillant en groupe, nous avons géré l’ensemble du processus de développement, depuis la conception jusqu’à la base de données, en passant par le backend et le frontend, en suivant une approche agile.",
        more: "",
        date: "2023",
        github: "https://github.com/tomab23/CoDrive",
        site: "",
        imgs: [codrive, codriveAdmin],
        incoming: false
    },
    {
        id: 6,
        name: "Dodge them game",
        resume: "Premier jeu fais avec Godot",
        badge: ["GDScript"],
        tech: ["GDScript"],
        outil:["Godot"],
        description: "Étant un gros joueur de jeux vidéo, je me suis challengé pour apprendre à en faire, avec l'aide de Godot j'ai créé ce petit jeu.",
        more: "L'objectif de ce jeu et de réussir à esquiver le plus longtemps possible des ennemies qui vont apparaître aléatoirement sur l'écran.",
        date: "2024",
        github: "https://github.com/tomab23/DodgeThemGame",
        site: "",
        imgs: [dodgeThem],
        incoming: false
    },
    {
        id: 7,
        name: "Portfolio",
        resume: "Plus d'informations sur mon premier portfolio",
        badge: ["React js", "Tailwind", "Javascript"],
        tech: ["React js", "Tailwindcss", "Javascript", "I18Next"],
        outil:["Visual Studio Code"],
        description: "Voici mon portfolio (sur lequel vous êtes actuellement). C'est la toute première version. Vous pouvez avoir acces au code via Github plus bas.",
        more: "L'objectif était de faire de A à Z un portfolio avec quelques fonctionnalités comme me contacter par mail via un formulaire, le choix de la langue (français - anglais) et l'ajout d'un dark mode avec le choix de le mettre ou non, le tout en étant responsive. Je me suis amusé aussi à mettre des notes de version pour voir l'acutelle, les anciennes et futures mises à jour.",
        date: "2023 - 2024",
        github: "https://github.com/tomab23/Portfolio",
        site: "https://thomas-bartier.netlify.app/",
        imgs: [portfolio, portfolio2],
        incoming: false
    },
    {
        id: 8,
        name: "Portfolio 2.0",
        resume: "Plus d'informations sur mon portfolio",
        badge: ["React js", "Tailwind", "Javascript"],
        tech: ["React js", "Tailwindcss", "Flowbite react", "Javascript", "I18Next"],
        outil:["Visual Studio Code"],
        description: "Description FR",
        more: "More FR",
        date: "2025",
        github: "https://github.com/tomab23/Portfolio",
        site: "https://thomas-bartier.netlify.app/",
        imgs: [p2homed, p2home, p2projects],
        incoming: false
    },
    // {
    //     id: 8,
    //     name: "GamesSearch",
    //     resume: "Informations sur des jeux vidéo",
    //     badge: ["React js", "Javascript", "DaisyUI"],
    //     tech: ["React js","Javascript", "DaisyUI", "I18Next", "Formik"],
    //     outil:["Visual Studio Code"],
    //     description: "GamesSearch est une application qui vous permet de rechercher des informations sur des jeux vidéo. Il est actuellement en développement.",
    //     more: "À la suite de la sortie de la version 1, une version 2 sera disponible, permettant aux utilisateurs de créer un compte et de marquer des jeux comme favoris. Ils pourront également classer les jeux dans une liste de jeux à jouer ou une liste de jeux terminés, en indiquant le nombre d'heures passées à compléter chaque jeu.",
    //     date: "2024",
    //     github: "https://github.com/tomab23/GamesSearch",
    //     site: "https://gamessearch.netlify.app/",
    //     imgs: [GsWainting],
    //     incoming: true
    // },
  ];
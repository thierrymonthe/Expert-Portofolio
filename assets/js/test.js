/* let project = {
    nom: ['Bundesdruckerei GmbH',
        'Devk Rückversicherungs- und Beteiligungs-AG',
        'Boeing Services Deutschland GmbH ',
        'Unity Media GmbH',
        'Flex Financial Solutions ',
        'Training Data Sciences for SME',
        'GEA AG',
        'Central State Bank Saarland',
        'BNP Paribas AG',
        'BNP Paribas AG'],
    category: ['Web', 'Data Science'],
    role: ['Lead Data Scientist/DevOps ', 'client 2'],
    date: ['06/2020 – 06/2021', '12/12/2020'],
};

document.getElementById('name').innerHTML = project.nom[2];
document.getElementById('category').innerHTML = project.category[1];
document.getElementById('role').innerHTML = project.role[0];
document.getElementById('date').innerHTML = project.date[0]; */

let profiles = [
    {
        id: "project1",
        projectInfo: {
            enterprise: "Boeing Services Deutschland GmbH",
            category: "Data Science",
            role: "Lead Data Scientist/DevOps",
            date: "June 2020 – June 2021",
        },
        description: {
            title: "Goal",
            desc: "Development and Management of analytics solutions around early crisis detection.",
            title2: "Tasks",
            task: "<br>&#10004 Planning, implementation, quality control, reporting, test <br>&#10004 Implementation of a full text-search engine using R, R Shiny and Elasticsearch <br>&#10004	Organization and implementation of the documentation structure(Confluence) <br>&#10004 Integration and creation of task packages that can be handed over to development units<br><span>&#10004 Further development of a highly secure cloud storage solution in the context of R-Shiny</span> <br><span>&#10004 Consulting and support for DevOps product owners, development team, product management <br>&#10004 Implementation of R-Shiny Web Applications(shiny, testthat, shinyloadtest, shinycannon, profvis)<br>&#10004 Coordination with all stakeholders involved(development teams, business units, department heads) in the agile DevOps development team <br>&#10004 Implementation of a Topic Model for the identification of categories from a corpus of around 10.000 full texts(LSA, LSM using R / Python)</span> <br>&#10004 Analysis, specification, conception and, if necessary, implementation of developments and concepts in the context of Hana and data feeds  <br>&#10004 Coaching and Training of employees in the context of R-Shiny, R-Data Pipeline and the associated tech stack(Docker, R, Python)    "
        },
        images: ['assets/img/portfolio-details-1.jpg',
            'assets/img/portfolio-details-1.jpg',
            'assets/img/portfolio-details-3.jpg']
    },
    {
        id: "project2",
        projectInfo: {
            enterprise: "Devk Rückversicherungs- und Beteiligungs-AG",
            category: "Data Science",
            role: "Data Scientist",
            date: " January 2021 - March 2021",
        },
        description: {
            title: "Titre 2",
            desc: "Description du projet 2",
        },
        images: ['assets/img/portfolio-details-1.jpg',
            'assets/img/portfolio-details-2.jpg',
            'assets/img/portfolio-details-3.jpg']
    },
    {
        id: "project3",
        projectInfo: {
            enterprise: "Boeing Services Deutschland GmbH",
            category: "Data Science",
            role: "Data Scientist",
            date: " June 2019 - August 2020",
        },
        description: {
            title: "Titre 3",
            desc: "Description du projet 3",
        },
        images: ['assets/img/portfolio-details-1.jpg',
            'assets/img/portfolio-details-2.jpg',
            'assets/img/portfolio-details-3.jpg']
    },
    {
        id: "project4",
        projectInfo: {
            enterprise: "Unity Media GmbH",
            category: "Data Science",
            role: "Data Scientist",
            date: "April 2019 - December 2021",
        },
        description: {
            title: "Titre 4",
            desc: "Description du projet 4",
        },
        images: ['assets/img/portfolio-details-1.jpg',
            'assets/img/portfolio-details-2.jpg',
            'assets/img/portfolio-details-3.jpg']
    },
    {
        id: "project5",
        projectInfo: {
            enterprise: "Flex Financial Solutions AG",
            category: "Data Science",
            role: "Expert Data Scientist",
            date: "January 2018 - January 2019",
        },
        description: {
            title: "Titre 5",
            desc: "Description du projet 5",
        },
        images: ['assets/img/portfolio-details-1.jpg',
            'assets/img/portfolio-details-2.jpg',
            'assets/img/portfolio-details-3.jpg']
    },
    {
        id: "project6",
        projectInfo: {
            enterprise: "GEA AG",
            category: "Data Science",
            role: "Data Scientist",
            date: "January 2018 - January 2019",
        },
        description: {
            title: "Titre 6",
            desc: "Description du projet 6",
        },
        images: ['assets/img/portfolio-details-1.jpg',
            'assets/img/portfolio-details-2.jpg',
            'assets/img/portfolio-details-3.jpg']
    },
    {
        id: "project7",
        projectInfo: {
            enterprise: "Central State Bank Saarland",
            category: "IT",
            role: "IT-Organisator",
            date: "October 2013 - December 2014",
        },
        description: {
            title: "Titre 7",
            desc: "Description du projet 7",
        },
        images: ['assets/img/portfolio-details-1.jpg',
            'assets/img/portfolio-details-2.jpg',
            'assets/img/portfolio-details-3.jpg']
    },
    {
        id: "project8",
        projectInfo: {
            enterprise: "BNP Paribas AG",
            category: "Data Analysis",
            role: "SAS Business Analyst",
            date: "January 2013 - September 2013",
        },
        description: {
            title: "Titre 8",
            desc: "Description du projet 8",
        },
        images: ['assets/img/portfolio-details-1.jpg',
            'assets/img/portfolio-details-2.jpg',
            'assets/img/portfolio-details-3.jpg']
    },
    {
        id: "project9",
        projectInfo: {
            enterprise: "BNP Paribas AG",
            category: "Data Analysis",
            role: "SAS Business Analyst",
            date: "June 2012 - January 2013",
        },
        description: {
            title: "Titre 9",
            desc: "Description du projet 9",
        },
        images: ['assets/img/portfolio-details-1.jpg',
            'assets/img/portfolio-details-2.jpg',
            'assets/img/portfolio-details-3.jpg']
    },
    {
        id: "project10",
        projectInfo: {
            enterprise: "BNP Paribas AG / Vonessen Bank",
            category: "Data Analysis",
            role: "SAS Business Analyst",
            date: "June 2012 - August 2012",
        },
        description: {
            title: "Titre 10",
            desc: "Description du projet 10",
        },
        images: ['assets/img/portfolio-details-1.jpg',
            'assets/img/portfolio-details-2.jpg',
            'assets/img/portfolio-details-3.jpg']
    },
    {
        id: "project11",
        projectInfo: {
            enterprise: "BNP Paribas AG / Vonessen Bank",
            category: "Data Analysis",
            role: "SAS Business Analyst",
            date: "March 2011 - December 2011",
        },
        description: {
            title: "Titre 11",
            desc: "Description du projet 11",
        },
        images: ['assets/img/portfolio-details-1.jpg',
            'assets/img/portfolio-details-2.jpg',
            'assets/img/portfolio-details-3.jpg']
    },
    {
        id: "project12",
        projectInfo: {
            enterprise: "BNP Paribas AG / Vonessen Bank",
            category: "Data Analysis",
            role: "SAS Business Analyst",
            date: "January 2011 - March 2011",
        },
        description: {
            title: "Titre 12",
            desc: "Description du projet 12",
        },
        images: ['assets/img/portfolio-details-1.jpg',
            'assets/img/portfolio-details-2.jpg',
            'assets/img/portfolio-details-3.jpg']
    }
]

/* const images = documment.getElementById('imagesId'); */


getProfile()

function getProfile() {
 //   const urlPath = window.location.href()
    
    var url_string =  window.location.href; //window.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get("id");

    const profile = profiles.find(element => element.id === c)
    build(profile);

}

function build(profile) {
    document.getElementById('name').innerHTML = profile.projectInfo.enterprise;
document.getElementById('category').innerHTML = profile.projectInfo.category;
document.getElementById('role').innerHTML = profile.projectInfo.role;
document.getElementById('date').innerHTML = profile.projectInfo.date;
document.getElementById('title').innerHTML = profile.description.title;
document.getElementById('desc').innerHTML = profile.description.desc;
document.getElementById('title2').innerHTML = profile.description.title2;
document.getElementById('task').innerHTML = profile.description.task;
} 
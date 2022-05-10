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
            role: "Lead Data Scientist / DevOPs / MLOps",
            date: "June 2020 – June 2021",
        },
        description: {
            title: "Objectives",
            desc: "Development and Maintenance of a Internal Cloud Solution for  Early Crisis Detection.",
            title2: "Tasks",
            /* task: "<br>&#10004 Planning, implementation, quality control, reporting, test <br>&#10004 Implementation of a full text-search engine using R, R Shiny and Elasticsearch <br>&#10004	Organization and implementation of the documentation structure(Confluence) <br>&#10004 Integration and creation of task packages that can be handed over to development units<br><span>&#10004 Further development of a highly secure cloud storage solution in the context of R-Shiny</span> <br><span>&#10004 Consulting and support for DevOps product owners, development team, product management <br>&#10004 Implementation of R-Shiny Web Applications(shiny, testthat, shinyloadtest, shinycannon, profvis)<br>&#10004 Coordination with all stakeholders involved(development teams, business units, department heads) in the agile DevOps development team <br>&#10004 Implementation of a Topic Model for the identification of categories from a corpus of around 10.000 full texts(LSA, LSM using R / Python)</span> <br>&#10004 Analysis, specification, conception and, if necessary, implementation of developments and concepts in the context of Hana and data feeds  <br>&#10004 Coaching and Training of employees in the context of R-Shiny, R-Data Pipeline and the associated tech stack(Docker, R, Python)    ", */

            //Title id of each task
            titleTask1: "Architecture: ",
            titleTask2: "Data Engineering: ",
            titleTask3: "Modelization: ",
            titleTask4: "Visualization: ",
            titleTask5: "CI/CD: ",
            titleTask6: "Coaching: ",
            //Task id of each project
            task1: "Design, Conception and Implementation of an Internal & Highly Secured Cloud Analytics Solution",
            task2: "Conception and Implementation of Data Pipelines (AirFlow, Python, MinIO, SAP HANA)",
            task3: "Implementation of Prediction Models in Context of Early Crisis Detection",
            task4: "Implementation and Deployment of Web Applications (R Shiny, Dash Plotly, CSS, JS, HTML)",
            task5: "Implementation of CI/CD-Pipelines for the Analytics Web Applications (Docker, Kubernetes, GiltLab)",
            task6: "Training Session of Users and Stakeholders Management"
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
            title: "Objectives",
            desc: "Development of an Exposure Manager Solution for the Visualiza-tion of Risk Exposure on an interactive map",
            title2: "Tasks",
            task: "<br>&#10004 Backlog development and agreement with business departments. <br>&#10004 Definition of a project architecture and a workflow for the users of the Exposure Manager. <br>&#10004 Set up of the development environment(R) and installation of required packages(sf, leaflet...). <br>&#10004 Development of R-Scripts for data preparation, kpi calculations(Data Pipeline) and map creation for visualization <br>&#10004 Coaching and Training of employees for the utilization of the Exposure Manager Solution<br>&#10004 Integration of the created Solution into an AWS-Cloud Environment"
            
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
            title: "Objectives",
            desc: "Development of Analytic Models to support and improve Learn-ing and User Experience",
            title2: "Tasks",
            task: "<br>&#10004 Planning Follow-Up Meeting.  <br>&#10004 Definition Analytics Questions <br>&#10004 Identification of required Datapoints <br>&#10004 Development of required Analytics Algorithms <br>&#10004 Organisation and Implementation Ideation Phase. <br>&#10004 Creation of a Project Management Plan (Scope, Timelines, Resources, …). <br>&#10004 Integration of the created Solution into an AWS-Cloud Environment. <br>&#10004 Definition/Implementation eines Analytics-Framework <br>&#10004 Implementation of the Data Pipeline (Extraction data from the production System). <br>&#10004 Data Management und Data Preparation (Data Pipe-line) <br>&#10004 Segmentation User Data/Learning and Assignment Data <br>&#10004 Development of POC-Dashboard mit R Shiny and Deployment in Customer Environment (AWS) <br>&#10004 Conception, Implementation, and deployment of the ETL Pipeline in Customer Environment (AWS). <br>&#10004 Organisation und Implementation of the Document Structure (Confluence). <br>&#10004 Definition of a project architecture and a workflow for the users of the Exposure Manager. "
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
            title: "Objectives",
            desc: "Creation and Implementation of Data Governance Concepts (SAS Environment)",
            title2: "Tasks",
            task: "<br>&#10004 Creation/Implementation of an Authorization/Authentication Concept (roles and rights)<br>&#10004 Development of SAS Macros for automated loading AD-Information into the SAS Management Console <br>&#10004 Creation and Implementation of a Deletion Concept <br>&#10004 Development of SAS Macros for automated deletion Tasks <br>&#10004 Implementation of Review Process for the Role and Rights Concept <br>&#10004 Development and Implementation of a Capacity Management Concept <br>&#10004 Marketing Campaign Selection (SAS) <br>&#10004 Descriptive Analysis to support Marketing Activities <br>&#10004 Technical and Content Development of Campaign Selection Process) <br>&#10004 Organisation und Implementation of the Documenta-tion Structure (Confluence) <br>&#10004 Coordination of involved Stakeholders (Meetings-Coordination, Follow Up) <br>&#10004 Planning and Task-Definition (Creation and Review JIRA-Tickets) "
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
            title: "Objectives",
            desc: "Development of a statistical Risk Tool for online Fraud Detec-tion /Fraud Management",
            title2: "Tasks",
            task: "<br>&#10004 Business Concept <br>&#10004 Test Concept<br>&#10004 Implementation of the entire Data Processing Flow <br>&#10004 Scoring/Modelization <br>&#10004 Dashboard-Reporting (Shiny, R Markdown) <br>&#10004 System Monitoring <br>&#10004 Stakeholder-Management <br>&#10004 Software Development using R"
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
            title: "Objectives",
            desc: "Development of statistical models to predict machine sta-tus/behaviour based on sensor data",
            title2: "Tasks",
            task: "<br>&#10004 Customer interviews to identify pain points<br>&#10004 Brainstorm phase with Process Experts to analyse Solutions Space (635-Methodology) <br>&#10004 Agile-Working Modus (SCRUM) <br>&#10004 Story Definition, Cost estimation  <br>&#10004 Backlog-Definition <br>&#10004 Database Modell Definition <br>&#10004 Data Quality Assessment and Data Cleansing  <br>&#10004 Model Development  <br>&#10004 Model Deployment und Model Monitoring"
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
            title: "Objectives",
            desc: "Development/Monitoring of a SAS data warehouse and im-provement of internal monthly data provision  0% Downtime",
            title2: "Tasks",
            task: "<br>&#10004 Implementation of a change management system for collecting and solving internal customer requests <br>&#10004 Data Management focusing on the Monitoring and Development of a SAS-Datawarehouse <br>&#10004 Reporting according to requirements of various de-partments (Risk, Controlling, Finance…) <br>&#10004 Data Provisioning <br>&#10004 Data Quality Assessment <br>&#10004 Mapping of new requests to database structure and data elements <br>&#10004 Algorithms Development/Continuous Development <br>&#10004 Test and Documentation / Monitoring of Approval Process "
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
            title: "Objectives",
            desc: "Application of statistical-mathematical methods to determine the minimum interest rate for the prolongation. The calculated interest rate should be competitive but still profitable for the bank",
            title2: "Tasks",
            task: "<br>&#10004 Analysis and specification of requirements (draft of technical concept) <br>&#10004	Contribution to the definition of the IT-requirement and the target IT-infrastructure<br>&#10004 Contribution to creation of the IT-concept <br>&#10004 Leadership of Business Analyst Team (2 persons) <br>&#10004 Selection of statistical-mathematical methods <br>&#10004 Definition and selection of criteria relevant for modelling (variable selection) <br>&#10004 Implementation of Analytics Codes (Newton and La-grange Approximation) <br>&#10004 Coordination and execution of technical tests <br>&#10004 Backtesting und Monitoring Review after Implemen-tation and Deployment"
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
            title: "Objectives",
            desc: "Update of existing scoring models (application score, PD, LGD) and development of an automated score monitoring system that can be used for all branches of the BNP Group – fully automated jobs – Job scheduling",
            title2: "Tasks",
            task: "<br>&#10004 Analysis and specification of the requirements (Contribution to drafting of the technical concept)  <br>&#10004 Contribution to the creation of an IT-concept <br>&#10004 Development of Data Marts for modelling purposes (Training/Test/Validation/Production) - Definition of default criterion and cut-off <br>&#10004 Selection of statistical methods <br>&#10004 Development of Analytics Codes (SAS, Logistic Regression)  <br>&#10004 Selection for scoring of the most relevant factors <br>&#10004 Development and Implementation (Job Automation) <br>&#10004 Quarterly Reporting <br>&#10004 Ad-Hoc Analyses"
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
            date: "Jan 2012 - August 2012",
        },
        description: {
            title: "Objectives",
            desc: "Modelling the likelihood of disbursement and segmentation of the portfolio from the point of view of risk management on the one hand and from the perspective of the sales department on the other",
            title2: "Tasks",
            task: "<br>&#10004 Analysis and specification of the requirements (Contribution to drafting of the technical concept) and segment definition <br>&#10004 Mitarbeit an der Definition der DV-Anforderungen und der Ziel-IT-Infrastruktur <br>&#10004 Contribution to the definition of required IT-infrastructure and IT-infrastructure <br>&#10004 Development and implementation (portfolio analy-sis, potential analysis, forecast analysis) <br>&#10004 Selection relevant statistical methods <br>&#10004 Development of Analytics Codes  <br>&#10004 Backtesting und Monitoring after Implementation and Deployment "
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
            title: "Objectives",
            desc: "Development of a monitoring system of the risk structure of ex-isting portfolio of real estate loans with the aim of making ad-justments if required (Pricing, Collection, ….)",
            title2: "Tasks",
            task: " <br>&#10004 Analysis and specification of the requirements (Contribution to drafting of the technical concept)  <br>&#10004 Definition of risk criteria in agreement with the process experts <br>&#10004 Contribution to creation of IT-concept <br>&#10004 Model Development (Variable Selection, Descriptive Analysis, ANOVA, Gini, ...) <br>&#10004 Selection relevant statistical methods <br>&#10004 Development Analytics Codes for Classification <br>&#10004 Backtesting, Documentation and Monitoring <br>&#10004 Creation of an AS-400 Table containing Risk-Classes <br>&#10004 Monthly Reporting "
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
            title: "Objectives",
            desc: "Development of an automated bank reporting system including dashboards (collections/operation) for monitoring specific func-tionalities of the banking process",
            title2: "Tasks",
            task: "<br>&#10004 Definition relevant Key Performance Indicators (KPI) <br>&#10004 Creation required Data Marts for KPI Calculations <br>&#10004 Implementation of SAS-Jobs for KPI-Calculations <br>&#10004 Monthly Reporting <br>&#10004 Business Analyse monthly results <br>&#10004 Stakeholder Management <br>&#10004 Performance Optimization <br>&#10004 Ad-Hoc Analyse"
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
// document.getElementById('category').innerHTML = profile.projectInfo.category;
document.getElementById('role').innerHTML = profile.projectInfo.role;
document.getElementById('date').innerHTML = profile.projectInfo.date;
document.getElementById('title').innerHTML = profile.description.title;
document.getElementById('desc').innerHTML = profile.description.desc;
document.getElementById('title2').innerHTML = profile.description.title2;
document.getElementById('task').innerHTML = profile.description.task;

document.getElementById('task1').innerHTML = profile.description.task1;
document.getElementById('task2').innerHTML = profile.description.task2;
document.getElementById('task3').innerHTML = profile.description.task3;
document.getElementById('task4').innerHTML = profile.description.task4;
document.getElementById('task5').innerHTML = profile.description.task5;
document.getElementById('task6').innerHTML = profile.description.task6;


document.getElementById('titleTask1').innerHTML = profile.description.titleTask1;
document.getElementById('titleTask2').innerHTML = profile.description.titleTask2;
document.getElementById('titleTask3').innerHTML = profile.description.titleTask3;
document.getElementById('titleTask4').innerHTML = profile.description.titleTask4;
document.getElementById('titleTask5').innerHTML = profile.description.titleTask5;
document.getElementById('titleTask6').innerHTML = profile.description.titleTask6;


} 
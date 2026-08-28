/* =========================================================
   WHISTLE PRO WEBSITE
   Main application logic
========================================================= */


/* =========================================================
   CONFIGURATION
========================================================= */

const APP_STORE_URL = "#";

const SLIDE_DURATION = 6000;


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    en: {
        brandTagline: "Built by referees. For referees.",

        menuHome: "Home",
        menuPresentation: "Presentation",
        menuTutorials: "Tutorials",
        menuLegal: "Privacy & Legal",
        menuDownload: "Download on the App Store",

        heroKicker: "MATCH MANAGEMENT",

        featureSchedule: "Schedule",
        featureMatch: "Match & Results",
        featureImport: "Import / Export",
        featureAll: "All Features",

        back: "Back",

        allFeaturesTitle: "Everything you need. On and off the field.",

        featuresWatchTitle: "On the field",
        featuresPhoneTitle: "After the match",
        featuresDataTitle: "Data & reporting",
        featuresExpensesTitle: "Expenses & mileage",

        presentationTitle: "Discover Whistle Pro",
        presentationDescription:
            "From match import to the final report, see how Whistle Pro connects your iPhone and Apple Watch.",

        presentationVideo: "Presentation video",

        availabilityNote:
            "Spordle integration is currently available in Canada. Additional platform connectors are in development.",

        tutorialsTitle: "Tutorials",

        privacy: "Privacy Policy",
        legalNotice: "Legal Notice"
    },


    fr: {
        brandTagline: "Créée par des arbitres. Pour les arbitres.",

        menuHome: "Accueil",
        menuPresentation: "Présentation",
        menuTutorials: "Tutoriels",
        menuLegal: "Confidentialité et mentions légales",
        menuDownload: "Télécharger sur l’App Store",

        heroKicker: "GESTION DE MATCH",

        featureSchedule: "Calendrier",
        featureMatch: "Match et résultats",
        featureImport: "Import / Export",
        featureAll: "Toutes les fonctionnalités",

        back: "Retour",

        allFeaturesTitle:
            "Tout ce qu’il vous faut. Sur le terrain et après le match.",

        featuresWatchTitle: "Sur le terrain",
        featuresPhoneTitle: "Après le match",
        featuresDataTitle: "Données et rapports",
        featuresExpensesTitle: "Dépenses et kilométrage",

        presentationTitle: "Découvrez Whistle Pro",
        presentationDescription:
            "De l’importation du match jusqu’au rapport final, découvrez comment Whistle Pro relie votre iPhone et votre Apple Watch.",

        presentationVideo: "Vidéo de présentation",

        availabilityNote:
            "L’intégration Spordle est actuellement disponible au Canada. Des connecteurs vers d’autres plateformes sont en développement.",

        tutorialsTitle: "Tutoriels",

        privacy: "Politique de confidentialité",
        legalNotice: "Mentions légales"
    },


    es: {
        brandTagline: "Creada por árbitros. Para árbitros.",

        menuHome: "Inicio",
        menuPresentation: "Presentación",
        menuTutorials: "Tutoriales",
        menuLegal: "Privacidad y avisos legales",
        menuDownload: "Descargar en App Store",

        heroKicker: "GESTIÓN DE PARTIDOS",

        featureSchedule: "Calendario",
        featureMatch: "Partido y resultados",
        featureImport: "Importar / Exportar",
        featureAll: "Todas las funciones",

        back: "Volver",

        allFeaturesTitle:
            "Todo lo que necesitas. En el campo y después del partido.",

        featuresWatchTitle: "En el campo",
        featuresPhoneTitle: "Después del partido",
        featuresDataTitle: "Datos e informes",
        featuresExpensesTitle: "Gastos y kilometraje",

        presentationTitle: "Descubre Whistle Pro",
        presentationDescription:
            "Desde la importación del partido hasta el informe final, descubre cómo Whistle Pro conecta tu iPhone y Apple Watch.",

        presentationVideo: "Video de presentación",

        availabilityNote:
            "La integración con Spordle está disponible actualmente en Canadá. Se están desarrollando conectores para otras plataformas.",

        tutorialsTitle: "Tutoriales",

        privacy: "Política de privacidad",
        legalNotice: "Aviso legal"
    }

};


/* =========================================================
   HOME SLIDES
========================================================= */

const slides = {

    en: [
        {
            title: "Plan your matches",
            description:
                "Import your schedule or create matches directly on iPhone. Teams, fields and match details are ready before you step onto the field.",
            image: ""
        },
        {
            title: "Referee. Don't manage a timer.",
            description:
                "Your Apple Watch handles the clock, score, cards, player numbers, stoppages, overtime and shootouts while you focus on the match.",
            image: ""
        },
        {
            title: "From schedule to match report",
            description:
                "Import scheduled matches and rosters, then export completed match data and reports directly from Whistle Pro.",
            image: ""
        }
    ],

    fr: [
        {
            title: "Planifiez vos matchs",
            description:
                "Importez votre calendrier ou créez vos matchs directement sur iPhone. Équipes, terrains et détails sont prêts avant votre arrivée sur le terrain.",
            image: ""
        },
        {
            title: "Arbitrez. Whistle Pro gère le reste.",
            description:
                "Votre Apple Watch gère le chrono, le score, les cartons, les numéros de joueurs, les pauses, les prolongations et les tirs au but.",
            image: ""
        },
        {
            title: "Du calendrier au rapport de match",
            description:
                "Importez vos matchs et compositions, puis exportez les résultats, données et rapports directement depuis Whistle Pro.",
            image: ""
        }
    ],

    es: [
        {
            title: "Planifica tus partidos",
            description:
                "Importa tu calendario o crea partidos directamente en el iPhone. Equipos, campos y detalles estarán listos antes de llegar al terreno.",
            image: ""
        },
        {
            title: "Arbitra. Whistle Pro se ocupa del resto.",
            description:
                "Tu Apple Watch gestiona el cronómetro, marcador, tarjetas, jugadores, pausas, prórrogas y tandas de penaltis.",
            image: ""
        },
        {
            title: "Del calendario al informe",
            description:
                "Importa partidos y alineaciones, y luego exporta resultados, datos e informes directamente desde Whistle Pro.",
            image: ""
        }
    ]

};


/* =========================================================
   FEATURES
========================================================= */

const featureLists = {

    en: {
        watch: [
            "Smart match timer",
            "Automatic pauses",
            "Goals and score tracking",
            "Yellow and red cards",
            "Player numbers",
            "Overtime and shootouts",
            "End-of-period alerts",
            "Futsal accumulated fouls",
            "Real-time Watch and iPhone synchronization"
        ],

        phone: [
            "Complete match history",
            "Detailed match reports",
            "Match review on a larger screen",
            "Upcoming match planning",
            "Team and roster management",
            "Field and category management"
        ],

        data: [
            "CSV and Excel exports",
            "PDF match reports",
            "Statistics and filters",
            "External calendar import",
            "Spordle integration in Canada",
            "Apple Health and GPS integration"
        ],

        expenses: [
            "Equipment expenses",
            "Meal expenses",
            "Travel expenses",
            "Recurring expenses",
            "Mileage tracking",
            "Annual totals",
            "CSV and Excel export"
        ]
    },


    fr: {
        watch: [
            "Chronomètre intelligent",
            "Pauses automatiques",
            "Gestion des buts et du score",
            "Cartons jaunes et rouges",
            "Numéros de joueurs",
            "Prolongations et tirs au but",
            "Alertes de fin de période",
            "Fautes cumulées en futsal",
            "Synchronisation Watch et iPhone en temps réel"
        ],

        phone: [
            "Historique complet des matchs",
            "Rapports de match détaillés",
            "Consultation sur grand écran",
            "Planification des matchs à venir",
            "Gestion des équipes et des compositions",
            "Gestion des terrains et catégories"
        ],

        data: [
            "Exports CSV et Excel",
            "Rapports PDF",
            "Statistiques et filtres",
            "Importation de calendriers externes",
            "Intégration Spordle au Canada",
            "Intégration Apple Santé et GPS"
        ],

        expenses: [
            "Dépenses d’équipement",
            "Repas",
            "Déplacements",
            "Dépenses récurrentes",
            "Kilométrage",
            "Totaux annuels",
            "Export CSV et Excel"
        ]
    },


    es: {
        watch: [
            "Cronómetro inteligente",
            "Pausas automáticas",
            "Goles y marcador",
            "Tarjetas amarillas y rojas",
            "Números de jugadores",
            "Prórrogas y penaltis",
            "Alertas de fin de periodo",
            "Faltas acumuladas de futsal",
            "Sincronización Watch-iPhone en tiempo real"
        ],

        phone: [
            "Historial completo de partidos",
            "Informes detallados",
            "Consulta en pantalla grande",
            "Planificación de próximos partidos",
            "Gestión de equipos y plantillas",
            "Gestión de campos y categorías"
        ],

        data: [
            "Exportación CSV y Excel",
            "Informes PDF",
            "Estadísticas y filtros",
            "Importación de calendarios externos",
            "Integración Spordle en Canadá",
            "Integración Apple Health y GPS"
        ],

        expenses: [
            "Gastos de equipamiento",
            "Comidas",
            "Viajes",
            "Gastos recurrentes",
            "Kilometraje",
            "Totales anuales",
            "Exportación CSV y Excel"
        ]
    }

};


/* =========================================================
   TUTORIALS
========================================================= */

const tutorials = {

    en: [
        {
            id: "match-setup",
            title: "Match setup",
            description: "Prepare a match before heading onto the field.",
            video: ""
        },
        {
            id: "import",
            title: "Import matches",
            description: "Import scheduled matches from supported platforms.",
            video: ""
        },
        {
            id: "roster",
            title: "Roster management",
            description: "Review and manage players and team staff.",
            video: ""
        },
        {
            id: "start-match",
            title: "Start a match",
            description: "Launch your match and select the team taking kickoff.",
            video: ""
        },
        {
            id: "goals-cards",
            title: "Goals and cards",
            description: "Record goals, cards and player numbers quickly.",
            video: ""
        },
        {
            id: "match-end",
            title: "End a match",
            description: "Finish periods, overtime and the complete match.",
            video: ""
        },
        {
            id: "export",
            title: "Export data",
            description: "Export reports and match data in PDF, CSV or Excel.",
            video: ""
        },
        {
            id: "expenses",
            title: "Expenses",
            description: "Track referee expenses and mileage.",
            video: ""
        }
    ],


    fr: [
        {
            id: "match-setup",
            title: "Préparer un match",
            description: "Préparez votre match avant d’arriver sur le terrain.",
            video: ""
        },
        {
            id: "import",
            title: "Importer les matchs",
            description: "Importez les matchs depuis les plateformes compatibles.",
            video: ""
        },
        {
            id: "roster",
            title: "Gestion des compositions",
            description: "Consultez et gérez les joueurs et membres du personnel.",
            video: ""
        },
        {
            id: "start-match",
            title: "Démarrer un match",
            description: "Démarrez le match et sélectionnez l’équipe qui engage.",
            video: ""
        },
        {
            id: "goals-cards",
            title: "Buts et cartons",
            description: "Inscrivez rapidement les buts, cartons et numéros de joueurs.",
            video: ""
        },
        {
            id: "match-end",
            title: "Terminer le match",
            description: "Gérez la fin des périodes, prolongations et du match.",
            video: ""
        },
        {
            id: "export",
            title: "Exporter les données",
            description: "Exportez vos rapports et données en PDF, CSV ou Excel.",
            video: ""
        },
        {
            id: "expenses",
            title: "Dépenses",
            description: "Suivez vos dépenses d’arbitrage et votre kilométrage.",
            video: ""
        }
    ],


    es: [
        {
            id: "match-setup",
            title: "Preparar un partido",
            description: "Prepara el partido antes de llegar al campo.",
            video: ""
        },
        {
            id: "import",
            title: "Importar partidos",
            description: "Importa partidos desde plataformas compatibles.",
            video: ""
        },
        {
            id: "roster",
            title: "Gestión de plantillas",
            description: "Consulta y gestiona jugadores y personal técnico.",
            video: ""
        },
        {
            id: "start-match",
            title: "Iniciar un partido",
            description: "Inicia el partido y selecciona el equipo que realiza el saque inicial.",
            video: ""
        },
        {
            id: "goals-cards",
            title: "Goles y tarjetas",
            description: "Registra goles, tarjetas y números de jugador.",
            video: ""
        },
        {
            id: "match-end",
            title: "Finalizar el partido",
            description: "Gestiona el final de periodos, prórrogas y partido.",
            video: ""
        },
        {
            id: "export",
            title: "Exportar datos",
            description: "Exporta informes y datos en PDF, CSV o Excel.",
            video: ""
        },
        {
            id: "expenses",
            title: "Gastos",
            description: "Controla gastos y kilometraje.",
            video: ""
        }
    ]

};


/* =========================================================
   LEGAL CONTENT
========================================================= */

const legalContent = {

    en: {
        privacy: `
            <h1>Privacy Policy</h1>
            <p><strong>Last updated: August 2026</strong></p>

            <h2>1. Data Collection</h2>
            <p>
                Whistle Pro does not collect personally identifiable information
                such as your name, postal address or email address.
            </p>

            <p>
                Match, calendar and configuration data are stored locally on
                your iPhone and Apple Watch and may be synchronized using
                Apple's services.
            </p>

            <h2>2. Apple Health and GPS</h2>
            <p>
                If enabled by the user, Whistle Pro may read or write
                performance-related information using Apple HealthKit and may
                use location services for field and mileage-related features.
            </p>

            <h2>3. Data Sharing</h2>
            <p>
                Whistle Pro does not sell user data and does not operate
                advertising or tracking systems.
            </p>

            <h2>4. Exported Data</h2>
            <p>
                Match reports and exported files remain under the user's
                control when they are generated or shared.
            </p>

            <h2>5. Contact</h2>
            <p>
                Privacy inquiries may be sent through the official
                Whistle Pro support contact.
            </p>
        `,

        notice: `
            <h1>Legal Notice</h1>

            <h2>Developer</h2>
            <p>
                Whistle Pro is developed and distributed by an independent
                developer based in Blainville, Quebec, Canada.
            </p>

            <h2>Purchases and subscriptions</h2>
            <p>
                Purchases and subscriptions are processed through Apple's
                App Store. Pricing, renewals and refunds are subject to Apple's
                applicable terms and policies.
            </p>

            <h2>Availability</h2>
            <p>
                Certain external integrations may only be available in specific
                countries or regions. Additional platform connectors are under
                development.
            </p>

            <h2>Governing law</h2>
            <p>
                The service is provided from Canada, subject to applicable
                mandatory consumer protection legislation.
            </p>
        `
    },


    fr: {
        privacy: `
            <h1>Politique de confidentialité</h1>
            <p><strong>Dernière mise à jour : août 2026</strong></p>

            <h2>1. Données collectées</h2>
            <p>
                Whistle Pro ne recueille aucune donnée personnelle identifiable
                telle que votre nom, votre adresse postale ou votre adresse
                courriel.
            </p>

            <p>
                Les données de match, de calendrier et de configuration sont
                conservées localement sur votre iPhone et votre Apple Watch et
                peuvent être synchronisées à l'aide des services Apple.
            </p>

            <h2>2. Apple Santé et GPS</h2>
            <p>
                Lorsque l'utilisateur les active, Whistle Pro peut lire ou
                écrire certaines données de performance avec Apple HealthKit et
                utiliser les services de localisation pour les fonctionnalités
                liées aux terrains et au kilométrage.
            </p>

            <h2>3. Partage des données</h2>
            <p>
                Whistle Pro ne vend aucune donnée utilisateur et n'utilise
                aucun système publicitaire ou de suivi comportemental.
            </p>

            <h2>4. Données exportées</h2>
            <p>
                Les rapports de match et fichiers exportés demeurent sous le
                contrôle de l'utilisateur lorsqu'ils sont générés ou partagés.
            </p>

            <h2>5. Contact</h2>
            <p>
                Les demandes relatives à la confidentialité peuvent être
                transmises par le canal officiel de soutien de Whistle Pro.
            </p>
        `,

        notice: `
            <h1>Mentions légales</h1>

            <h2>Développeur</h2>
            <p>
                Whistle Pro est développé et distribué par un développeur
                indépendant établi à Blainville, Québec, Canada.
            </p>

            <h2>Achats et abonnements</h2>
            <p>
                Les achats et abonnements sont traités par l'App Store d'Apple.
                Les prix, renouvellements et remboursements sont soumis aux
                modalités et politiques applicables d'Apple.
            </p>

            <h2>Disponibilité</h2>
            <p>
                Certaines intégrations externes peuvent être offertes seulement
                dans certains pays ou régions. D'autres connecteurs sont
                actuellement en développement.
            </p>

            <h2>Droit applicable</h2>
            <p>
                Le service est fourni depuis le Canada, sous réserve des lois
                impératives applicables en matière de protection des
                consommateurs.
            </p>
        `
    },


    es: {
        privacy: `
            <h1>Política de privacidad</h1>
            <p><strong>Última actualización: agosto de 2026</strong></p>

            <h2>1. Recopilación de datos</h2>
            <p>
                Whistle Pro no recopila información personal identificable
                como nombre, dirección postal o correo electrónico.
            </p>

            <p>
                Los datos de partidos, calendario y configuración se almacenan
                localmente en el iPhone y Apple Watch y pueden sincronizarse
                mediante servicios de Apple.
            </p>

            <h2>2. Apple Health y GPS</h2>
            <p>
                Si el usuario lo activa, Whistle Pro puede leer o escribir
                determinados datos de rendimiento mediante Apple HealthKit y
                utilizar la ubicación para funciones relacionadas con campos
                y kilometraje.
            </p>

            <h2>3. Compartición de datos</h2>
            <p>
                Whistle Pro no vende datos de usuarios y no utiliza sistemas
                publicitarios ni de seguimiento.
            </p>

            <h2>4. Datos exportados</h2>
            <p>
                Los informes y archivos exportados permanecen bajo el control
                del usuario.
            </p>

            <h2>5. Contacto</h2>
            <p>
                Las consultas de privacidad pueden enviarse mediante el canal
                oficial de soporte de Whistle Pro.
            </p>
        `,

        notice: `
            <h1>Aviso legal</h1>

            <h2>Desarrollador</h2>
            <p>
                Whistle Pro es desarrollado y distribuido por un desarrollador
                independiente con sede en Blainville, Quebec, Canadá.
            </p>

            <h2>Compras y suscripciones</h2>
            <p>
                Las compras y suscripciones se procesan mediante Apple App
                Store y están sujetas a sus términos y políticas.
            </p>

            <h2>Disponibilidad</h2>
            <p>
                Algunas integraciones externas pueden estar disponibles solo en
                determinados países o regiones.
            </p>

            <h2>Ley aplicable</h2>
            <p>
                El servicio se presta desde Canadá, sujeto a la legislación
                obligatoria aplicable de protección al consumidor.
            </p>
        `
    }

};


/* =========================================================
   STATE
========================================================= */

let currentLanguage = detectLanguage();

let currentSlide = 0;

let currentTutorial = 0;

let slideTimer = null;

let currentLegalSection = "privacy";


/* =========================================================
   DOM REFERENCES
========================================================= */

const heroTitle = document.getElementById("heroTitle");
const heroDescription = document.getElementById("heroDescription");
const heroImage = document.getElementById("heroImage");

const featureButtons = document.querySelectorAll("[data-slide]");

const indicators = document.querySelectorAll(".indicator");

const languageSelector = document.getElementById("languageSelector");

const menuButton = document.getElementById("menuButton");
const closeMenuButton = document.getElementById("closeMenuButton");
const mainMenu = document.getElementById("mainMenu");
const menuOverlay = document.getElementById("menuOverlay");

const tutorialSelector = document.getElementById("tutorialSelector");
const tutorialList = document.getElementById("tutorialList");

const tutorialTitle = document.getElementById("tutorialTitle");
const tutorialDescription = document.getElementById("tutorialDescription");
const tutorialVideoLabel = document.getElementById("tutorialVideoLabel");

const legalContentContainer = document.getElementById("legalContent");

const privacyTab = document.getElementById("privacyTab");
const legalTab = document.getElementById("legalTab");


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    languageSelector.value = currentLanguage;

    document.documentElement.lang = currentLanguage;

    document.getElementById("currentYear").textContent =
        new Date().getFullYear();

    document.getElementById("appStoreButton").href =
        APP_STORE_URL;

    document.getElementById("menuAppStoreButton").href =
        APP_STORE_URL;

    updateTranslations();

    renderFeatures();

    renderTutorialNavigation();

    renderTutorial();

    renderLegalContent();

    showSlide(0);

    startSlideshow();

    handleURL();

});


/* =========================================================
   LANGUAGE
========================================================= */

function detectLanguage() {

    const savedLanguage =
        localStorage.getItem("whistleProLanguage");

    if (
        savedLanguage === "en" ||
        savedLanguage === "fr" ||
        savedLanguage === "es"
    ) {
        return savedLanguage;
    }


    const browserLanguage =
        navigator.language.toLowerCase();


    if (browserLanguage.startsWith("fr")) {
        return "fr";
    }

    if (browserLanguage.startsWith("es")) {
        return "es";
    }

    return "en";
}


languageSelector.addEventListener("change", event => {

    currentLanguage = event.target.value;

    localStorage.setItem(
        "whistleProLanguage",
        currentLanguage
    );

    document.documentElement.lang =
        currentLanguage;

    updateTranslations();

    renderFeatures();

    renderTutorialNavigation();

    renderTutorial();

    renderLegalContent();

    showSlide(currentSlide);

});


function updateTranslations() {

    const dictionary =
        translations[currentLanguage];

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            if (dictionary[key]) {
                element.textContent =
                    dictionary[key];
            }

        });

}


/* =========================================================
   HOME SLIDESHOW
========================================================= */

function showSlide(index) {

    const languageSlides =
        slides[currentLanguage];

    currentSlide =
        index % languageSlides.length;

    const slide =
        languageSlides[currentSlide];


    heroTitle.textContent =
        slide.title;

    heroDescription.textContent =
        slide.description;


    if (slide.image) {

        heroImage.src =
            slide.image;

        heroImage.alt =
            slide.title;

        heroImage.hidden =
            false;

        document.querySelector(
            ".media-placeholder"
        ).style.display = "none";

    } else {

        heroImage.hidden =
            true;

        document.querySelector(
            ".media-placeholder"
        ).style.display = "flex";

    }


    featureButtons.forEach(
        (button, index) => {

            button.classList.toggle(
                "active",
                index === currentSlide
            );

        }
    );


    indicators.forEach(
        (indicator, index) => {

            indicator.classList.toggle(
                "active",
                index === currentSlide
            );

        }
    );

}


function nextSlide() {

    showSlide(
        (currentSlide + 1) %
        slides[currentLanguage].length
    );

}


function startSlideshow() {

    stopSlideshow();

    slideTimer =
        setInterval(
            nextSlide,
            SLIDE_DURATION
        );

}


function stopSlideshow() {

    if (slideTimer) {

        clearInterval(slideTimer);

        slideTimer = null;

    }

}


featureButtons.forEach(button => {

    button.addEventListener("click", () => {

        const index =
            Number(button.dataset.slide);

        showSlide(index);

        stopSlideshow();

        setTimeout(
            startSlideshow,
            15000
        );

    });

});


/* =========================================================
   VIEWS
========================================================= */

document
    .querySelectorAll("[data-view]")
    .forEach(element => {

        element.addEventListener(
            "click",
            () => {

                const view =
                    element.dataset.view;

                showView(view);

                closeMenu();

            }
        );

    });


function showView(viewName) {

    document
        .querySelectorAll(".view")
        .forEach(view => {

            view.classList.remove(
                "active-view"
            );

        });


    const target =
        document.getElementById(
            `${viewName}View`
        );


    if (target) {

        target.classList.add(
            "active-view"
        );

        window.history.replaceState(
            null,
            "",
            `#${viewName}`
        );

    }


    if (viewName === "home") {

        startSlideshow();

    } else {

        stopSlideshow();

    }

}


/* =========================================================
   MENU
========================================================= */

menuButton.addEventListener(
    "click",
    openMenu
);

closeMenuButton.addEventListener(
    "click",
    closeMenu
);

menuOverlay.addEventListener(
    "click",
    closeMenu
);


function openMenu() {

    mainMenu.classList.add("open");

    menuOverlay.classList.add("visible");

    mainMenu.setAttribute(
        "aria-hidden",
        "false"
    );

}


function closeMenu() {

    mainMenu.classList.remove("open");

    menuOverlay.classList.remove("visible");

    mainMenu.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================================
   FEATURES
========================================================= */

function renderFeatures() {

    const features =
        featureLists[currentLanguage];


    renderList(
        "watchFeatures",
        features.watch
    );

    renderList(
        "phoneFeatures",
        features.phone
    );

    renderList(
        "dataFeatures",
        features.data
    );

    renderList(
        "expenseFeatures",
        features.expenses
    );

}


function renderList(elementId, items) {

    const list =
        document.getElementById(elementId);

    list.innerHTML = "";

    items.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent = item;

        list.appendChild(li);

    });

}


/* =========================================================
   TUTORIALS
========================================================= */

function renderTutorialNavigation() {

    const languageTutorials =
        tutorials[currentLanguage];


    tutorialList.innerHTML = "";

    tutorialSelector.innerHTML = "";


    languageTutorials.forEach(
        (tutorial, index) => {


            const button =
                document.createElement("button");

            button.type =
                "button";

            button.textContent =
                tutorial.title;

            button.classList.toggle(
                "active",
                index === currentTutorial
            );


            button.addEventListener(
                "click",
                () => {

                    currentTutorial =
                        index;

                    renderTutorialNavigation();

                    renderTutorial();

                    updateTutorialURL();

                }
            );


            tutorialList.appendChild(
                button
            );


            const option =
                document.createElement("option");

            option.value =
                index;

            option.textContent =
                tutorial.title;

            tutorialSelector.appendChild(
                option
            );

        }
    );


    tutorialSelector.value =
        currentTutorial;

}


tutorialSelector.addEventListener(
    "change",
    event => {

        currentTutorial =
            Number(event.target.value);

        renderTutorialNavigation();

        renderTutorial();

        updateTutorialURL();

    }
);


function renderTutorial() {

    const tutorial =
        tutorials[currentLanguage]
        [currentTutorial];


    tutorialTitle.textContent =
        tutorial.title;

    tutorialDescription.textContent =
        tutorial.description;

    tutorialVideoLabel.textContent =
        tutorial.title;

}


function updateTutorialURL() {

    const tutorial =
        tutorials[currentLanguage]
        [currentTutorial];

    window.history.replaceState(
        null,
        "",
        `#tutorials/${tutorial.id}`
    );

}


/* =========================================================
   LEGAL
========================================================= */

privacyTab.addEventListener(
    "click",
    () => {

        currentLegalSection =
            "privacy";

        renderLegalContent();

    }
);


legalTab.addEventListener(
    "click",
    () => {

        currentLegalSection =
            "notice";

        renderLegalContent();

    }
);


function renderLegalContent() {

    legalContentContainer.innerHTML =
        legalContent[currentLanguage]
        [currentLegalSection];


    privacyTab.classList.toggle(
        "active",
        currentLegalSection === "privacy"
    );


    legalTab.classList.toggle(
        "active",
        currentLegalSection === "notice"
    );

}


/* =========================================================
   URL / DEEP LINKING
========================================================= */

function handleURL() {

    const hash =
        window.location.hash.replace(
            "#",
            ""
        );


    if (!hash) {

        showView("home");

        return;

    }


    if (
        hash.startsWith(
            "tutorials/"
        )
    ) {

        const tutorialId =
            hash.split("/")[1];

        const index =
            tutorials[currentLanguage]
            .findIndex(
                tutorial =>
                    tutorial.id ===
                    tutorialId
            );


        if (index >= 0) {

            currentTutorial =
                index;

            renderTutorialNavigation();

            renderTutorial();

        }


        showView("tutorials");

        return;

    }


    const validViews = [
        "home",
        "presentation",
        "tutorials",
        "features",
        "legal"
    ];


    if (
        validViews.includes(hash)
    ) {

        showView(hash);

    } else {

        showView("home");

    }

}


window.addEventListener(
    "hashchange",
    handleURL
);


/* =========================================================
   KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeMenu();

        }

    }
);

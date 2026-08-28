/* =========================================================
   WHISTLE PRO WEBSITE
========================================================= */


/* =========================================================
   CONFIG
========================================================= */

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

        menuPrivacy: "Privacy Policy",
        menuLegal: "European Privacy Policy",

        featurePrepare: "Prepare",
        featureReferee: "Referee",
        featureReview: "Review",
        featureAll: "All Features",

        back: "Back",

        allFeaturesTitle:
            "Everything you need. On and off the field.",

        featuresWatchTitle: "On the field",
        featuresPhoneTitle: "After the match",
        featuresDataTitle: "Data & reporting",
        featuresExpensesTitle: "Expenses & mileage",

        presentationTitle: "Discover Whistle Pro",

        presentationDescription:
            "From match preparation to the final report, discover how Whistle Pro connects your iPhone and Apple Watch.",

        presentationVideo: "Presentation video",

        availabilityNote:
            "Spordle integration is currently available in Canada. Additional platform connectors are in development.",

        tutorialsTitle: "Tutorials"
    },


    fr: {
        brandTagline: "Créée par des arbitres. Pour les arbitres.",

        menuHome: "Accueil",
        menuPresentation: "Présentation",
        menuTutorials: "Tutoriels",

        menuPrivacy: "Politique de confidentialité",
        menuLegal: "Politique de confidentialité Européenne",

        featurePrepare: "Préparer",
        featureReferee: "Arbitrer",
        featureReview: "Analyser",
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
            "De la préparation du match jusqu’au rapport final, découvrez comment Whistle Pro relie votre iPhone et votre Apple Watch.",

        presentationVideo: "Vidéo de présentation",

        availabilityNote:
            "L’intégration Spordle est actuellement disponible au Canada. Des connecteurs vers d’autres plateformes sont en développement.",

        tutorialsTitle: "Tutoriels"
    },


    es: {
        brandTagline: "Creada por árbitros. Para árbitros.",

        menuHome: "Inicio",
        menuPresentation: "Presentación",
        menuTutorials: "Tutoriales",

        menuPrivacy: "Política de privacidad",
        menuLegal: "Política de privacidad europea",

        featurePrepare: "Preparar",
        featureReferee: "Arbitrar",
        featureReview: "Revisar",
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
            "Desde la preparación del partido hasta el informe final, descubre cómo Whistle Pro conecta tu iPhone y Apple Watch.",

        presentationVideo: "Video de presentación",

        availabilityNote:
            "La integración con Spordle está disponible actualmente en Canadá. Se están desarrollando conectores para otras plataformas.",

        tutorialsTitle: "Tutoriales"
    }
};


/* =========================================================
   HERO SLIDES
========================================================= */

const slides = {

    en: [
        {
            kicker: "PREPARE",
            title: "Everything ready before kickoff.",
            description:
                "Plan your matches, teams and schedule before stepping onto the field.",
            image: "assets/images/watch-report.png",
            alt: "Whistle Pro match report on Apple Watch"
        },

        {
            kicker: "REFEREE",
            title: "Everything you need on your wrist.",
            description:
                "Timer, score, cards and match events stay close at hand while you focus on refereeing.",
            image: "assets/images/watch-timer.jpg",
            alt: "Whistle Pro match timer on Apple Watch"
        },

        {
            kicker: "REVIEW",
            title: "Your match continues on iPhone.",
            description:
                "Review results, match history and reports on a larger screen after the final whistle.",
            image: "assets/images/iphone-results.PNG",
            alt: "Whistle Pro match results on iPhone"
        }
    ],


    fr: [
        {
            kicker: "PRÉPARER",
            title: "Tout est prêt avant le coup d’envoi.",
            description:
                "Préparez vos matchs, vos équipes et votre calendrier avant d’arriver sur le terrain.",
            image: "assets/images/watch-report.png",
            alt: "Rapport de match Whistle Pro sur Apple Watch"
        },

        {
            kicker: "ARBITRER",
            title: "Tout ce qu’il vous faut au poignet.",
            description:
                "Chrono, score, cartons et événements du match restent à portée de main pendant que vous arbitrez.",
            image: "assets/images/watch-timer.jpg",
            alt: "Chronomètre Whistle Pro sur Apple Watch"
        },

        {
            kicker: "ANALYSER",
            title: "Le match se poursuit sur iPhone.",
            description:
                "Consultez les résultats, l’historique et les rapports sur grand écran après le coup de sifflet final.",
            image: "assets/images/iphone-results.PNG",
            alt: "Résultats Whistle Pro sur iPhone"
        }
    ],


    es: [
        {
            kicker: "PREPARAR",
            title: "Todo listo antes del saque inicial.",
            description:
                "Prepara partidos, equipos y calendario antes de llegar al campo.",
            image: "assets/images/watch-report.png",
            alt: "Informe de partido Whistle Pro en Apple Watch"
        },

        {
            kicker: "ARBITRAR",
            title: "Todo lo que necesitas en tu muñeca.",
            description:
                "Cronómetro, marcador, tarjetas y eventos del partido permanecen a mano mientras arbitras.",
            image: "assets/images/watch-timer.jpg",
            alt: "Cronómetro Whistle Pro en Apple Watch"
        },

        {
            kicker: "REVISAR",
            title: "El partido continúa en tu iPhone.",
            description:
                "Consulta resultados, historial e informes en una pantalla más grande después del pitido final.",
            image: "assets/images/iphone-results.PNG",
            alt: "Resultados de Whistle Pro en iPhone"
        }
    ]
};


/* =========================================================
   FEATURE LISTS
========================================================= */

const featureLists = {

    en: {
        watch: [
            "Smart match timer",
            "Automatic pauses",
            "Goal and score tracking",
            "Yellow and red cards",
            "Player numbers",
            "Overtime and shootouts",
            "End-of-period alerts",
            "Futsal accumulated fouls",
            "Real-time synchronization between Apple Watch and iPhone"
        ],

        phone: [
            "Complete match history",
            "Detailed match reports",
            "Large-screen match review",
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
            "CSV and Excel exports"
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
            "Synchronisation en temps réel entre l’Apple Watch et l’iPhone"
        ],

        phone: [
            "Historique complet des matchs",
            "Rapports de match détaillés",
            "Consultation sur grand écran",
            "Planification des matchs à venir",
            "Gestion des équipes et compositions",
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
            "Suivi du kilométrage",
            "Totaux annuels",
            "Exports CSV et Excel"
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
            "Sincronización en tiempo real entre Apple Watch y iPhone"
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
            description:
                "Prepare a match before heading onto the field."
        },
        {
            id: "import",
            title: "Import matches",
            description:
                "Import scheduled matches from supported platforms."
        },
        {
            id: "roster",
            title: "Roster management",
            description:
                "Review and manage players and team staff."
        },
        {
            id: "start-match",
            title: "Start a match",
            description:
                "Start the match and select the team taking kickoff."
        },
        {
            id: "goals-cards",
            title: "Goals and cards",
            description:
                "Record goals, cards and player numbers quickly."
        },
        {
            id: "match-end",
            title: "End a match",
            description:
                "Finish periods, overtime and the complete match."
        },
        {
            id: "export",
            title: "Export data",
            description:
                "Export reports and match data in PDF, CSV or Excel."
        },
        {
            id: "expenses",
            title: "Expenses",
            description:
                "Track referee expenses and mileage."
        }
    ],


    fr: [
        {
            id: "match-setup",
            title: "Préparer un match",
            description:
                "Préparez votre match avant d’arriver sur le terrain."
        },
        {
            id: "import",
            title: "Importer les matchs",
            description:
                "Importez les matchs depuis les plateformes compatibles."
        },
        {
            id: "roster",
            title: "Gestion des compositions",
            description:
                "Consultez et gérez les joueurs et membres du personnel."
        },
        {
            id: "start-match",
            title: "Démarrer un match",
            description:
                "Démarrez le match et sélectionnez l’équipe qui engage."
        },
        {
            id: "goals-cards",
            title: "Buts et cartons",
            description:
                "Inscrivez rapidement les buts, cartons et numéros de joueurs."
        },
        {
            id: "match-end",
            title: "Terminer le match",
            description:
                "Gérez la fin des périodes, prolongations et du match."
        },
        {
            id: "export",
            title: "Exporter les données",
            description:
                "Exportez vos rapports et données en PDF, CSV ou Excel."
        },
        {
            id: "expenses",
            title: "Dépenses",
            description:
                "Suivez vos dépenses d’arbitrage et votre kilométrage."
        }
    ],


    es: [
        {
            id: "match-setup",
            title: "Preparar un partido",
            description:
                "Prepara el partido antes de llegar al campo."
        },
        {
            id: "import",
            title: "Importar partidos",
            description:
                "Importa partidos desde plataformas compatibles."
        },
        {
            id: "roster",
            title: "Gestión de plantillas",
            description:
                "Consulta y gestiona jugadores y personal técnico."
        },
        {
            id: "start-match",
            title: "Iniciar un partido",
            description:
                "Inicia el partido y selecciona el equipo que realiza el saque inicial."
        },
        {
            id: "goals-cards",
            title: "Goles y tarjetas",
            description:
                "Registra goles, tarjetas y números de jugador."
        },
        {
            id: "match-end",
            title: "Finalizar el partido",
            description:
                "Gestiona el final de periodos, prórrogas y partido."
        },
        {
            id: "export",
            title: "Exportar datos",
            description:
                "Exporta informes y datos en PDF, CSV o Excel."
        },
        {
            id: "expenses",
            title: "Gastos",
            description:
                "Controla gastos y kilometraje."
        }
    ]
};


/* =========================================================
   PRIVACY POLICY
========================================================= */

const privacyPolicy = {

    en: `
        <h1>Privacy Policy – Whistle Pro</h1>

        <p><strong>Last updated: October 1st, 2025</strong></p>

        <p>
            Whistle Pro respects the privacy of its users.
            We do not collect, store, or share any personally identifiable information.
        </p>

        <h2>1. Data Collection</h2>

        <p>
            • Whistle Pro does not collect any personal information
            (such as name, address, or email).
        </p>

        <p>
            • Match, calendar, or performance data remain stored locally
            on your device (Apple Watch or iPhone).
        </p>

        <h2>2. Integration with Apple Health and GPS</h2>

        <p>
            • If you enable integration with Apple Health or GPS,
            the app may read and write certain performance-related data.
        </p>

        <p>
            • These data are managed exclusively by Apple via HealthKit
            and remain under your control. Whistle Pro does not transmit
            this information to any third party.
        </p>

        <h2>3. iPhone – Apple Watch Synchronization</h2>

        <p>
            • Information entered on the Watch may be synchronized
            with the associated iPhone.
        </p>

        <p>
            • Synchronization is handled using Apple’s secure mechanisms.
        </p>

        <p>
            • No data are transmitted to external servers.
        </p>

        <h2>4. Data Sharing</h2>

        <p>
            • Whistle Pro does not share any data with third parties.
        </p>

        <p>
            • Match reports in PDF are generated from local data only
            and remain under your control when you choose to export them.
        </p>

        <h2>5. Security</h2>

        <p>
            • All data remain stored locally on your Apple devices.
        </p>

        <p>
            • Apple ensures the security and encryption of data related
            to HealthKit and internal synchronizations.
        </p>

        <h2>6. Contact</h2>

        <p>
            For questions regarding this Privacy Policy, please contact us at:
            <a href="mailto:contact@whistlepro.com">
                contact@whistlepro.com
            </a>
        </p>
    `,


    fr: `
        <h1>Politique de confidentialité – Whistle Pro</h1>

        <p><strong>Dernière mise à jour : 1er octobre 2025</strong></p>

        <p>
            Whistle Pro respecte la vie privée de ses utilisateurs.
            L’application ne recueille, ne stocke et ne partage aucune
            donnée personnelle identifiable.
        </p>

        <h2>1. Données collectées</h2>

        <p>
            • Whistle Pro ne collecte aucune information personnelle
            (nom, adresse, courriel, etc.).
        </p>

        <p>
            • Les données de match, de calendrier ou de performance
            restent stockées localement sur votre appareil
            (Apple Watch ou iPhone).
        </p>

        <h2>2. Intégration avec Apple Santé et GPS</h2>

        <p>
            • Si vous activez l’intégration avec Apple Santé ou le GPS,
            l’application peut lire et écrire certaines données liées
            à vos performances.
        </p>

        <p>
            • Ces données sont gérées exclusivement par Apple via HealthKit
            et demeurent sous votre contrôle. Whistle Pro ne transmet
            ces informations à aucun tiers.
        </p>

        <h2>3. Synchronisation iPhone – Apple Watch</h2>

        <p>
            • Les informations saisies sur la montre peuvent être
            synchronisées avec l’iPhone associé.
        </p>

        <p>
            • Cette synchronisation s’effectue via les mécanismes
            sécurisés fournis par Apple.
        </p>

        <p>
            • Aucune donnée n’est transmise à des serveurs externes.
        </p>

        <h2>4. Partage de données</h2>

        <p>
            • Whistle Pro ne partage aucune donnée avec des tiers.
        </p>

        <p>
            • Les rapports de match en PDF sont générés uniquement
            à partir de vos données locales et demeurent sous votre
            contrôle lorsque vous choisissez de les exporter.
        </p>

        <h2>5. Sécurité</h2>

        <p>
            • Toutes les données restent stockées localement
            sur vos appareils Apple.
        </p>

        <p>
            • Apple assure la sécurité et le chiffrement des données
            liées à HealthKit et aux synchronisations internes.
        </p>

        <h2>6. Contact</h2>

        <p>
            Pour toute question concernant cette politique de confidentialité,
            vous pouvez nous contacter à :
            <a href="mailto:contact@whistlepro.com">
                contact@whistlepro.com
            </a>
        </p>
    `,


    es: `
        <h1>Política de privacidad – Whistle Pro</h1>

        <p><strong>Última actualización: 1 de octubre de 2025</strong></p>

        <p>
            Whistle Pro respeta la privacidad de sus usuarios.
            La aplicación no recopila, almacena ni comparte
            información personal identificable.
        </p>

        <h2>1. Recopilación de datos</h2>

        <p>
            • Whistle Pro no recopila información personal
            como nombre, dirección o correo electrónico.
        </p>

        <p>
            • Los datos de partidos, calendarios y rendimiento
            permanecen almacenados localmente en tu Apple Watch o iPhone.
        </p>

        <h2>2. Apple Health y GPS</h2>

        <p>
            • Si activas Apple Health o GPS, la aplicación puede leer
            y escribir determinados datos relacionados con el rendimiento.
        </p>

        <p>
            • Estos datos permanecen bajo tu control y no se transmiten
            a terceros.
        </p>

        <h2>3. Sincronización iPhone – Apple Watch</h2>

        <p>
            • La información introducida en el Apple Watch puede sincronizarse
            con el iPhone asociado mediante los mecanismos seguros de Apple.
        </p>

        <p>
            • No se transmiten datos a servidores externos.
        </p>

        <h2>4. Compartición de datos</h2>

        <p>
            • Whistle Pro no comparte datos con terceros.
        </p>

        <h2>5. Seguridad</h2>

        <p>
            • Los datos permanecen almacenados localmente
            en los dispositivos Apple del usuario.
        </p>

        <h2>6. Contacto</h2>

        <p>
            Para cualquier pregunta:
            <a href="mailto:contact@whistlepro.com">
                contact@whistlepro.com
            </a>
        </p>
    `
};


/* =========================================================
   EUROPEAN PRIVACY POLICY
========================================================= */

const legalNotice = {

    en: `
        <h1>European Privacy Policy</h1>

        <h2>1. Developer Identity</h2>

        <p>
            WhistlePro is developed and distributed by:<br>
            M Lefebvre<br>
            Independent developer – Mobile applications<br>
            Blainville, Quebec (Canada)
        </p>

        <p>
            All purchases and subscriptions are handled by Apple App Store,
            which acts as the official merchant of record for EU consumers.
        </p>

        <h2>2. Subscription and Purchase Terms</h2>

        <p>
            WhistlePro subscriptions are offered through the App Store.
            Prices, automatic renewals, and refunds are managed directly
            by Apple under their own terms of service.
        </p>

        <p>
            Refund requests must be submitted via the App Store
            &gt; Purchase History &gt; Report a Problem.
        </p>

        <h2>3. Data Protection and Privacy (GDPR)</h2>

        <p>
            WhistlePro only collects data strictly necessary for the app’s operation:
        </p>

        <ul>
            <li>Local match and configuration data;</li>

            <li>
                Activity data (distance, heart rate, calories, etc.)
                only if the user enables HealthKit;
            </li>

            <li>
                GPS location only if the user enables it to calculate
                distance between home and fields.
            </li>
        </ul>

        <p>
            No data is sold, shared, or transmitted to any third party.
            All user data remains on the user’s devices or iCloud,
            secured through Apple’s services.
            No personal data is hosted or retained by the developer.
        </p>

        <p>
            EU users have the right to access, rectify, and erase their data
            in accordance with Regulation (EU) 2016/679.
            Requests may be sent to
            <a href="mailto:privacy@whistlepro.app">
                privacy@whistlepro.app
            </a>.
        </p>

        <h2>4. Consumer Rights (Directive 2011/83/EU)</h2>

        <p>
            Under EU consumer protection law, the right of withdrawal
            does not apply to digital services once execution has begun
            with the user’s consent.
        </p>

        <p>
            All billing, renewal, and refund matters are handled directly
            by Apple App Store Support.
        </p>

        <h2>5. Governing Law</h2>

        <p>
            This service is provided from Canada.
            Contractual relationships are governed by Canadian law,
            without prejudice to mandatory consumer protection rights
            under EU law.
        </p>
    `,


    fr: `
        <h1>Politique de confidentialité Européenne</h1>

        <h2>1. Identité du développeur</h2>

        <p>
            WhistlePro est développé et distribué par :<br>
            M Lefebvre<br>
            Travailleur autonome – Développement d’applications mobiles<br>
            Blainville, Québec (Canada)
        </p>

        <p>
            Les abonnements et paiements sont gérés exclusivement
            par Apple App Store, qui agit comme vendeur officiel
            (“merchant of record”) pour les consommateurs européens.
        </p>

        <h2>2. Conditions d’abonnement et d’achat</h2>

        <p>
            Les abonnements à WhistlePro sont proposés via l’App Store.
            Les tarifs, renouvellements automatiques et remboursements
            sont gérés directement par Apple conformément à leurs
            conditions de service.
        </p>

        <p>
            Toute demande de remboursement doit être effectuée via
            l’App Store &gt; Historique des achats &gt; Signaler un problème.
        </p>

        <h2>3. Protection des données et confidentialité (RGPD)</h2>

        <p>
            WhistlePro collecte uniquement les données strictement
            nécessaires à son fonctionnement :
        </p>

        <ul>
            <li>Données locales de match, chronomètres et configurations ;</li>

            <li>
                Données d’activité physique
                (distance, rythme cardiaque, calories, etc.)
                uniquement si l’utilisateur active HealthKit ;
            </li>

            <li>
                Localisation GPS, uniquement si l’utilisateur active
                le GPS pour calculer la distance entre les terrains
                et le domicile.
            </li>
        </ul>

        <p>
            Aucune donnée n’est vendue, partagée ni transmise à des tiers.
            Les données restent stockées localement sur les appareils
            de l’utilisateur ou dans iCloud via les mécanismes sécurisés d’Apple.
            Aucune donnée n’est hébergée ni conservée par le développeur.
        </p>

        <p>
            Les utilisateurs européens disposent d’un droit d’accès,
            de rectification et de suppression de leurs données conformément
            au Règlement (UE) 2016/679.
            Toute demande peut être adressée à
            <a href="mailto:privacy@whistlepro.app">
                privacy@whistlepro.app
            </a>.
        </p>

        <h2>4. Droits des consommateurs (Directive 2011/83/UE)</h2>

        <p>
            Conformément à la directive européenne sur les droits
            des consommateurs, le droit de rétractation ne s’applique pas
            aux services numériques déjà exécutés avec le consentement
            de l’utilisateur.
        </p>

        <p>
            Toute question relative à un paiement, un renouvellement
            ou une annulation doit être adressée à Apple App Store Support.
        </p>

        <h2>5. Droit applicable</h2>

        <p>
            Ce service est fourni depuis le Canada.
            Les relations contractuelles sont régies par le droit canadien,
            sans préjudice des protections légales obligatoires applicables
            aux consommateurs européens.
        </p>
    `,


    es: `
        <h1>Política de privacidad europea</h1>

        <h2>1. Identidad del desarrollador</h2>

        <p>
            WhistlePro es desarrollado y distribuido por:<br>
            M Lefebvre<br>
            Desarrollador independiente – Aplicaciones móviles<br>
            Blainville, Quebec (Canadá)
        </p>

        <p>
            Todas las compras y suscripciones se gestionan mediante
            Apple App Store, que actúa como vendedor oficial
            para los consumidores de la Unión Europea.
        </p>

        <h2>2. Suscripciones y compras</h2>

        <p>
            Los precios, renovaciones automáticas y reembolsos
            son gestionados directamente por Apple.
        </p>

        <h2>3. Protección de datos y privacidad (RGPD)</h2>

        <p>
            WhistlePro solo utiliza los datos estrictamente necesarios
            para el funcionamiento de la aplicación:
        </p>

        <ul>
            <li>Datos locales de partidos y configuración;</li>

            <li>
                Datos de actividad física solamente cuando
                el usuario activa HealthKit;
            </li>

            <li>
                Ubicación GPS solamente cuando el usuario
                activa esta función.
            </li>
        </ul>

        <p>
            Ningún dato se vende, comparte ni transmite a terceros.
            Los datos permanecen en los dispositivos del usuario
            o en iCloud mediante los servicios seguros de Apple.
        </p>

        <p>
            Los usuarios europeos tienen derecho a acceder,
            rectificar y eliminar sus datos de acuerdo con
            el Reglamento (UE) 2016/679.
        </p>

        <p>
            Las solicitudes pueden enviarse a
            <a href="mailto:privacy@whistlepro.app">
                privacy@whistlepro.app
            </a>.
        </p>

        <h2>4. Derechos de los consumidores</h2>

        <p>
            Las compras, renovaciones y reembolsos son gestionados
            directamente por Apple App Store Support.
        </p>

        <h2>5. Legislación aplicable</h2>

        <p>
            Este servicio se proporciona desde Canadá,
            sin perjuicio de los derechos obligatorios de protección
            al consumidor aplicables en la Unión Europea.
        </p>
    `
};


/* =========================================================
   STATE
========================================================= */

let currentLanguage = detectLanguage();
let currentSlide = 0;
let currentTutorial = 0;
let slideTimer = null;


/* =========================================================
   DOM
========================================================= */

const heroImage =
    document.getElementById("heroImage");

const heroKicker =
    document.getElementById("heroKicker");

const heroTitle =
    document.getElementById("heroTitle");

const heroDescription =
    document.getElementById("heroDescription");

const featureButtons =
    document.querySelectorAll("[data-slide]");

const indicators =
    document.querySelectorAll(".indicator");

const languageSelector =
    document.getElementById("languageSelector");

const menuButton =
    document.getElementById("menuButton");

const closeMenuButton =
    document.getElementById("closeMenuButton");

const mainMenu =
    document.getElementById("mainMenu");

const menuOverlay =
    document.getElementById("menuOverlay");

const tutorialSelector =
    document.getElementById("tutorialSelector");

const tutorialList =
    document.getElementById("tutorialList");

const tutorialTitle =
    document.getElementById("tutorialTitle");

const tutorialDescription =
    document.getElementById("tutorialDescription");

const tutorialVideoLabel =
    document.getElementById("tutorialVideoLabel");

const privacyContentContainer =
    document.getElementById("privacyContent");

const legalContentContainer =
    document.getElementById("legalContent");


/* =========================================================
   INIT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (languageSelector) {
        languageSelector.value =
            currentLanguage;
    }

    document.documentElement.lang =
        currentLanguage;


    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();
    }


    updateTranslations();

    renderFeatures();
    renderTutorialNavigation();
    renderTutorial();
    renderPrivacy();
    renderLegal();

    showSlide(0);
    startSlideshow();

    handleURL();
});


/* =========================================================
   LANGUAGE
========================================================= */

function detectLanguage() {

    const saved =
        localStorage.getItem(
            "whistleProLanguage"
        );


    if (
        saved === "en" ||
        saved === "fr" ||
        saved === "es"
    ) {

        return saved;
    }


    const browser =
        navigator.language.toLowerCase();


    if (browser.startsWith("fr")) {
        return "fr";
    }


    if (browser.startsWith("es")) {
        return "es";
    }


    return "en";
}


if (languageSelector) {

    languageSelector.addEventListener(
        "change",
        event => {

            currentLanguage =
                event.target.value;


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
            renderPrivacy();
            renderLegal();

            showSlide(currentSlide);
        }
    );
}


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
   HERO
========================================================= */

function showSlide(index) {

    const languageSlides =
        slides[currentLanguage];


    currentSlide =
        index % languageSlides.length;


    const slide =
        languageSlides[currentSlide];


    if (
        !heroImage ||
        !heroKicker ||
        !heroTitle ||
        !heroDescription
    ) {
        return;
    }


    heroImage.style.opacity = "0";


    setTimeout(() => {

        heroImage.src =
            slide.image;

        heroImage.alt =
            slide.alt;

        heroKicker.textContent =
            slide.kicker;

        heroTitle.textContent =
            slide.title;

        heroDescription.textContent =
            slide.description;

        heroImage.style.opacity =
            "1";

    }, 160);


    featureButtons.forEach(
        (button, buttonIndex) => {

            button.classList.toggle(
                "active",
                buttonIndex === currentSlide
            );
        }
    );


    indicators.forEach(
        (indicator, indicatorIndex) => {

            indicator.classList.toggle(
                "active",
                indicatorIndex === currentSlide
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

    button.addEventListener(
        "click",
        () => {

            const index =
                Number(
                    button.dataset.slide
                );


            showSlide(index);

            stopSlideshow();


            setTimeout(
                startSlideshow,
                15000
            );
        }
    );
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

if (menuButton) {

    menuButton.addEventListener(
        "click",
        openMenu
    );
}


if (closeMenuButton) {

    closeMenuButton.addEventListener(
        "click",
        closeMenu
    );
}


if (menuOverlay) {

    menuOverlay.addEventListener(
        "click",
        closeMenu
    );
}


function openMenu() {

    if (!mainMenu || !menuOverlay) {
        return;
    }


    mainMenu.classList.add("open");

    menuOverlay.classList.add("open");


    mainMenu.setAttribute(
        "aria-hidden",
        "false"
    );
}


function closeMenu() {

    if (!mainMenu || !menuOverlay) {
        return;
    }


    mainMenu.classList.remove("open");

    menuOverlay.classList.remove("open");


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


function renderList(
    elementId,
    items
) {

    const list =
        document.getElementById(
            elementId
        );


    if (!list) {
        return;
    }


    list.innerHTML = "";


    items.forEach(item => {

        const li =
            document.createElement("li");


        li.textContent =
            item;


        list.appendChild(li);
    });
}


/* =========================================================
   TUTORIALS
========================================================= */

function renderTutorialNavigation() {

    if (
        !tutorialList ||
        !tutorialSelector
    ) {
        return;
    }


    const languageTutorials =
        tutorials[currentLanguage];


    tutorialList.innerHTML =
        "";

    tutorialSelector.innerHTML =
        "";


    languageTutorials.forEach(
        (tutorial, index) => {

            const button =
                document.createElement(
                    "button"
                );


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
                document.createElement(
                    "option"
                );


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


if (tutorialSelector) {

    tutorialSelector.addEventListener(
        "change",
        event => {

            currentTutorial =
                Number(
                    event.target.value
                );


            renderTutorialNavigation();

            renderTutorial();

            updateTutorialURL();
        }
    );
}


function renderTutorial() {

    if (
        !tutorialTitle ||
        !tutorialDescription ||
        !tutorialVideoLabel
    ) {
        return;
    }


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
   PRIVACY
========================================================= */

function renderPrivacy() {

    if (!privacyContentContainer) {
        return;
    }


    privacyContentContainer.innerHTML =
        privacyPolicy[currentLanguage];
}


/* =========================================================
   EUROPEAN PRIVACY
========================================================= */

function renderLegal() {

    if (!legalContentContainer) {
        return;
    }


    legalContentContainer.innerHTML =
        legalNotice[currentLanguage];
}


/* =========================================================
   URL
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
        "privacy",
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
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            closeMenu();
        }
    }
);

// Contains Website English Text
let English = {
  landing: {
    NavBar: ["HOME", "SERVICES", "CONTACT", "DIRECTIONS", "ABOUT US", "LOGIN"],
    services: [
      {
        title: "Entry Express",
        desc: "Available in 2 options step by step guide or remote access and guide with a support employer",
      },
      {
        title: "Travel Kit",
        desc: "Available in 2 options a single member or a family. Contains all what you need to bring ranked by importance",
      },
      {
        title: "Arrival Contacts",
        desc: "First contact on Arrival in Canada to help you get to your Home, a taxi, or hotel reservations etc...",
      },
      {
        title: "Success Calculator",
        desc: "Our Success Luck Calculator that gives an approximation to how much we expect you to succeed",
      },
    ],
    support: [
      "Support Chat",
      "Feel Free to seek help or ask questions from our support team at anytime",
      "Write a Message",
    ],
  },
  travelKit: {
    NavBar: ["HOME", "SERVICES", "CONTACT", "DIRECTIONS", "ABOUT US", "LOGIN"],
    title: "Travel Kit",
    data: [
      "Phone with a good battery + power bank etc.",
      "Stock up on medications for adults and children (antibiotics)",
      "Go to the dentist and take care of your teeth first, make a visit to your doctor if necessary.",
      "Diapers for your baby, take as many as you can.",
      "Don't overburden yourself with winter jackets, one jacket per person.",
      "Don't forget your medical records (chronic illnesses, interventions, etc.)",
      "All your documents uploaded to IRCC.",
      "White background ID photos, 8 pieces each.",
      "For electronic devices: don't bring hair dryers or irons as the voltage is different. For phone and laptop chargers, you can buy plug adapters once in Canada.",
    ],
  },
  successCalculator: {
    NavBar: ["HOME", "SERVICES", "CONTACT", "DIRECTIONS", "ABOUT US", "LOGIN"],
    title: "Chance of Success Calculator",
    sectorOptions: `<select id="sectorOfActivity" name="sectorOfActivity" required>
                
    <optgroup label="Health Sector">
        <option value="Paramedic">Paramedic</option>
        <option value="Audiologist">Audiologist</option>
        <option value="Social and Health Services Auxiliary">Social and Health Services Auxiliary</option>
        <option value="Dentist">Dentist</option>
        <option value="Nurse">Nurse</option>
        <option value="Practical Nurse">Practical Nurse</option>
        <option value="Specialist Doctor and Family Doctor">Specialist Doctor and Family Doctor</option>
        <option value="Optometrist">Optometrist</option>
        <option value="Nursing Assistant">Nursing Assistant</option>
        <option value="Pharmacist">Pharmacist</option>
    </optgroup>

    <optgroup label="Social Services and Education">
        <option value="Early Childhood Educator">Early Childhood Educator</option>
        <option value="Childcare Worker">Childcare Worker</option>
        <option value="Social Worker and Community Worker">Social Worker and Community Worker</option>
        <option value="Psychologist">Psychologist</option>
    </optgroup>

    <optgroup label="Natural Sciences, Transportation, and Aerospace">
        <option value="Aerospace Engineer">Aerospace Engineer</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Transport Services Control Officer">Transport Services Control Officer</option>
        <option value="Statistician and Actuary">Statistician and Actuary</option>
        <option value="Mechanical Engineering Technologist and Technician">Mechanical Engineering Technologist and Technician</option>
        <option value="Industrial Engineering and Manufacturing Technologist and Technician">Industrial Engineering and Manufacturing Technologist and Technician</option>
    </optgroup>

    <optgroup label="Applied Sciences and Information Technology">
        <option value="IT Analyst and Consultant">IT Analyst and Consultant</option>
        <option value="Database Analyst">Database Analyst</option>
        <option value="Technical Support Analyst">Technical Support Analyst</option>
        <option value="Graphic Designer">Graphic Designer</option>
        <option value="Illustrator">Illustrator</option>
        <option value="IT Manager">IT Manager</option>
        <option value="Software Engineer and Designer">Software Engineer and Designer</option>
        <option value="Web Developer">Web Developer</option>
    </optgroup>

    <optgroup label="Sales and Marketing">
        <option value="Marketing Analyst">Marketing Analyst</option>
        <option value="Financial Analyst">Financial Analyst</option>
        <option value="Sales Associate">Sales Associate</option>
        <option value="Sales Director">Sales Director</option>
        <option value="Account Manager">Account Manager</option>
        <option value="Sales Representative">Sales Representative</option>
        <option value="Customer Service">Customer Service</option>
        <option value="Digital Marketing Specialist">Digital Marketing Specialist</option>
    </optgroup>

    <optgroup label="Other Sectors">
        <option value="Administrative Assistant">Administrative Assistant</option>
        <option value="Cashier">Cashier</option>
        <option value="Truck Driver">Truck Driver</option>
        <option value="Accountant">Accountant</option>
        <option value="Cook">Cook</option>
        <option value="Project Manager">Project Manager</option>
        <option value="Receptionist">Receptionist</option>
        <option value="Waiter">Waiter</option>
        <option value="Fruit and Vegetable Picker">Fruit and Vegetable Picker</option>
        <option value="Warehouse Worker">Warehouse Worker</option>
        <option value="Sales Representative">Sales Representative</option>
        <option value="Truck Driver">Truck Driver</option>
        <option value="Welder">Welder</option>
        <option value="Web Developer">Web Developer</option>
        <option value="Business Development Manager">Business Development Manager</option>
        <option value="Laborer">Laborer</option>
        <option value="Mechanic">Mechanic</option>
        <option value="Human Resources Director">Human Resources Director</option>
    </optgroup>
</select>
`,
    subtitles: [
      "Oral Comprehension",
      "Written Comprehension",
      "Oral Expression",
      "Written Expression",
      "Education Level",
      "Professional Experience (In Years Declared with insurance)",
      "Age",
      "Sector of Activity",
    ],
    button: "Calculate",
    placeholders: ["Number of Years", "Your Age"],
  },
};

// Contains Website French Text
let French = {
  landing: {
    NavBar: [
      "ACCUEIL",
      "SERVICES",
      "CONTACT",
      "DIRECTIONS",
      "À PROPOS",
      "CONNEXION",
    ],
    services: [
      {
        title: "Entrée Express",
        desc: "Disponible en 2 options : guide étape par étape ou accès à distance et guide avec un employeur de soutien",
      },
      {
        title: "Kit de Voyage",
        desc: "Disponible en 2 options : pour un seul membre ou pour une famille. Contient tout ce dont vous avez besoin, classé par importance",
      },
      {
        title: "Contacts d'Arrivée",
        desc: "Premier contact à votre arrivée au Canada pour vous aider à rejoindre votre domicile, un taxi ou à effectuer des réservations d'hôtel, etc.",
      },
      {
        title: "Calculateur de Succès",
        desc: "Notre calculateur de chance de réussite vous donne une estimation de vos chances de succès",
      },
    ],
    support: [
      "Chat de Support",
      "N'hésitez pas à demander de l'aide ou à poser des questions à notre équipe de support à tout moment",
      "Écrire un Message",
    ],
  },
  travelKit: {
    NavBar: [
      "ACCUEIL",
      "SERVICES",
      "CONTACT",
      "DIRECTIONS",
      "À PROPOS",
      "CONNEXION",
    ],
    title: "Kit de Voyage",
    data: [
      "Téléphone avec une bonne batterie + power bank etc.",
      "Faites le stock des medicaments pour les adultes et pour les enfants (antibiotique)",
      " Aller chez le dentiste et soigner ses dents en premier lieu, faire une visite chez votre medecin si nécéssaire.",
      "Couches pour votre bébé, tous ce que vous pouvez prendre.",
      "Ne pas s’encombrer pas avec les vestes d’hiver, une veste par personne.",
      "N’oubliez pas vos dossiers médicaux (maladies chroniques, interventions .. etc)",
      "Tous vos documents téléversés à IRCC.",
      "Photo d’identité fond blanc 8pcs chacun.",
      "Pour les appareil éléctronique : ne pas ramener les sèche cheuveux ni de fer a repasser le voltage n’est pas le même, pour les chargeur de telephone et de laptop vous pouvez acheter des adaptateur de prise une fois au Canada.",
    ],
  },
  successCalculator: {
    NavBar: [
      "ACCUEIL",
      "SERVICES",
      "CONTACT",
      "DIRECTIONS",
      "À PROPOS",
      "CONNEXION",
    ],
    title: "Calculateur de Chance de Succès",
    sectorOptions: `<select id="sectorOfActivity" name="sectorOfActivity" required>
                
                <optgroup label="Secteur de la santé">
                    <option value="Ambulancier">Ambulancier - ambulancière</option>
                    <option value="Audiologiste">Audiologiste</option>
                    <option value="Auxiliaire">Auxiliaire aux services sociaux et de santé</option>
                    <option value="Dentiste">Dentiste</option>
                    <option value="Infirmier">Infirmier - infirmière</option>
                    <option value="Infirmier auxiliaire">Infirmier ou infirmière auxiliaire</option>
                    <option value="Médecin">Médecin spécialiste et médecin de famille</option>
                    <option value="Optométriste">Optométriste</option>
                    <option value="Préposé.e">Préposé.e aux bénéficiaires</option>
                    <option value="Pharmacien">Pharmacien - pharmacienne</option>
                </optgroup><optgroup label="Services sociaux et enseignement">
                    <option value="Éducateur">Éducateur - éducatrice à la petite enfance</option>
                    <option value="Gardien">Gardien - gardienne d'enfants</option>
                    <option value="Travailleur social">Travailleur - travailleuse social.e et communautaire</option>
                    <option value="Psychologue">Psychologue</option>
                </optgroup>
                <optgroup label="Sciences naturelles, transport et aérospatiale">
                    <option value="Ingénieur aérospatial">Ingénieur.e en aérospatial</option>
                    <option value="Ingénieur logiciels">Ingénieur.e de logiciels</option>
                    <option value="Officier transport">Officier - officière au contrôle des services de transport
                    </option>
                    <option value="Statisticien">Statisticien - statisticienne et actuaire</option>
                    <option value="Technicien génie mécanique">Technologue et technicien.ne en génie mécanique</option>
                    <option value="Technicien génie industriel">Technologue et technicien.ne en génie industriel et
                        fabrication</option>
                </optgroup>
                <optgroup label="Sciences appliquées et technologies de l'information">
                    <option value="Analyste informatique">Analyste et consultant.e en informatique</option>
                    <option value="Analyste bases de données">Analyste de bases de données</option>
                    <option value="Analyste assistance technique">Analyste en assistance technique</option>
                    <option value="Designer graphique">Designer graphique</option>
                    <option value="Illustrateur">Illustrateur - illustratrice</option>
                    <option value="Gestionnaire TI">Gestionnaire des TI</option>
                    <option value="Ingénieur logiciels">Ingénieur.e et concepteur.ice de logiciels</option>
                    <option value="Programmeur Web">Programmeur programmeuse Web</option>
                </optgroup>
                <optgroup label="Vente et marketing">
                    <option value="Analyste marketing">Analyste marketing</option>
                    <option value="Analyste financier">Analyste financier</option>
                    <option value="Associé ventes">Associé.e aux ventes</option>
                    <option value="Directeur ventes">Directeur.ice des ventes</option>
                    <option value="Gestionnaire compte">Gestionnaire de compte</option>
                    <option value="Représentant ventes">Représentant.e des ventes</option>
                    <option value="Service à la clientèle">Service à la clientèle</option>
                    <option value="Spécialiste marketing numérique">Spécialiste en marketing numérique</option>
                </optgroup>
                <optgroup label="Autres secteurs">
                    <option value="Adjoint administratif">Adjoint.e administratif.ve</option>
                    <option value="Caissier">Caissier - caissière</option>
                    <option value="Conducteur camions">Conducteur - conductrice de camions</option>
                    <option value="Comptable">Comptable</option>
                    <option value="Cuisinier">Cuisinier - cuisinière</option>
                    <option value="Gestionnaire projet">Gestionnaire de projet</option>
                    <option value="Réceptionniste">Réceptionniste</option>
                    <option value="Serveur">Serveur - serveuse</option>
                    <option value="Cueilleur fruits">Cueilleur - cueilleuse de fruits et légumes</option>
                    <option value="Manutentionnaire">Manutentionnaire</option>
                    <option value="Représentant commercial">Représentant commercial</option>
                    <option value="Camionneur">Camionneur</option>
                    <option value="Soudeur">Soudeur</option>
                    <option value="Développeur Web">Développeur Web</option>
                    <option value="Responsable développement">Responsable du développement commercial</option>
                    <option value="Journalier">Journalier</option>
                    <option value="Mécanicien">Mécanicien</option>
                    <option value="Directeur RH">Directeur des ressources humaines</option>
                </optgroup>
            </select>`,
    subtitles: [
      "Compréhension Orale",
      "Compréhension Écrite",
      "Expression Orale",
      "Expression Écrite",
      "Niveau d'Études",
      "Expérience Professionnelle (Déclarée avec assurance)",
      "Âge",
      "Secteur d'Activité",
    ],
    button: "Calculer",
    placeholders: ["Nombre d'Années", "Votre Âge"],
  },
};

window.onload = () => {
  convertWebsiteLanguage("en");

  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => successCalculator(e));
};

const convertWebsiteLanguage = (language) => {
  let lang;
  if (language === "en") {
    lang = English;
  } else if (language === "fr") {
    lang = French;
  }

  const page = document.getElementById("pageName").innerText;

  if (page === "landing") {
    lang = lang.landing;
    let navItems = document.querySelectorAll(".navText a");

    for (let i = 0; i < navItems.length; i++) {
      navItems[i].innerText = lang.NavBar[i].toUpperCase();
    }

    let services = document.querySelectorAll(".service");

    for (let i = 0; i < services.length; i++) {
      services[i].querySelector("h1").innerText = lang.services[i].title;
      services[i].querySelector(".details h2").innerText =
        lang.services[i].desc;
    }

    document.getElementById("supportChatTitle").innerText = lang.support[0];
    document.getElementById("initialSupportMessage").innerText =
      lang.support[1];
    document.getElementById("usermsg").placeholder = lang.support[2];
  } else if (page === "travelKit") {
    lang = lang.travelKit;

    let navItems = document.querySelectorAll(".navText a");

    for (let i = 0; i < navItems.length; i++) {
      navItems[i].innerText = lang.NavBar[i].toUpperCase();
    }

    document.getElementById("travelKitTitle").innerText = lang.title;

    let items = document.querySelectorAll(".travelKitItem");

    for (let i = 0; i < items.length; i++) {
      items[i].innerHTML = `<p><span>${i + 1}/</span> ${lang.data[i]}</p>`;
    }
  } else if (page === "successCalculator") {
    lang = lang.successCalculator;

    let navItems = document.querySelectorAll(".navText a");

    for (let i = 0; i < navItems.length; i++) {
      navItems[i].innerText = lang.NavBar[i].toUpperCase();
    }

    document.getElementById("formTitle").innerText = lang.title;

    document.getElementById("formBtn").innerText = lang.button;

    let selectElement = document.getElementById("sectorOfActivity");
    selectElement.innerHTML = lang.sectorOptions;

    let labels = document.getElementsByTagName("label");

    for (let i = 0; i < labels.length; i++) {
      labels[i].innerText = lang.subtitles[i] + ":";
    }

    let formInputs = document.querySelectorAll(".formInput");

    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].placeholder = lang.placeholders[i];
    }
  }
};

const SendMsgToSupport = () => {};

const openSupportChat = () => {
  document.getElementsByClassName("overlaySupport")[0].style.display = "flex";
  document.getElementsByClassName("openSupport")[0].style.display = "none";

  const overlay = document.querySelector(".overlay");
  overlay.classList.add("show-overlay");
};

const hideSupportChat = () => {
  document.getElementsByClassName("overlaySupport")[0].style.display = "none";
  if (window.innerWidth < 1000) {
    document.getElementsByClassName("openSupport")[0].style.display = "flex";
  }

  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("show-overlay");
};

const goToPage = (page) => {
  window.location = `${page}.html`;
};

const successCalculator = (e) => {
  e.preventDefault();
};

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
};

window.onload = () => {
  convertWebsiteLanguage("en");
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
    console.log("auod");

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
  }
};

const SendMsgToSupport = () => {};

const openSupportChat = () => {
  document.getElementsByClassName("overlaySupport")[0].style.display = "flex";
  document.getElementsByClassName("openSupport")[0].style.display = "none";

  const overlay = document.querySelector(".overlay");
  overlay.classList.add("show-overlay");
};

function hideSupportChat() {
  document.getElementsByClassName("overlaySupport")[0].style.display = "none";
  if (window.innerWidth < 1000) {
    document.getElementsByClassName("openSupport")[0].style.display = "flex";
  }

  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("show-overlay");
}

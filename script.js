// Contains index.html English Text
let English = {
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
};

// Contains index.html French Text
let French = {
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

  let navItems = document.querySelectorAll(".navText a");

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].innerText = lang.NavBar[i].toUpperCase();
  }

  let services = document.querySelectorAll(".service");

  for (let i = 0; i < services.length; i++) {
    services[i].querySelector("h1").innerText = lang.services[i].title;
    services[i].querySelector(".details h2").innerText = lang.services[i].desc;
  }

  document.getElementById("supportChatTitle").innerText = lang.support[0];
  document.getElementById("initialSupportMessage").innerText = lang.support[1];
  document.getElementById("usermsg").placeholder = lang.support[2];
};

const SendMsgToSupport = () => {};

const openSupportChat = () => {
  let supportChatTemplate = `
  <section class="support">
        <div class="title">
          <h1 id="supportChatTitle">Support Chat</h1>
        </div>
        <div id="msgField" class="messageField">
          <div class="message S-msg">
            <h2 id="initialSupportMessage">
              Feel Free to seek help or ask questions from our support team at
              anytime
            </h2>
          </div>
        </div>
        <div class="messageBox">
          <input id="usermsg" type="text" placeholder="Write a Message" />
          <div class="icon" onclick="SendMsgToSupport();">
            <img src="/media/SVGs/Send.svg" alt="Send Message" />
          </div>
        </div>
      </section>`;

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

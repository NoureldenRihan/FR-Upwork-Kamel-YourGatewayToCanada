let formFeedbackDict = {
  successCalculatorFormFeedback: {
    en: {
      FormErrorMsg: "All Fields are required",
      FormIneligibleMsg:
        "ERROR: Your application is not eligible for Express Entry.",
      FormSuccessMsg: "Your success rate is estimated to",
    },
    fr: {
      FormErrorMsg: "Tous les champs sont obligatoires",
      FormIneligibleMsg:
        "ERREUR: Votre dossier n'est pas admissible à Entrée Express.",
      FormSuccessMsg: "Votre pourcentage de réussite est estimé à",
    },
  },
  loginFormFeedback: {
    en: {
      FormErrorMsg: "All Fields are required",
      FormIneligibleMsg: "Incorrect Login Details",
    },
    fr: {
      FormErrorMsg: "Tous les champs sont obligatoires",
      FormIneligibleMsg: "Informations de connexion incorrectes",
    },
  },
  registerFormFeedback: {
    en: {
      FormErrorMsg: "All Fields are required",
    },
    fr: {
      FormErrorMsg: "Tous les champs sont obligatoires",
    },
  },
};

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo, Democratic Republic of the",
  "Costa Rica",
  "Côte d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

let currentLanguage;
let isPasswordVisible = false;
let registerFormStep = 1;
let registrationFormAnswers = {};

let page = "";

window.onload = async () => {
  page = document.getElementById("pageName").innerText;

  await navBarInit();

  isPasswordVisible = false;
  registerFormStep = 1;

  if (page === "successCalculator") {
    const successCalculatorForm = document.getElementById(
      "successCalculatorForm"
    );

    successCalculatorForm.addEventListener("submit", (e) =>
      successCalculator(e)
    );
  } else if (page === "login") {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (e) => loginFormHandler(e));
  } else if (page === "register") {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", (e) => registerFormHandler(e));
  }
};

const convertWebsiteLanguage = (language) => {
  const iframe = document.getElementsByClassName(
    "VIpgJd-ZVi9od-xl07Ob-OEVmcd"
  )[0];

  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  if (iframeDoc) {
    const iframeContents = iframeDoc.querySelectorAll(
      "a.VIpgJd-ZVi9od-vH1Gmf-ibnC6b"
    );

    for (let i = 0; i < iframeContents.length; i++) {
      const elementText = iframeContents[i].textContent;
      if (language === elementText.slice(1)) {
        iframeContents[i].click();
      }
    }
  }
};

const openSupportChat = () => {
  window.scrollTo(0, 0);

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

  let h1 = document.getElementById("result");
  h1.innerText = "";
  h1.classList.remove("err");

  window.scrollTo(0, 0);

  let formAnswers = {};
  let formError = false;

  let formFeedback = formFeedbackDict.successCalculatorFormFeedback;

  if (currentLanguage === "en") {
    formFeedback = formFeedbackDict.successCalculatorFormFeedback.en;
  } else if (currentLanguage === "fr") {
    formFeedback = formFeedbackDict.successCalculatorFormFeedback.fr;
  }

  let ids = [
    "oralComprehension",
    "writtenComprehension",
    "oralExpression",
    "writtenExpression",
    "educationLevel",
    "professionalExperience",
    "age",
    "sectorOfActivity",
  ];

  idValueLoop: for (let i = 0; i < ids.length; i++) {
    const formElement = document.getElementById(ids[i]);
    if (
      formElement.value === "" ||
      formElement.value === "Sector of Activity" ||
      formElement.value === "Secteur d'Activité" ||
      formElement.value < 0
    ) {
      formError = true;
      break idValueLoop;
    }

    formAnswers[ids[i]] = formElement.value;
  }

  if (formError) {
    h1.innerText = formFeedback.FormErrorMsg;
    h1.classList.add("err");
    formError = false;
    return;
  }

  let percentage = 0;

  // Language Weighing
  if (
    formAnswers.oralComprehension === "B1" ||
    formAnswers.oralComprehension === "A2" ||
    formAnswers.oralComprehension === "A1" ||
    formAnswers.writtenComprehension === "B1" ||
    formAnswers.writtenComprehension === "A2" ||
    formAnswers.writtenComprehension === "A1" ||
    formAnswers.oralExpression === "B1" ||
    formAnswers.oralExpression === "A2" ||
    formAnswers.oralExpression === "A1" ||
    formAnswers.writtenExpression === "B1" ||
    formAnswers.writtenExpression === "A2" ||
    formAnswers.writtenExpression === "A1"
  ) {
    h1.innerText = formFeedback.FormIneligibleMsg;
    h1.classList.add("err");
    return;
  } else {
    const languageScores = {
      C2: 40,
      C1: 35,
      B2: 30,
    };

    const lowestLanguageScore = Math.min(
      languageScores[formAnswers.oralComprehension],
      languageScores[formAnswers.writtenComprehension],
      languageScores[formAnswers.oralExpression],
      languageScores[formAnswers.writtenExpression]
    );

    percentage += lowestLanguageScore;
  }

  // Education Weighing
  const educationScores = {
    "Bac+7": 30,
    "Bac+5": 25,
    "Bac+3": 20,
    "Bac+2": 15,
  };

  percentage += educationScores[formAnswers.educationLevel];

  // Experience weighing
  if (formAnswers.professionalExperience > 4) {
    percentage += 10;
  } else if (formAnswers.professionalExperience > 2) {
    percentage += 7;
  } else if (formAnswers.professionalExperience > 1) {
    percentage += 5;
  } else {
    percentage += 3;
  }

  // Age weighing
  if (formAnswers.age >= 18 && formAnswers.age <= 35) {
    percentage += 10;
  } else if (formAnswers.age >= 31 && formAnswers.age <= 40) {
    percentage += 7;
  } else if (formAnswers.age >= 41 && formAnswers.age <= 50) {
    percentage += 5;
  } else {
    percentage += 3;
  }

  // Sector weighing
  percentage += 10; // Adding baseline percentage for all sectors equally

  // Cap the percentage at 100%
  if (percentage > 100) {
    percentage = 100;
  }

  h1.innerText = formFeedback.FormSuccessMsg + ` ${percentage}%`;
  h1.classList.remove("err");
};

const passwordShowHide = () => {
  let passwordInput = document.getElementById("password");
  if (isPasswordVisible) {
    passwordInput.type = "password";
    isPasswordVisible = false;
  } else {
    passwordInput.type = "text";
    isPasswordVisible = true;
  }
};

const loginFormHandler = (e) => {
  e.preventDefault();

  let h1 = document.getElementById("result");
  h1.innerText = "";
  h1.classList.remove("err");

  let formAnswers = {};
  let formError = false;
  let formFeedback = formFeedbackDict.loginFormFeedback;

  if (currentLanguage === "en") {
    formFeedback = formFeedbackDict.loginFormFeedback.en;
  } else if (currentLanguage === "fr") {
    formFeedback = formFeedbackDict.loginFormFeedback.fr;
  }

  let ids = ["email", "password"];

  idValueLoop: for (let i = 0; i < ids.length; i++) {
    const formElement = document.getElementById(ids[i]);
    if (formElement.value.trim() === "") {
      formError = true;
      break idValueLoop;
    }

    formAnswers[ids[i]] = formElement.value;
  }

  if (formError) {
    h1.innerText = formFeedback.FormErrorMsg;
    h1.classList.add("err");
    formError = false;
    return;
  }
};

const registerFormHandler = (e) => {
  e.preventDefault();

  let h1 = document.getElementById("result");
  h1.innerText = "";
  h1.classList.remove("err");

  let lang;
  let formError = false;
  let formFeedback = formFeedbackDict.registerFormFeedback;

  let pageLanguage = document.getElementById("lang").innerText;

  if (pageLanguage === "en") {
    lang = English;
    formFeedback = formFeedbackDict.loginFormFeedback.en;
  } else if (pageLanguage === "fr") {
    lang = French;
    formFeedback = formFeedbackDict.loginFormFeedback.fr;
  }

  let ids = [
    "fullname",
    "email",
    "phonenumber",
    "gender",
    "Country of Citizenship",
    "Country of Residence",
    "Marital Status",
    "dateofbirth",
    "password",
  ];

  const formElement = document.getElementById(ids[registerFormStep - 1]);
  if (
    formElement.value.trim() === "" ||
    formElement.value === "Gender" ||
    formElement.value === "Genre" ||
    formElement.value === "Country of Citizenship" ||
    formElement.value === "Pays de citoyenneté" ||
    formElement.value === "Country of Residence" ||
    formElement.value === "Pays de résidence" ||
    formElement.value === "Marital Status" ||
    formElement.value === "État civil"
  ) {
    formError = true;
  } else {
    registrationFormAnswers[ids[registerFormStep - 1]] = formElement.value;
    registerFormStep += 1;
    let percentage = parseInt(document.getElementById("percentage").innerText);

    document.getElementById("currentProgress").style.width = `${
      Math.ceil(percentage + 100 / 9) > 100
        ? 100
        : Math.ceil(percentage + 100 / 9)
    }%`;
    document.getElementById("percentage").innerText = `${
      Math.ceil(percentage + 100 / 9) > 100
        ? 100
        : Math.ceil(percentage + 100 / 9)
    }%`;
  }

  if (formError) {
    h1.innerText = formFeedback.FormErrorMsg;
    h1.classList.add("err");
    formError = false;
    return;
  }

  switch (registerFormStep) {
    case 5:
      document.getElementById("registerationFormItem").innerHTML =
        lang.register.data.formSteps[`step${registerFormStep}`];

      let selectElement5 = document.getElementById(ids[registerFormStep - 1]);

      countries.forEach((country) => {
        const option = document.createElement("option");
        option.value = country;
        option.text = country;
        selectElement5.appendChild(option);
      });
      break;

    case 6:
      document.getElementById("registerationFormItem").innerHTML =
        lang.register.data.formSteps[`step${registerFormStep}`];

      let selectElement6 = document.getElementById(ids[registerFormStep - 1]);

      countries.forEach((country) => {
        const option = document.createElement("option");
        option.value = country;
        option.text = country;
        selectElement6.appendChild(option);
      });
      break;

    case 9:
      document.getElementById("registerationFormItem").innerHTML =
        lang.register.data.formSteps[`step${registerFormStep}`];

      document.getElementById("formBtn").innerText = "Register";
      break;

    case 10:
      // Setup Functionality of what happens after register form submit after linkage with backend
      break;

    default:
      document.getElementById("registerationFormItem").innerHTML =
        lang.register.data.formSteps[`step${registerFormStep}`];
      break;
  }
};

const navBarInit = async () => {
  await fetch("NavbarSnippet.html")
    .then((response) => response.text())
    .then((htmlContent) => {
      document.getElementById("navbar").innerHTML = htmlContent;
    });

  const inputElement = document.getElementById("searchBar");

  inputElement.addEventListener("input", function () {
    const datalist = document.getElementById("searchOptions");
    const options = Array.from(datalist.options).map((option) =>
      option.value.toLowerCase()
    );

    chosenOption = this.value.toLowerCase();
    chosenOptionPage = this.value.replace(" ", "");

    if (options.includes(chosenOption)) {
      if (chosenOption === "home") {
        goToPage("index");
      } else {
        goToPage(chosenOptionPage);
      }
    }
  });
};

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en", // Change 'en' to your default language code
      includedLanguages: "en,fr,ar", // Add the languages you want to include
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element"
  );
}

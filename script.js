let RegisterFormSteps = {
  English: {
    step1: `<label for="Full Name">Full Name</label><input
          id="fullname"
          class="formInput"
          type="text"
          placeholder="Full Name"
        />`,
    step2: `<label for="Email Address">Email Address</label><input
          id="email"
          class="formInput"
          type="email"
          placeholder="Email Address"
        />`,
    step3: `<label for="Phone Number">Phone Number</label><input
          id="phonenumber"
          class="formInput"
          type="text"
          placeholder="Phone Number"
        />`,
    step4: `<label for="Gender">Gender</label><div class="selectContainer">
          <select name="gender" id="gender">
            <option value="Gender" selected>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Don't Specify">Don't Specify</option>
          </select>
        </div>`,
    step5: `<label for="Country of Citizenship">Country of Citizenship</label><div class="selectContainer">
          <select name="Country of Citizenship" id="Country of Citizenship">
            <option value="Country of Citizenship" selected>Country of Citizenship</option>
          </select>
        </div>`,
    step6: `<label for="Country of Residence">Country of Residence</label><div class="selectContainer">
          <select name="Country of Residence" id="Country of Residence">
            <option value="Country of Residence" selected>Country of Residence</option>
          </select>
        </div>`,
    step7: `<label for="Marital Status">Marital Status</label><div class="selectContainer">
          <select name="Marital Status" id="Marital Status">
            <option value="Marital Status" selected>Marital Status</option>
            <option value="Single" >Single</option>
            <option value="Married" >Married</option>
            <option value="Divorced" >Divorced</option>
            <option value="Widowed" >Widowed</option>
          </select>
        </div>`,
    step8: `<label for="Date of Birth">Date of Birth</label><input
          id="dateofbirth"
          class="formInput"
          type="date"
        />`,
    step9: `<label for="Password">Password</label><div class="passinput">
          <input
            id="password"
            class="formInput"
            type="password"
            placeholder="Password"
          />
          <img
            src="media/SVGs/passwordEye.svg"
            alt="Password show/hide"
            onclick="passwordShowHide();"
          />
        </div>`,
  },
  French: {
    step1: `<label for="Full Name">Nom complet</label><input
          id="fullname"
          class="formInput"
          type="text"
          placeholder="Nom complet"
        />`,
    step2: `<label for="Email Address">Adresse e-mail</label><input
          id="email"
          class="formInput"
          type="email"
          placeholder="Adresse e-mail"
        />`,
    step3: `<label for="Phone Number">Numéro de téléphone</label><input
          id="phonenumber"
          class="formInput"
          type="text"
          placeholder="Numéro de téléphone"
        />`,
    step4: `<label for="Gender">Genre</label><div class="selectContainer">
          <select name="gender" id="gender">
            <option value="Gender" selected>Genre</option>
            <option value="Male">Homme</option>
            <option value="Female">Femme</option>
            <option value="Don't Specify">Ne pas spécifier</option>
          </select>
        </div>`,
    step5: `<label for="Country of Citizenship">Pays de nationalité</label><div class="selectContainer">
          <select name="Country of Citizenship" id="Country of Citizenship">
            <option value="Country of Citizenship" selected>Pays de nationalité</option>
          </select>
        </div>`,
    step6: `<label for="Country of Residence">Pays de résidence</label><div class="selectContainer">
          <select name="Country of Residence" id="Country of Residence">
            <option value="Country of Residence" selected>Pays de résidence</option>
          </select>
        </div>`,
    step7: `<label for="Marital Status">État civil</label><div class="selectContainer">
          <select name="Marital Status" id="Marital Status">
            <option value="Marital Status" selected>État civil</option>
            <option value="Single">Célibataire</option>
            <option value="Married">Marié</option>
            <option value="Divorced">Divorcé</option>
            <option value="Widowed">Veuf</option>
          </select>
        </div>`,
    step8: `<label for="Date of Birth">Date de naissance</label><input
          id="dateofbirth"
          class="formInput"
          type="date"
        />`,
    step9: `<label for="Password">Mot de passe</label><div class="passinput">
          <input
            id="password"
            class="formInput"
            type="password"
            placeholder="Mot de passe"
          />
          <img
            src="media/SVGs/passwordEye.svg"
            alt="Afficher/masquer le mot de passe"
            onclick="passwordShowHide();"
          />
        </div>`,
  },
  Arabic: {
    step1: `<label for="Full Name">الاسم الكامل</label><input
          id="fullname"
          class="formInput"
          type="text"
          placeholder="الاسم الكامل"
        />`,
    step2: `<label for="Email Address">عنوان البريد الإلكتروني</label><input
          id="email"
          class="formInput"
          type="email"
          placeholder="عنوان البريد الإلكتروني"
        />`,
    step3: `<label for="Phone Number">رقم الهاتف</label><input
          id="phonenumber"
          class="formInput"
          type="text"
          placeholder="رقم الهاتف"
        />`,
    step4: `<label for="Gender">الجنس</label><div class="selectContainer">
          <select name="gender" id="gender">
            <option value="Gender" selected>الجنس</option>
            <option value="Male">ذكر</option>
            <option value="Female">أنثى</option>
            <option value="Don't Specify">لا تذكر</option>
          </select>
        </div>`,
    step5: `<label for="Country of Citizenship">بلد الجنسية</label><div class="selectContainer">
          <select name="Country of Citizenship" id="Country of Citizenship">
            <option value="Country of Citizenship" selected>بلد الجنسية</option>
          </select>
        </div>`,
    step6: `<label for="Country of Residence">بلد الإقامة</label><div class="selectContainer">
          <select name="Country of Residence" id="Country of Residence">
            <option value="Country of Residence" selected>بلد الإقامة</option>
          </select>
        </div>`,
    step7: `<label for="Marital Status">الحالة الاجتماعية</label><div class="selectContainer">
          <select name="Marital Status" id="Marital Status">
            <option value="Marital Status" selected>الحالة الاجتماعية</option>
            <option value="Single">أعزب</option>
            <option value="Married">متزوج</option>
            <option value="Divorced">مطلق</option>
            <option value="Widowed">أرمل</option>
          </select>
        </div>`,
    step8: `<label for="Date of Birth">تاريخ الميلاد</label><input
          id="dateofbirth"
          class="formInput"
          type="date"
        />`,
    step9: `<label for="Password">كلمة المرور</label><div class="passinput">
          <input
            id="password"
            class="formInput"
            type="password"
            placeholder="كلمة المرور"
          />
          <img
            src="media/SVGs/passwordEye.svg"
            alt="إظهار/إخفاء كلمة المرور"
            onclick="passwordShowHide();"
          />
        </div>`,
  },
};

let formFeedbackDict = {
  English: {
    successCalculatorFormFeedback: {
      FormErrorMsg: "All Fields are required",
      FormIneligibleMsg:
        "ERROR: Your application is not eligible for Express Entry.",
      FormSuccessMsg: "Your success rate is estimated to",
    },
    loginFormFeedback: {
      FormErrorMsg: "All Fields are required",
      FormIneligibleMsg: "Incorrect Login Details",
    },
    registerFormFeedback: {
      FormErrorMsg: "All Fields are required",
    },
  },
  French: {
    successCalculatorFormFeedback: {
      FormErrorMsg: "Tous les champs sont requis",
      FormIneligibleMsg:
        "ERREUR : Votre demande n'est pas éligible pour Entrée Express.",
      FormSuccessMsg: "Votre taux de succès est estimé à",
    },
    loginFormFeedback: {
      FormErrorMsg: "Tous les champs sont requis",
      FormIneligibleMsg: "Détails de connexion incorrects",
    },
    registerFormFeedback: {
      FormErrorMsg: "Tous les champs sont requis",
    },
  },
  Arabic: {
    successCalculatorFormFeedback: {
      FormErrorMsg: "جميع الحقول مطلوبة",
      FormIneligibleMsg: "خطأ: طلبك غير مؤهل لبرنامج الدخول السريع.",
      FormSuccessMsg: "تم تقدير معدل نجاحك",
    },
    loginFormFeedback: {
      FormErrorMsg: "جميع الحقول مطلوبة",
      FormIneligibleMsg: "تفاصيل تسجيل الدخول غير صحيحة",
    },
    registerFormFeedback: {
      FormErrorMsg: "جميع الحقول مطلوبة",
    },
  },
};

let statusDict = {
  English: ["To Do", "In Progress", "Completed"],
  French: ["À faire", "En cours", "Terminé"],
  Arabic: ["يجب فعله", "قيد التقدم", "مكتمل"],
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

let isPasswordVisible = false;
let registerFormStep = 1;
let registrationFormAnswers = {};
let pageLanguage = "English";

let page = "";

window.onload = async () => {
  page = document.getElementById("pageName").getAttribute("data-name");

  isPasswordVisible = false;
  registerFormStep = 1;

  let localStorageLanguage = localStorage.getItem("language");

  if (localStorageLanguage !== "English" && localStorageLanguage !== null) {
    TranslateWebsite(localStorageLanguage);
    return;
  }

  await navBarInit("English");

  await timelineInit("English", page);

  eventListenerHandler();
};

const TranslateWebsite = async (language) => {
  let lang = "";
  if (language === "English") {
    localStorage.setItem("language", language);
    pageLanguage = language;
    goToPage(page);
    return;
  } else if (language === "French") {
    lang = "fr";
  } else if (language === "Arabic") {
    lang = "ar";
  }

  if (page === "Register") {
    if (registerFormStep !== 1) {
      localStorage.setItem("language", language);
      pageLanguage = language;
      goToPage(page);
      return;
    }
  }

  await fetch(`Translations/${lang}/${page}.html`)
    .then((response) => response.text())
    .then((htmlContent) => {
      document.getElementsByTagName("body")[0].innerHTML = htmlContent;
    });

  await navBarInit(language);
  await timelineInit(language);

  eventListenerHandler();

  localStorage.setItem("language", language);
  pageLanguage = language;
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
  h1.style.padding = "10px 15px";
  h1.classList.remove("err");

  window.scrollTo(0, 0);

  let formAnswers = {};
  let formError = false;

  let formFeedback =
    formFeedbackDict[pageLanguage].successCalculatorFormFeedback;

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
  let notAcceptedLangaugeValues = [
    "NCLC1",
    "NCLC2",
    "NCLC3",
    "NCLC4",
    "NCLC5",
    "NCLC6",
    "NCLC7",
  ];

  // Language Weighing
  if (
    notAcceptedLangaugeValues.includes(formAnswers.oralComprehension) ||
    notAcceptedLangaugeValues.includes(formAnswers.writtenComprehension) ||
    notAcceptedLangaugeValues.includes(formAnswers.oralExpression) ||
    notAcceptedLangaugeValues.includes(formAnswers.writtenExpression)
  ) {
    h1.innerText = formFeedback.FormIneligibleMsg;
    h1.classList.add("err");
    return;
  } else {
    const languageScores = {
      NCLC10: 40,
      NCLC9: 35,
      NCLC8: 30,
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

const eventListenerHandler = () => {
  if (page === "SuccessCalculator") {
    const successCalculatorForm = document.getElementById(
      "successCalculatorForm"
    );

    successCalculatorForm.addEventListener("submit", (e) =>
      successCalculator(e)
    );
  } else if (page === "Login") {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (e) => loginFormHandler(e));
  } else if (page === "Register") {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", (e) => registerFormHandler(e));
  }
};

const loginFormHandler = (e) => {
  e.preventDefault();

  let h1 = document.getElementById("result");
  h1.innerText = "";
  h1.classList.remove("err");

  let formAnswers = {};
  let formError = false;
  let formFeedback = formFeedbackDict[pageLanguage].loginFormFeedback;

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

  let formError = false;
  let formFeedback = formFeedbackDict[pageLanguage].registerFormFeedback;

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
        RegisterFormSteps[pageLanguage][`step${registerFormStep}`];

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
        RegisterFormSteps[pageLanguage][`step${registerFormStep}`];

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
        RegisterFormSteps[pageLanguage][`step${registerFormStep}`];

      document.getElementById("formBtn").innerText = "Register";
      break;

    case 10:
      // Setup Functionality of what happens after register form submit after linkage with backend
      break;

    default:
      document.getElementById("registerationFormItem").innerHTML =
        RegisterFormSteps[pageLanguage][`step${registerFormStep}`];
      break;
  }
};

const navBarInit = async (language) => {
  let query = "NavbarSnippet.html";
  if (language === "French") {
    query = "Translations/fr/NavbarSnippet.html";
  } else if (language === "Arabic") {
    query = "Translations/ar/NavbarSnippet.html";
  }

  await fetch(query)
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

const timelineInit = async (language) => {
  let query = "TimelineSnippet.html";
  if (language === "French") {
    query = "Translations/fr/TimelineSnippet.html";
  } else if (language === "Arabic") {
    query = "Translations/ar/TimelineSnippet.html";
  }

  let circles = document.getElementsByClassName("timeline-circle");
  let statuses = document.getElementsByClassName("status");

  switch (page) {
    case "TravelKit":
      await timelineSnippetFetcher(query);
      circles[0].classList.remove("inactive");
      circles[0].classList.add("in-progress");
      statuses[0].innerText = statusDict[language][1];
      break;
    case "ArrivalKitYUL":
      break;
    case "ArrivalKit":
      await timelineSnippetFetcher(query);
      circles[0].classList.remove("inactive");
      circles[0].classList.add("completed");
      circles[0].style.setProperty("--line-color", "#4789fd");
      statuses[0].innerText = statusDict[language][2];

      circles[1].classList.remove("inactive");
      circles[1].classList.add("completed");
      circles[1].style.setProperty("--line-color", "#4789fd");
      statuses[1].innerText = statusDict[language][2];

      circles[2].classList.remove("inactive");
      circles[2].classList.add("in-progress");
      statuses[2].innerText = statusDict[language][1];
      break;
    case "ArrivalKitQuebec":
      break;
    default:
      break;
  }
};

const timelineSnippetFetcher = async (query) => {
  await fetch(query)
    .then((response) => response.text())
    .then((htmlContent) => {
      document.getElementById("timeline").innerHTML = htmlContent;
    });
};

let RegisterFormSteps = {
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
};

let formFeedbackDict = {
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

let currentLanguage = "English";
let isPasswordVisible = false;
let didLanguageChange = false;
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

  if (didLanguageChange === false) {
    if (language === "English") {
      return;
    } else {
      didLanguageChange = true;
    }
  }

  if (iframeDoc) {
    const iframeContents = iframeDoc.querySelectorAll(
      "a.VIpgJd-ZVi9od-vH1Gmf-ibnC6b"
    );

    for (let i = 0; i < iframeContents.length; i++) {
      const elementText = iframeContents[i].textContent.slice(1);
      console.log(language);
      console.log(elementText);
      let finalText = elementText;

      if (
        elementText === "الإنجليزية" ||
        elementText.toLowerCase() === "anglaise" ||
        elementText.toLowerCase() === "English"
      ) {
        finalText = "English";
      } else if (
        elementText === "العربية" ||
        elementText.toLowerCase() === "arabe" ||
        elementText.toLowerCase() === "Arabic"
      ) {
        finalText = "Arabic";
      } else if (
        elementText === "الفرنسية" ||
        elementText.toLowerCase() === "français" ||
        elementText.toLowerCase() === "French"
      ) {
        finalText = "French";
      }

      if (language === finalText) {
        console.log("Clicking Language");
        iframeContents[i].click();
        iframeContents[i].click();
        currentLanguage = language;
      }
    }
  }

  setInterval(() => {
    successCalculatorTranslationFix();
  }, 500);
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

const successCalculatorTranslationFix = () => {
  ids = [
    "oralComprehension",
    "writtenComprehension",
    "oralExpression",
    "writtenExpression",
  ];

  for (let i = 0; i < ids.length; i++) {
    const element = document.getElementById(ids[i]);
    element.options[0].value = "A1";
    element.options[0].innerText = "A1";
    element.options[1].value = "A2";
    element.options[1].innerText = "A2";
    element.options[2].value = "B1";
    element.options[2].innerText = "B1";
    element.options[3].value = "B2";
    element.options[3].innerText = "B2";
    element.options[4].value = "C1";
    element.options[4].innerText = "C1";
    element.options[5].value = "C2";
    element.options[5].innerText = "C2";
  }
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
        RegisterFormSteps[`step${registerFormStep}`];

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
        RegisterFormSteps[`step${registerFormStep}`];

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
        RegisterFormSteps[`step${registerFormStep}`];

      document.getElementById("formBtn").innerText = "Register";
      break;

    case 10:
      // Setup Functionality of what happens after register form submit after linkage with backend
      break;

    default:
      document.getElementById("registerationFormItem").innerHTML =
        RegisterFormSteps[`step${registerFormStep}`];
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
      pageLanguage: "en",
      includedLanguages: "en,fr,ar",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
    },
    "google_translate_element"
  );
}

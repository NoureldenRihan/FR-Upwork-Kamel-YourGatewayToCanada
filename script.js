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
    arrival: "Arrival Kit",
  },
  successCalculator: {
    NavBar: ["HOME", "SERVICES", "CONTACT", "DIRECTIONS", "ABOUT US", "LOGIN"],
    title: "Chance of Success Calculator",
    sectorOptions: `<select id="sectorOfActivity" name="sectorOfActivity" required>
                <optgroup label="Sector Of Activity">
                  <option value="Sector of Activity" selected>
                    Sector of Activity
                  </option>
                </optgroup>
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
  arrivalKit: {
    NavBar: ["HOME", "SERVICES", "CONTACT", "DIRECTIONS", "ABOUT US", "LOGIN"],
    title: "Arrival Kit",
    data: `<ul>
          <li class="arrivalKitItem">
            <p>
              <span>1/ Purchase a SIM card.</span> Chatr: $32.00/month, 50 GB of
              data, autopay bonus, unlimited calls across Canada on 2G network.
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>2/ Obtain a SIN (Social Insurance Number):</span> Visit the
              nearest SERVICE CANADA with your passport and permanent residence
              confirmation document. Take a ticket and wait for your turn.
              <button class="btn"><a
                  href="https://www.google.com/maps/search/?api=1&query=Service+Canada+Centre"
                  >Locate the nearest Service Canada</a></button>
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>3/ Obtain a Permanent Resident card:</span> Contact IRCC and
              follow the instructions, especially for address change if
              necessary, so that your card is sent to your current address.
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>4/ Obtain a Health Card:</span> Visit the nearest SERVICE
              ONTARIO with your passport, permanent residence confirmation
              document, lease contract, and the completed and signed form
              (available on-site). Take a ticket and wait for your turn. After
              registration, expect to receive your card by mail within 1 to 2
              weeks.
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>5/ Open a bank account:</span> We will help you choose the
              bank that suits you. Bring identification (passport or permanent
              resident card), the permanent residence confirmation document, the
              lease contract, and the SIN document.
              <button class="btn">Choose and locate a bank near you</button>
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>6/ Register for Ontario Works:</span> Create an online
              account at
              <a href="https://www.ontario.ca/page/ontario-works"
                >https://www.ontario.ca/page/ontario-works</a
              >. Follow the steps: download and fill out the forms, send the
              requested documents, wait for the results. Once accepted, follow
              your programs on the site or via the MY BENEFITS app (Android or
              iOS).
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>7/ Register at the YMCA:</span>
              <a href="https://www.ymca.ca">https://www.ymca.ca</a> - 1 - Make
              an appointment for an assessment of your English level to study or
              improve your English for free (part-time or full-time). 2 -
              Request to be referred for the furniture bank. 3 - Actively search
              for a job in collaboration with Ontario Works.
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>8/ Apply for the Canada Child Benefit:</span> Download the
              forms at
              <a
                href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-how-apply.html#how"
                >https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-how-apply.html#how</a
              >. Complete them, attach the required documents, and send
              everything to the indicated address. Wait 8 to 11 weeks to receive
              the funds.
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>9/ After acceptance by Ontario Works:</span> Request the
              "starter kit" containing basic household items.
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>10/ Purchase the OC Transpo card:</span>
              <a href="https://www.octranspo.com/en/fares/payment/presto-en/"
                >https://www.octranspo.com/en/fares/payment/presto-en/</a
              >
              With the help of Ontario Works, you only pay 42% of the amount for
              one month of public transportation throughout Ontario.
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>11/ Visit the furniture bank:</span> To get good-condition
              used furniture (sofa, table, chairs, wardrobe, etc.) for $200 to
              $250, including transportation.
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>12/ Register at the food bank:</span> For food assistance
              and baby diapers if needed. Available once or twice a month
              depending on eligibility.
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span
                >13/ Enroll in the Ontario Electricity Support Program:</span
              >
              <a href="https://www.ontarioelectricitysupport.ca/"
                >https://www.ontarioelectricitysupport.ca/</a
              >
              Financial assistance up to $83 per electricity bill for 24 months.
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>14/ Register for a family doctor:</span>
              <a
                href="https://www.ontario.ca/page/find-family-doctor-nurse-practitioner"
                >https://www.ontario.ca/page/find-family-doctor-nurse-practitioner</a
              >
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>15/ For Algerian immigrants:</span> Create an account at
              <a href="https://capacitepc.interieur.gov.dz"
                >https://capacitepc.interieur.gov.dz</a
              >
              for: 1 - Driving license capacity 2 - Consular card
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>16/ Obtain a driver's license:</span> Make an appointment on
              <a href="Drivetest.ca">Drivetest.ca</a>. With capacity: G1 then
              full G license within 1 month max. Without capacity: G1 in 8
              months, then G2 in 24 months for the full G license. You should
              also go to PAF (Francophone Welcome Point) + the nearest community
              center.
            </p>
          </li>
        </ul>`,
    home: "Return Home",
  },
  login: {
    NavBar: ["HOME", "SERVICES", "CONTACT", "DIRECTIONS", "ABOUT US", "LOGIN"],
    text: [
      "Email Address",
      "Password",
      "Login Now!",
      "Login to Access and Manage Your Account!",
      `Don't Have an Account? <a href="Register.html">Register Now</a>`,
    ],
  },
  register: {
    NavBar: ["HOME", "SERVICES", "CONTACT", "DIRECTIONS", "ABOUT US", "LOGIN"],
    data: {
      text: [
        "Registration",
        "Register Now!",
        "Register an Account Now & Get All the Benefits!",
        "Already Have an Account? Login Now",
      ],
      formSteps: {
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
    },
    button: "Next",
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
    arrival: "Kit d'Arrivée",
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
                <optgroup label="Secteur d'Activité">
                  <option value="Secteur d'Activité" selected>
                    Secteur d'Activité
                  </option>
                </optgroup>
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
  arrivalKit: {
    NavBar: [
      "ACCUEIL",
      "SERVICES",
      "CONTACT",
      "DIRECTIONS",
      "À PROPOS",
      "CONNEXION",
    ],
    title: "Kit d'Arrivée",
    data: `<ul>
          <li class="arrivalKitItem">
            <p>
              <span>1/ Acheter une carte SIM téléphonique.</span> Chatr : 32,00 $/mois, 50 Go de données, bonus d'autopaiement, appels illimités partout au Canada sur réseau 2G.</p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>2/ Obtention du NAS (numéro d'assurance sociale):</span> Se rendre au SERVICE CANADA le plus proche avec votre passeport et le document de confirmation de résidence permanente. Prenez un ticket et attendez votre tour. <button class="btn"><a
                  href="https://www.google.com/maps/search/?api=1&query=Service+Canada+Centre"
                  >Localiser le Service Canada le plus proche</a></button></p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>3/ Obtention de la carte de résident permanent:</span> Contactez IRCC et suivez les instructions, notamment pour le changement d'adresse si nécessaire, afin que votre carte soit envoyée à votre adresse actuelle.</p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>4/ Obtention de la carte Santé:</span>Rendez-vous au SERVICE ONTARIO le plus proche avec votre passeport, le document de confirmation de résidence permanente, le contrat de bail et le formulaire rempli et signé (disponible sur place). Prenez un ticket et attendez votre tour. Après l'inscription, comptez 1 à 2 semaines pour recevoir votre carte par courrier.</p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>5/ Ouverture d'un compte bancaire:</span>Nous vous aiderons à choisir la banque qui vous convient. Apportez une pièce d'identité (passeport ou carte de résident permanent), la confirmation de résidence permanente, le contrat de bail et le document du NAS. <button class="btn">Choisir et localiser une banque près de chez vous</button></p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>6/ Inscription à Ontario au travail:</span> Créez un compte en ligne sur
              <a href="https://www.ontario.ca/fr/page/ontario-au-travail"
                >https://www.ontario.ca/fr/page/ontario-au-travail</a
              >. Suivez les étapes : téléchargez et remplissez les formulaires, envoyez les documents demandés, attendez les résultats. Une fois accepté, suivez vos programmes sur le site ou via l'application MES PRESTATIONS (Android ou iOS).
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>7/ Inscription à la YMCA:</span>
              <a href="https://www.ymca.ca/fr">https://www.ymca.ca/fr</a> - 1 - Prenez rendez-vous pour l'évaluation de votre niveau d'anglais afin d'étudier ou d'améliorer votre anglais gratuitement (temps partiel ou plein temps). 2 - Demandez à être référencé pour la banque de meubles. 3 - Recherche active d'emploi en collaboration avec Ontario au travail.</p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>8/ Allocation canadienne pour enfants:</span> Téléchargez les formulaires sur
              <a
                href="https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-comment-faire-demande.html#how"
                >https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-comment-faire-demande.html#how</a
              >. Remplissez-les, joignez les documents requis, envoyez le tout à l'adresse indiquée. Attendez 8 à 11 semaines pour recevoir les fonds.
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>9/ Après l'acceptation par Ontario au travail:</span> Demandez le « kit de démarrage » contenant le matériel de base pour la maison.
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>10/ Achat de la carte OC Transpo:</span>
              <a href="https://www.octranspo.com/fr/tarifs/paiement/presto-fr/"
                >https://www.octranspo.com/fr/tarifs/paiement/presto-fr/</a
              >
              Avec l'aide d'Ontario au travail, vous ne payez que 42 % du montant pour un mois de transport en commun dans tout l'Ontario.</p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>11/ Rendez-vous à la banque de meubles:</span> Pour obtenir des meubles d'occasion en bon état (canapé, table, chaises, armoire, etc.) pour 200 à 250 $, transport inclus.</p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>12/ Inscription à la banque alimentaire:</span> Pour une aide alimentaire et des couches pour bébé si nécessaire. Disponible une à deux fois par mois selon l'admissibilité.</p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span
                >13/  Inscription au Programme ontarien d'aide relative aux frais d'électricité:</span
              >
              <a href="https://www.ontarioelectricitysupport.ca/"
                >https://www.ontarioelectricitysupport.ca/</a
              >
              Aide financière jusqu'à 83 $ par facture d'électricité pendant 24 mois.</p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>14/ Inscription pour un médecin de famille:</span>
              <a
                href="https://www.ontario.ca/fr/page/trouver-un-medecin-de-famille-ou-une-infirmiere-praticienne"
                >https://www.ontario.ca/fr/page/trouver-un-medecin-de-famille-ou-une-infirmiere-praticienne</a
              >
            </p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>15/ Pour les immigrants algériens:</span> Créez un compte sur
              <a href="https://capacitepc.interieur.gov.dz"
                >https://capacitepc.interieur.gov.dz</a
              >
              pour : 1 - La capacité de permis de conduire 2 - La carte consulaire</p>
          </li>
          <li class="arrivalKitItem">
            <p>
              <span>16/ Obtention du permis de conduire:</span> Prenez rendez-vous sur
              <a href="Drivetest.ca">Drivetest.ca</a>. Avec capacité : G1 puis permis G complet en 1 mois maximum. Sans capacité : G1 en 8 mois, puis G2 en 24 mois pour le permis G complet.
Vous devez aussi aller à PAF (point d'accueil francophone) + le centre communautaire les plus proches.</p>
          </li>
        </ul>`,
    home: "Retour à la Maison",
  },
  login: {
    NavBar: [
      "ACCUEIL",
      "SERVICES",
      "CONTACT",
      "DIRECTIONS",
      "À PROPOS",
      "CONNEXION",
    ],
    text: [
      "Adresse E-mail",
      "Mot de passe",
      "Se connecter maintenant !",
      "Connectez-vous pour accéder et gérer votre compte !",
      `Vous n'avez pas de compte ? <a href="Register.html">Inscrivez-vous maintenant</a>`,
    ],
  },
  register: {
    NavBar: [
      "ACCUEIL",
      "SERVICES",
      "CONTACT",
      "DIRECTIONS",
      "À PROPOS",
      "CONNEXION",
    ],
    data: {
      text: [
        "Inscription",
        "Inscrivez-vous maintenant!",
        "Créez un compte maintenant et bénéficiez de tous les avantages!",
        "Vous avez déjà un compte? Connectez-vous maintenant",
      ],
      formSteps: {
        step1: `<label for="Nom complet">Nom complet</label><input
              id="fullname"
              class="formInput"
              type="text"
              placeholder="Nom complet"
            />`,
        step2: `<label for="Adresse électronique">Adresse électronique</label><input
              id="email"
              class="formInput"
              type="email"
              placeholder="Adresse électronique"
            />`,
        step3: `<label for="Numéro de téléphone">Numéro de téléphone</label><input
              id="phonenumber"
              class="formInput"
              type="text"
              placeholder="Numéro de téléphone"
            />`,
        step4: `<label for="Genre">Genre</label><div class="selectContainer">
              <select name="gender" id="gender">
                <option value="Genre" selected>Genre</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
                <option value="Ne pas spécifier">Ne pas spécifier</option>
              </select>
            </div>`,
        step5: `<label for="Pays de citoyenneté">Pays de citoyenneté</label><div class="selectContainer">
              <select name="Country of Citizenship" id="Country of Citizenship">
                <option value="Pays de citoyenneté" selected>Pays de citoyenneté</option>
              </select>
            </div>`,
        step6: `<label for="Pays de résidence">Pays de résidence</label><div class="selectContainer">
              <select name="Country of Residence" id="Country of Residence">
                <option value="Pays de résidence" selected>Pays de résidence</option>
              </select>
            </div>`,
        step7: `<label for="État civil">État civil</label><div class="selectContainer">
              <select name="Marital Status" id="Marital Status">
                <option value="État civil" selected>État civil</option>
                <option value="Célibataire" >Célibataire</option>
                <option value="Marié(e)" >Marié(e)</option>
                <option value="Divorcé(e)" >Divorcé(e)</option>
                <option value="Veuf/Veuve" >Veuf/Veuve</option>
              </select>
            </div>`,
        step8: `<label for="Date de naissance">Date de naissance</label><input
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
    },
    button: "Suivant",
  },
};

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

let page = "";

window.onload = () => {
  page = document.getElementById("pageName").innerText;

  convertWebsiteLanguage("en", true);

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

const convertWebsiteLanguage = (language, initialReset = false) => {
  let lang;
  if (language === "en") {
    lang = English;
    currentLanguage = "en";
  } else if (language === "fr") {
    lang = French;
    currentLanguage = "fr";
  }

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

    document.getElementById("arrival").innerText = lang.arrival;

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
  } else if (page === "arrivalKit") {
    lang = lang.arrivalKit;

    let navItems = document.querySelectorAll(".navText a");

    for (let i = 0; i < navItems.length; i++) {
      navItems[i].innerText = lang.NavBar[i].toUpperCase();
    }

    document.getElementById("arrivalKitTitle").innerText = lang.title;

    document.getElementById("arrivalKitData").innerHTML = lang.data;

    document.getElementById("home").innerText = lang.home;
  } else if (page === "login") {
    lang = lang.login;

    let navItems = document.querySelectorAll(".navText a");

    for (let i = 0; i < navItems.length; i++) {
      navItems[i].innerText = lang.NavBar[i].toUpperCase();
    }

    let labels = document.getElementsByTagName("label");

    for (let i = 0; i < labels.length; i++) {
      labels[i].innerText = lang.text[i];
    }

    document.getElementById("title").innerText = lang.text[2];
    document.getElementById("subtitle").innerText = lang.text[3];
    document.getElementById("option").innerHTML = lang.text[4];
  } else if (page === "register") {
    let pageLanguage = document.getElementById("lang").innerText;
    if (!initialReset) {
      if ((pageLanguage === "fr") & (language === "en")) {
        goToPage("Register");
      } else if ((pageLanguage === "en") & (language === "fr")) {
        goToPage("Registerfrench");
      }
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

let registrationFormAnswers = {};

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

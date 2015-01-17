var us_states = [
   {"label": 'Alabama', "value" : 'AL' },
   {"label": 'Alaska', "value"                : 'AK'},
   {"label": 'American Samoa', "value"        : 'AS'},
   {"label": 'Arizona', "value"               : 'AZ'},
   {"label": 'Arkansas', "value"              : 'AR'},
   {"label": 'Armed Forces Europe', "value"   : 'AE'},
   {"label": 'Armed Forces Americas', "value" : 'AA'},
   {"label": 'Armed Forces Pacific', "value"  : 'AP'},
   {"label": 'California', "value"            : 'CA'},
   {"label": 'Colorado', "value"              : 'CO'},
   {"label": 'Connecticut', "value"           : 'CT'},
   {"label": 'District Of Columbia', "value" : 'DC'},
   {"label": 'Delaware', "value"     : 'DE'},
   {"label": 'Florida', "value"      : 'FL'},
   {"label": 'Georgia', "value"      : 'GA'},
   {"label": 'Guam', "value"         : 'GU'},
   {"label": 'Hawaii', "value"    : 'HI'},
   {"label": 'Idaho', "value"        : 'ID'},
   {"label": 'Illinois', "value"     : 'IL'},
   {"label": 'Indiana', "value"      : 'IN'},
   {"label": 'Iowa', "value"         : 'IA'},
   {"label": 'Kansas', "value"    : 'KS'},
   {"label": 'Kentucky', "value"     : 'KY'},
   {"label": 'Louisiana', "value"    : 'LA'},
   {"label": 'Maine', "value"        : 'ME'},
   {"label": 'Marshall Islands', "value": 'MH'},
   {"label": 'Maryland', "value"     : 'MD'},
   {"label": 'Massachusetts', "value"   : 'MA'},
   {"label": 'Michigan', "value"     : 'MI'},
   {"label": 'Micronesia', "value"   : 'FM'},
   {"label": 'Minnesota', "value"    : 'MN'},
   {"label": 'Mississippi', "value"  : 'MS'},
   {"label": 'Missouri', "value"     : 'MO'},
   {"label": 'Montana', "value"      : 'MT'},
   {"label": 'Nebraska', "value"     : 'NE'},
   {"label": 'Nevada', "value"    : 'NV'},
   {"label": 'New Hampshire', "value"   : 'NH'},
   {"label": 'New Jersey', "value"   : 'NJ'},
   {"label": 'New Mexico', "value"   : 'NM'},
   {"label": 'New York', "value"     : 'NY'},
   {"label": 'North Carolina', "value": 'NC'},
   {"label": 'North Dakota', "value" : 'ND'},
   {"label": 'Northern Mariana Islands', "value": 'MP'},
   {"label": 'Ohio', "value"         : 'OH'},
   {"label": 'Oklahoma', "value"     : 'OK'},
   {"label": 'Oregon', "value"    : 'OR'},
   {"label": 'Palau', "value"        : 'PW'},
   {"label": 'Pennsylvania', "value" : 'PA'},
   {"label": 'Puerto Rico', "value"  : 'PR'},
   {"label": 'Rhode Island', "value" : 'RI'},
   {"label": 'South Carolina', "value": 'SC'},
   {"label": 'South Dakota', "value" : 'SD'},
   {"label": 'Tennessee', "value"    : 'TN'},
   {"label": 'Texas', "value"        : 'TX'},
   {"label": 'Utah', "value"         : 'UT'},
   {"label": 'Vermont', "value"      : 'VT'},
   {"label": 'Virginia', "value"     : 'VA'},
   {"label": 'Virgin Islands', "value": 'VI'},
   {"label": 'Washington', "value"   : 'WA'},
   {"label": 'West Virginia', "value"   : 'WV'},
   {"label": 'Wisconsin', "value"    : 'WI'},
   {"label": 'Wyoming', "value"      : 'WY'}
];

var Collections = {};
var Schemas = {};

Schemas.Contact = new SimpleSchema({
   email: {
      type: String,
      label: 'Email',
      regEx: SimpleSchema.RegEx.Email,
      max: 255
   }, 
   name: {
      type: String,
      label: 'Name',
      max: 128
   },
   address1: {
      type: String,
      label: 'Address 1',
      max: 255
   }, 
   address2: {
      type: String,
      label: 'Address 2',
      max: 255,
      optional: true
   }, 
   city: {
      type: String,
      label: 'City',
      max: 255
   }, 
   state: {
      type: String,
      label: 'State',
      max: 2,
      autoform: {
         options: function () {
            return us_states;
         }
      }
   }, 
   postalcode: {
      type: String,
      label: 'Postal Code',
      regEx: /^[0-9]{5}(?:-[0-9]{4})?$/
   }, 
   phone: {
      type: String,
      label: 'Phone',
      max: 55
   }
});

Collections.Exemptions = new Mongo.Collection("exemptions");
Collections.Exemptions.attachSchema(Schemas.Contact);

Router.configure({
   layoutTemplate: 'layout'
});

if (Meteor.isClient) {
   Router.route('/', function() {
      this.render('home');
   });

   Router.route('/exemptions');

   Router.route('/contact');

   Router.route('/success');

   Template.exemptionsForm.helpers({
      checked: function(checked) {
         return checked ? "checked" : "";
      },

      // This is terribly formatted because it's copypastad from https://docs.google.com/spreadsheets/d/1o7MpAeQvmzF-bhdSkSNeXUOWHWL_dK50gL7iYAZFgH8/edit#gid=0
      exemption_requests: function() {
	       return [
{'exemption':
{'name': 'Remix multimedia', 'description': 'Convert, back up, and remix content that you legally own', 'list': [{'title': 'Multimedia — Universities', 'category': 'Remix', 'right': 'Remix your media while at universities', 'description': 'Allow college and university faculty and students to circumvent access controls on lawfully made and acquired motion pictures and other audiovisual works for purposes of criticism and comment. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by the Content Scramble System (“CSS”), Blu-ray discs protected by the Advanced Access Content System (“AACS”), and TPM-protected online distribution services.', 'source': 'https://www.eff.org/document/eff-remix-streming-exemption-request', 'index': '1', 'enabled': 0 },{'title': 'Multimedia — K12', 'category': 'Remix', 'right': 'Remix your media while in school', 'description': 'Allow kindergarten through twelfth-grade educators and students to circumvent access controls on lawfully made and acquired motion pictures and other audiovisual works for educational purposes. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'source': 'https://www.eff.org/document/eff-remix-streming-exemption-request', 'index': '2', 'enabled': 0 },{'title': 'Multimedia — Online', 'category': 'Remix', 'right': 'Remix media you own while enrolled in online courses', 'description': 'Allow students and faculty participating in Massive Open Online Courses (“MOOCs”) to circumvent access controls on lawfully made and acquired motion pictures and other audiovisual works for purposes of criticism and comment. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'source': 'https://www.eff.org/document/eff-remix-streming-exemption-request', 'index': '3', 'enabled': 0 },{'title': 'Multimedia — Libraries & Non-profits', 'category': 'Remix', 'right': 'Remix your media at libraries and non-profit organizations', 'description': 'Allow educators and learners in libraries, museums and nonprofit organizations to circumvent access controls on lawfully made and acquired motion pictures and other audiovisual works for educational purposes. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'source': 'https://www.eff.org/document/authors-alliance-and-bobette-buster-uci-and-samuelson-glushko-clinic-multimedia-ebooks', 'index': '4', 'enabled': 0 },{'title': 'Multimedia — E-Book Derivatives', 'category': 'Remix', 'right': 'Remix media that came with e-book you\'ve bought', 'description': 'Allow circumvention of access controls on lawfully made and acquired motion pictures used in connection with multimedia e-book authorship. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'source': 'https://www.eff.org/document/afb-acb-and-samuelson-glushko-clinic-ebooks-accessibility-exemption-request', 'index': '5', 'enabled': 0 },{'title': 'Multimedia — Filmmaking Derivatives', 'category': 'Remix', 'right': 'Remix your media to make videos', 'description': 'Allow circumvention of access controls on lawfully made and acquired motion pictures for filmmaking purposes. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'source': 'https://www.eff.org/document/public-knowledge-dvd-exemption-request', 'index': '6', 'enabled': 0 },{'title': 'Multimedia — Noncommercial Remixes', 'category': 'Remix', 'right': 'Remix your media for non-commercial purposes', 'description': 'Allow circumvention of access controls on lawfully made and acquired audiovisual works for the sole purpose of extracting clips for inclusion in noncommercial videos that do not infringe copyright. This exemption has been requested for audiovisual material made available on DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'source': 'https://www.eff.org/document/lca-movie-clips-exemption-request', 'index': '7', 'enabled': 0 },{'title': 'Multimedia — Space and Format Shifting', 'category': 'Remix', 'right': 'Convert or back up media you bought', 'description': 'Allow circumvention of access controls on lawfully made and acquired audiovisual works for the purpose of noncommercial space-shifting or format-shifting. This exemption has been requested for audiovisual material made available on DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'source': 'https://www.eff.org/document/peter-decherney-et-al-and-samuelson-glushko-clinic-audiovisual-works-exemption-request', 'index': '8', 'enabled': 0 },{'title': 'Literary works — Accessibility', 'category': 'Remix', 'right': 'Read e-books you bought in braille', 'description': 'Allow circumvention of access controls on lawfully made and acquired literary works distributed electronically for purposes of accessibility for persons who are print disabled. This exemption has been requested for literary works distributed electronically, including e-books, digital textbooks, and PDF articles.', 'source': 'https://www.eff.org/document/afb-acb-and-samuelson-glushko-clinic-ebooks-accessibility-exemption-request', 'index': '9', 'enabled': 0 },{'title': 'Literary works — Space and Format Shifting', 'category': 'Remix', 'right': 'Convert or back up books you bought', 'description': 'Allow circumvention of access controls on lawfully made and acquired literary works distributed electronically for the purpose of noncommercial space-shifting or format-shifting. This exemption has been requested for literary works distributed electronically in e-books.', 'source': 'https://www.eff.org/document/eff-remix-dvd-exemption-request', 'index': '10', 'enabled': 0 },]},
	},
{'exemption':
{'name': 'Unlock my devices', 'description': 'Use your device on the cellular carrier of your choice', 'list': [{'title': 'Unlocking — Cell Phones', 'category': 'Unlock', 'right': 'Use your phone on a different carrier', 'description': 'Allow the unlocking of wireless telephone handsets. “Wireless telephone handsets” includes all mobile telephones including feature phones, smart phones, and “phablets” that are used for two-way voice communications.', 'source': 'https://www.eff.org/document/cca-tablet-unlocking-exemption-request, https://www.eff.org/document/cca-wireless-handsets-unlocking-exemption-request', 'index': '11', 'enabled': 1 },{'title': 'Unlocking — Tablets', 'category': 'Unlock', 'right': 'Use your tablet on a different carrier', 'description': 'Allow the unlocking of all-purpose tablet computers. This class would encompass devices such as the Apple iPad, Microsoft Surface, Amazon Kindle Fire, and Samsung Galaxy Tab, but would exclude specialized devices such as dedicated e-book readers and dedicated handheld gaming devices.', 'source': 'https://www.eff.org/document/scrap-recycling-industries-and-juelsgaard-ip-and-innovation-clinic-tablet-unlocking', 'index': '12', 'enabled': 1 },{'title': 'Unlocking — Mobile Hotspots', 'category': 'Unlock', 'right': 'Use your WiFi hotspot with a different carrier', 'description': 'Allow the unlocking of mobile connectivity devices. “Mobile connectivity devices” are devices that allow users to connect to a mobile data network through either a direct connection or the creation of a local Wi-Fi network created by the device. The category includes mobile hotspots and removable wireless broadband modems.', 'source': 'https://www.eff.org/document/cca-mobile-hotspot-unlocking-exemption-request', 'index': '13', 'enabled': 1 },{'title': 'Unlocking — Wearables', 'category': 'Unlock', 'right': 'Use your smart watch on a different carrier', 'description': 'Allow the unlocking of wearable wireless devices. “Wearable wireless devices” include all wireless devices that are designed to be worn on the body, including smart watches, fitness devices, and health monitoring devices.', 'source': 'https://www.eff.org/document/consumers-union-mobile-device-unlocking-exemption-request', 'index': '14', 'enabled': 1 },{'title': 'Unlocking — Consumer Devices', 'category': 'Unlock', 'right': 'Unlock appliances and other consumer devices', 'description': 'Allow the unlocking of all wireless “consumer machines,” including smart meters, appliances, and precision-guided commercial equipment.', 'source': 'https://www.eff.org/document/cca-internet-things-unlocking-exemption-request', 'index': '15', 'enabled': 1 },]},
	},
{'exemption':
{'name': 'Jailbreak my hardware', 'description': 'Remove restrictions placed on your device by the manufacturer and install apps of your choice', 'list': [{'title': 'Jailbreaking — Cell Phones', 'category': 'Jailbreak', 'right': 'Jailbreak your phone', 'description': 'Permit the jailbreaking of wireless telephone handsets to allow the devices to run lawfully acquired software that is otherwise prevented from running, or to remove unwanted preinstalled software from the device.', 'source': 'https://www.eff.org/document/eff-jailbreaking-exemption-request', 'index': '16', 'enabled': 1 },{'title': 'Jailbreaking — Tablets & Mobile Devices', 'category': 'Jailbreak', 'right': 'Jailbreak your tablet', 'description': 'Permit the jailbreaking of all-purpose mobile computing devices to allow the devices to run lawfully acquired software that is otherwise prevented from running, or to remove unwanted preinstalled software from the device. The category “all-purpose mobile computing device” includes all-purpose non-phone devices (such as the Apple iPod touch) and all-purpose tablets (such as the Apple iPad or the Google Nexus). The category does not include specialized devices such as e-book readers or handheld gaming devices, or laptop or desktop computers.', 'source': 'https://www.eff.org/document/eff-jailbreaking-exemption-request', 'index': '17', 'enabled': 1 },{'title': 'Jailbreaking — E-Readers', 'category': 'Jailbreak', 'right': 'Jailbreak your e-reader', 'description': 'Permit the jailbreaking of dedicated e-book readers to allow those devices to run lawfully acquired software that is otherwise prevented from running.', 'source': 'https://www.eff.org/document/eff-jailbreaking-exemption-request', 'index': '18', 'enabled': 1 },{'title': 'Jailbreaking — Game Consoles', 'category': 'Jailbreak', 'right': 'Jailbreak your game console', 'description': 'Permit the jailbreaking of home video game consoles. Asserted noninfringing uses include installing alternative operating systems, running lawfully acquired applications, preventing the reporting of personal usage information to the manufacturer, and removing region locks. The requested exemption would apply both to older and currently marketed game consoles.', 'source': 'https://www.eff.org/document/eff-jailbreaking-exemption-request', 'index': '19', 'enabled': 1 },{'title': 'Jailbreaking — TVs', 'category': 'Jailbreak', 'right': 'Jailbreak your TV', 'description': 'Permit the jailbreaking of computer-embedded televisions (“smart TVs”). Asserted noninfringing uses include accessing lawfully acquired media on external devices, installing user-supplied licensed applications, enabling the operating system to interoperate with local networks and external peripherals, and enabling interoperability with external devices, and improving the TV’s accessibility features (e.g., for hearing-impaired viewers). The TPMs at issue include firmware encryption and administrative access controls that prevent access to the TV’s operating system.', 'source': 'https://www.eff.org/document/conservancy-smart-tv-exemption-request', 'index': '20', 'enabled': 1 },]},
	},
{'exemption':
{'name': 'Fix my Car or Tractor', 'description': 'Access computer diagnostics required to repair cars and agricultural equipment', 'list': [{'title': 'Vehicle & Farm Equipment Repair', 'category': 'Vehicle Repair', 'right': 'Repair your car or tractor', 'description': 'Allow circumvention of TPMs protecting computer programs that control the functioning of a motorized land vehicle, including personal automobiles, commercial motor vehicles, and agricultural machinery, for purposes of lawful diagnosis and repair, or aftermarket personalization, modification, or other improvement. Under the exemption as proposed, circumvention would be allowed when undertaken by or on behalf of the lawful owner of the vehicle.', 'source': 'https://www.eff.org/document/eff-autos-repair-and-modification-exemption-request', 'index': '21', 'enabled': 1 },]},
},
{'exemption':
{'name': 'Use legacy products', 'description': 'Use video games and music software that are no longer supported', 'list': [{'title': 'Abandoned Video Games', 'category': 'Legacy Products', 'right': 'Use old video games with your own server', 'description': 'Allow circumvention of TPMs on lawfully acquired video games consisting of communication with a developer-operated server for the purpose of either authentication or to enable multiplayer matchmaking, where developer support for those server communications has ended. This exception would not apply to video games whose audiovisual content is primarily stored on the developer’s server, such as massive multiplayer online role-playing games.', 'source': 'https://www.eff.org/document/eff-videogames-exemption-request', 'index': '23', 'enabled': 0 },{'title': 'Abandoned Music Recording Software', 'category': 'Legacy Products', 'right': 'Use music recording software that you own', 'description': 'Allow circumvention of access controls consisting of the PACE content protection system, which restricts access to the full functionality of lawfully acquired Ensoniq PARIS music recording software.', 'source': '', 'index': '24', 'enabled': 0 },]},
},
{'exemption':
{'name': 'Perform security research', 'description': 'Circumvent technological protection measures to verify the security of embedded electronics', 'list': [{'title': 'Security Research', 'category': 'Security Research', 'right': 'Research security vulnerabilities', 'description': 'Allow researchers to circumvent access controls in relation to computer programs, databases, and devices for purposes of good-faith testing, identifying, disclosing, and fixing of malfunctions, security flaws, or vulnerabilities.', 'source': 'https://www.eff.org/document/bellovin-blaze-felten-halderman-and-heninger-security-research-exemption-request, https://www.eff.org/document/matthew-green-and-samuelson-glushko-clinic-security-research-exemption-request', 'index': '25', 'enabled': 0 },{'title': 'Vehicle Security Research', 'category': 'Security Research', 'right': 'Research security vulnerabilities in cars', 'description': 'Allow circumvention of TPMs protecting computer programs that control the functioning of a motorized land vehicle for the purpose of researching the security or safety of such vehicles. Under the exemption as proposed, circumvention would be allowed when undertaken by or on behalf of the lawful owner of the vehicle.', 'source': 'https://www.eff.org/document/eff-autos-security-research-exemption-request', 'index': '22', 'enabled': 1 },]},
},
{'exemption':
{'name': 'Other circumventions', 'description': 'Use your own 3D printer feedstock and access the data in your medical devices', 'list': [{'title': '3D Printer Feedstock', 'category': 'Other', 'right': 'Use filament of your choice in your 3D printer', 'description': 'Allow circumvention of TPMs on firmware or software in 3D printers to allow use of non- manufacturer-approved feedstock in the printer.', 'source': 'https://www.eff.org/document/public-knowledge-3d-printing-exemption-request', 'index': '26', 'enabled': 1 },{'title': 'Medical Device Data', 'category': 'Other', 'right': 'Access data in your medical devices', 'description': 'Allow circumvention of TPMs protecting computer programs in medical devices designed for attachment to or implantation in patients and in their corresponding monitoring devices, as well as the outputs generated through those programs. As proposed, the exemption would be limited to cases where circumvention is at the direction of a patient seeking access to information generated by his or her own device, or at the direction of those conducting research into the safety, security, and effectiveness of such devices. The proposal would cover devices such as pacemakers, implantable cardioverter defibrillators, insulin pumps, and continuous glucose monitors.', 'source': 'https://www.eff.org/document/cyberlaw-clinic-medical-device-exemption-request', 'index': '27', 'enabled': 1 },]},
	}		       
];
	   },
	       });

   Template.exemptionsForm.events({
      'click .accordion-row': function(ev) {
         var target = $(ev.target);
         if (target.is('textarea')) {
            return;
         }

         var parent = target.parents('.accordion-row');
         var checkbox = parent.find('input[type="checkbox"]');
         var slide = parent.children('.accordion-slide');

         checkbox.prop('checked', !checkbox.is(':checked'));

         if (checkbox.is(':checked')) {
            slide.slideDown(400); 
         } else {
            slide.slideUp(400); 
         }
      }
   });

   UI.registerHelper("Collections", Collections);
}

if (Meteor.isServer) {
   Meteor.startup(function () {
      // code to run on server at startup
   });
}

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

// Source: https://docs.google.com/spreadsheets/d/1o7MpAeQvmzF-bhdSkSNeXUOWHWL_dK50gL7iYAZFgH8/edit#gid=0
var exemption_requests = 
[
 {'title': 'Multimedia — Universities', 'right': 'Remix your media while at universities', 'description': 'Allow college and university faculty and students to circumvent access controls on lawfully made and acquired motion pictures and other audiovisual works for purposes of criticism and comment. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by the Content Scramble System (“CSS”), Blu-ray discs protected by the Advanced Access Content System (“AACS”), and TPM-protected online distribution services.', 'index': '1', 'enabled': 0 },
 {'title': 'Multimedia — K12', 'right': 'Remix your media while in school', 'description': 'Allow kindergarten through twelfth-grade educators and students to circumvent access controls on lawfully made and acquired motion pictures and other audiovisual works for educational purposes. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'index': '2', 'enabled': 0 },
 {'title': 'Multimedia — Online', 'right': 'Remix media you own while enrolled in online courses', 'description': 'Allow students and faculty participating in Massive Open Online Courses (“MOOCs”) to circumvent access controls on lawfully made and acquired motion pictures and other audiovisual works for purposes of criticism and comment. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'index': '3', 'enabled': 0 },
 {'title': 'Multimedia — Libraries & Non-profits', 'right': 'Remix your media at libraries and non-profit organizations', 'description': 'Allow educators and learners in libraries, museums and nonprofit organizations to circumvent access controls on lawfully made and acquired motion pictures and other audiovisual works for educational purposes. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'index': '4', 'enabled': 0 },
 {'title': 'Multimedia — E-Book Derivatives', 'right': 'Remix media that came with e-book you\'ve bought', 'description': 'Allow circumvention of access controls on lawfully made and acquired motion pictures used in connection with multimedia e-book authorship. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'index': '5', 'enabled': 0 },
 {'title': 'Multimedia — Filmmaking Derivatives', 'right': 'Remix your media to make videos', 'description': 'Allow circumvention of access controls on lawfully made and acquired motion pictures for filmmaking purposes. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'index': '6', 'enabled': 0 },
 {'title': 'Multimedia — Noncommercial Remixes', 'right': 'Remix your media for non-commercial purposes', 'description': 'Allow circumvention of access controls on lawfully made and acquired audiovisual works for the sole purpose of extracting clips for inclusion in noncommercial videos that do not infringe copyright. This exemption has been requested for audiovisual material made available on DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'index': '7', 'enabled': 0 },
 {'title': 'Multimedia — Space and Format Shifting', 'right': 'Convert or back up media you bought', 'description': 'Allow circumvention of access controls on lawfully made and acquired audiovisual works for the purpose of noncommercial space-shifting or format-shifting. This exemption has been requested for audiovisual material made available on DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'index': '8', 'enabled': 0 },
 {'title': 'Literary works — Accessibility', 'right': 'Read e-books you bought in braille', 'description': 'Allow circumvention of access controls on lawfully made and acquired literary works distributed electronically for purposes of accessibility for persons who are print disabled. This exemption has been requested for literary works distributed electronically, including e-books, digital textbooks, and PDF articles.', 'index': '9', 'enabled': 0 },
 {'title': 'Literary works — Space and Format Shifting', 'right': 'Convert or back up books you bought', 'description': 'Allow circumvention of access controls on lawfully made and acquired literary works distributed electronically for the purpose of noncommercial space-shifting or format-shifting. This exemption has been requested for literary works distributed electronically in e-books.', 'index': '10', 'enabled': 0 },
 {'title': 'Unlocking — Cell Phones', 'right': 'Use your phone on a different carrier', 'description': 'Allow the unlocking of wireless telephone handsets. “Wireless telephone handsets” includes all mobile telephones including feature phones, smart phones, and “phablets” that are used for two-way voice communications.', 'index': '11', 'enabled': 1 },
 {'title': 'Unlocking — Tablets', 'right': 'Use your tablet on a different carrier', 'description': 'Allow the unlocking of all-purpose tablet computers. This class would encompass devices such as the Apple iPad, Microsoft Surface, Amazon Kindle Fire, and Samsung Galaxy Tab, but would exclude specialized devices such as dedicated e-book readers and dedicated handheld gaming devices.', 'index': '12', 'enabled': 1 },
 {'title': 'Unlocking — Mobile Hotspots', 'right': 'Use your WiFi hotspot with a different carrier', 'description': 'Allow the unlocking of mobile connectivity devices. “Mobile connectivity devices” are devices that allow users to connect to a mobile data network through either a direct connection or the creation of a local Wi-Fi network created by the device. The category includes mobile hotspots and removable wireless broadband modems.', 'index': '13', 'enabled': 1 },
 {'title': 'Unlocking — Wearables', 'right': 'Use your smart watch on a different carrier', 'description': 'Allow the unlocking of wearable wireless devices. “Wearable wireless devices” include all wireless devices that are designed to be worn on the body, including smart watches, fitness devices, and health monitoring devices.', 'index': '14', 'enabled': 1 },
 {'title': 'Unlocking — Consumer Devices', 'right': 'Unlock appliances and other consumer devices', 'description': 'Allow the unlocking of all wireless “consumer machines,” including smart meters, appliances, and precision-guided commercial equipment.', 'index': '15', 'enabled': 1 },
 {'title': 'Jailbreaking — Cell Phones', 'right': 'Jailbreak your phone', 'description': 'Permit the jailbreaking of wireless telephone handsets to allow the devices to run lawfully acquired software that is otherwise prevented from running, or to remove unwanted preinstalled software from the device.', 'index': '16', 'enabled': 1 },
 {'title': 'Jailbreaking — Tablets & Mobile Devices', 'right': 'Jailbreak your tablet', 'description': 'Permit the jailbreaking of all-purpose mobile computing devices to allow the devices to run lawfully acquired software that is otherwise prevented from running, or to remove unwanted preinstalled software from the device. The category “all-purpose mobile computing device” includes all-purpose non-phone devices (such as the Apple iPod touch) and all-purpose tablets (such as the Apple iPad or the Google Nexus). The category does not include specialized devices such as e-book readers or handheld gaming devices, or laptop or desktop computers.', 'index': '17', 'enabled': 1 },
 {'title': 'Jailbreaking — E-Readers', 'right': 'Jailbreak your e-reader', 'description': 'Permit the jailbreaking of dedicated e-book readers to allow those devices to run lawfully acquired software that is otherwise prevented from running.', 'index': '18', 'enabled': 1 },
 {'title': 'Jailbreaking — Game Consoles', 'right': 'Jailbreak your game console', 'description': 'Permit the jailbreaking of home video game consoles. Asserted noninfringing uses include installing alternative operating systems, running lawfully acquired applications, preventing the reporting of personal usage information to the manufacturer, and removing region locks. The requested exemption would apply both to older and currently marketed game consoles.', 'index': '19', 'enabled': 1 },
 {'title': 'Jailbreaking — TVs', 'right': 'Jailbreak your TV', 'description': 'Permit the jailbreaking of computer-embedded televisions (“smart TVs”). Asserted noninfringing uses include accessing lawfully acquired media on external devices, installing user-supplied licensed applications, enabling the operating system to interoperate with local networks and external peripherals, and enabling interoperability with external devices, and improving the TV’s accessibility features (e.g., for hearing-impaired viewers). The TPMs at issue include firmware encryption and administrative access controls that prevent access to the TV’s operating system.', 'index': '20', 'enabled': 1 },
 {'title': 'Vehicle & Farm Equipment Repair', 'right': 'Repair your car or tractor', 'description': 'Allow circumvention of TPMs protecting computer programs that control the functioning of a motorized land vehicle, including personal automobiles, commercial motor vehicles, and agricultural machinery, for purposes of lawful diagnosis and repair, or aftermarket personalization, modification, or other improvement. Under the exemption as proposed, circumvention would be allowed when undertaken by or on behalf of the lawful owner of the vehicle.', 'index': '21', 'enabled': 1 },
 {'title': 'Vehicle Security Research', 'right': 'Research security vulnerabilities in cars', 'description': 'Allow circumvention of TPMs protecting computer programs that control the functioning of a motorized land vehicle for the purpose of researching the security or safety of such vehicles. Under the exemption as proposed, circumvention would be allowed when undertaken by or on behalf of the lawful owner of the vehicle.', 'index': '22', 'enabled': 1 },
 {'title': 'Abandoned Video Games', 'right': 'Use old video games with your own server', 'description': 'Allow circumvention of TPMs on lawfully acquired video games consisting of communication with a developer-operated server for the purpose of either authentication or to enable multiplayer matchmaking, where developer support for those server communications has ended. This exception would not apply to video games whose audiovisual content is primarily stored on the developer’s server, such as massive multiplayer online role-playing games.', 'index': '23', 'enabled': 0 },
 {'title': 'Abandoned Music Recording Software', 'right': 'Use music recording software that you own', 'description': 'Allow circumvention of access controls consisting of the PACE content protection system, which restricts access to the full functionality of lawfully acquired Ensoniq PARIS music recording software.', 'index': '24', 'enabled': 0 },
 {'title': 'Security Research', 'right': 'Research security vulnerabilities', 'description': 'Allow researchers to circumvent access controls in relation to computer programs, databases, and devices for purposes of good-faith testing, identifying, disclosing, and fixing of malfunctions, security flaws, or vulnerabilities.', 'index': '25', 'enabled': 0 },
 {'title': '3D Printer Feedstock', 'right': 'Use filament of your choice in your 3D printer', 'description': 'Allow circumvention of TPMs on firmware or software in 3D printers to allow use of non- manufacturer-approved feedstock in the printer.', 'index': '26', 'enabled': 1 },
 {'title': 'Medical Device Data', 'right': 'Access data in your medical devices', 'description': 'Allow circumvention of TPMs protecting computer programs in medical devices designed for attachment to or implantation in patients and in their corresponding monitoring devices, as well as the outputs generated through those programs. As proposed, the exemption would be limited to cases where circumvention is at the direction of a patient seeking access to information generated by his or her own device, or at the direction of those conducting research into the safety, security, and effectiveness of such devices. The proposal would cover devices such as pacemakers, implantable cardioverter defibrillators, insulin pumps, and continuous glucose monitors.', 'index': '27', 'enabled': 1 }
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
   },
   message: {
      type: String,
      label: 'Message',
      max: 2500,
      autoform: {
         rows: 10
      }
   }
});

Collections.Exemptions = new Mongo.Collection("exemptions");
Collections.Exemptions.attachSchema(Schemas.Contact);

if (Meteor.isClient) {
   Template.exemptionsForm.helpers({
      checked: function(checked) {
         return checked ? "checked" : "";
    },

    exemption_requests: function() {
         var len = exemption_requests.length;
         return [
            {'exemption' : exemption_requests.slice(0, len / 3)},
            {'exemption' : exemption_requests.slice(len / 3, len / 3 * 2)},
            {'exemption' : exemption_requests.slice(len / 3 * 2, len)}
        ];
      }
   });

   Template.exemptionsForm.events({
      'click .checkbox': function(ev) {
	  ev.preventDefault();
	  $(ev.target).find('.description').toggle();
	  $(ev.target).find('input').checked;
       }
   });

   UI.registerHelper("Collections", Collections);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

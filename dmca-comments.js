var Exemptions = new Mongo.Collection("exemptions");

var us_states = [
   {"state": 'Alabama', "value" : 'AL' },
   {"state": 'Alaska', "value"                : 'AK'},
   {"state": 'American Samoa', "value"        : 'AS'},
   {"state": 'Arizona', "value"               : 'AZ'},
   {"state": 'Arkansas', "value"              : 'AR'},
   {"state": 'Armed Forces Europe', "value"   : 'AE'},
   {"state": 'Armed Forces Americas', "value" : 'AA'},
   {"state": 'Armed Forces Pacific', "value"  : 'AP'},
   {"state": 'California', "value"            : 'CA'},
   {"state": 'Colorado', "value"              : 'CO'},
   {"state": 'Connecticut', "value"           : 'CT'},
   {"state": 'District Of Columbia', "value" : 'DC'},
   {"state": 'Delaware', "value"     : 'DE'},
   {"state": 'Florida', "value"      : 'FL'},
   {"state": 'Georgia', "value"      : 'GA'},
   {"state": 'Guam', "value"         : 'GU'},
   {"state": 'Hawaii', "value"    : 'HI'},
   {"state": 'Idaho', "value"        : 'ID'},
   {"state": 'Illinois', "value"     : 'IL'},
   {"state": 'Indiana', "value"      : 'IN'},
   {"state": 'Iowa', "value"         : 'IA'},
   {"state": 'Kansas', "value"    : 'KS'},
   {"state": 'Kentucky', "value"     : 'KY'},
   {"state": 'Louisiana', "value"    : 'LA'},
   {"state": 'Maine', "value"        : 'ME'},
   {"state": 'Marshall Islands', "value": 'MH'},
   {"state": 'Maryland', "value"     : 'MD'},
   {"state": 'Massachusetts', "value"   : 'MA'},
   {"state": 'Michigan', "value"     : 'MI'},
   {"state": 'Micronesia', "value"   : 'FM'},
   {"state": 'Minnesota', "value"    : 'MN'},
   {"state": 'Mississippi', "value"  : 'MS'},
   {"state": 'Missouri', "value"     : 'MO'},
   {"state": 'Montana', "value"      : 'MT'},
   {"state": 'Nebraska', "value"     : 'NE'},
   {"state": 'Nevada', "value"    : 'NV'},
   {"state": 'New Hampshire', "value"   : 'NH'},
   {"state": 'New Jersey', "value"   : 'NJ'},
   {"state": 'New Mexico', "value"   : 'NM'},
   {"state": 'New York', "value"     : 'NY'},
   {"state": 'North Carolina', "value": 'NC'},
   {"state": 'North Dakota', "value" : 'ND'},
   {"state": 'Northern Mariana Islands', "value": 'MP'},
   {"state": 'Ohio', "value"         : 'OH'},
   {"state": 'Oklahoma', "value"     : 'OK'},
   {"state": 'Oregon', "value"    : 'OR'},
   {"state": 'Palau', "value"        : 'PW'},
   {"state": 'Pennsylvania', "value" : 'PA'},
   {"state": 'Puerto Rico', "value"  : 'PR'},
   {"state": 'Rhode Island', "value" : 'RI'},
   {"state": 'South Carolina', "value": 'SC'},
   {"state": 'South Dakota', "value" : 'SD'},
   {"state": 'Tennessee', "value"    : 'TN'},
   {"state": 'Texas', "value"        : 'TX'},
   {"state": 'Utah', "value"         : 'UT'},
   {"state": 'Vermont', "value"      : 'VT'},
   {"state": 'Virginia', "value"     : 'VA'},
   {"state": 'Virgin Islands', "value": 'VI'},
   {"state": 'Washington', "value"   : 'WA'},
   {"state": 'West Virginia', "value"   : 'WV'},
   {"state": 'Wisconsin', "value"    : 'WI'},
   {"state": 'Wyoming', "value"      : 'WY'}
];

// Source: https://docs.google.com/spreadsheets/d/1o7MpAeQvmzF-bhdSkSNeXUOWHWL_dK50gL7iYAZFgH8/edit#gid=0
var exemption_requests = 
[
 {'title': 'Multimedia — Universities', 'description': 'Allow college and university faculty and students to circumvent access controls on lawfully made and acquired motion pictures and other audiovisual works for purposes of criticism and comment. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by the Content Scramble System (“CSS”), Blu-ray discs protected by the Advanced Access Content System (“AACS”), and TPM-protected online distribution services.', 'index': '1', 'enabled': 0 },
 {'title': 'Multimedia — K12', 'description': 'Allow kindergarten through twelfth-grade educators and students to circumvent access controls on lawfully made and acquired motion pictures and other audiovisual works for educational purposes. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'index': '2', 'enabled': 0 },
 {'title': 'Multimedia — Online', 'description': 'Allow students and faculty participating in Massive Open Online Courses (“MOOCs”) to circumvent access controls on lawfully made and acquired motion pictures and other audiovisual works for purposes of criticism and comment. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'index': '3', 'enabled': 0 },
 {'title': 'Multimedia — Libraries & Non-profits', 'description': 'Allow educators and learners in libraries, museums and nonprofit organizations to circumvent access controls on lawfully made and acquired motion pictures and other audiovisual works for educational purposes. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'index': '4', 'enabled': 0 },
 {'title': 'Multimedia — E-Book Derivatives', 'description': 'Allow circumvention of access controls on lawfully made and acquired motion pictures used in connection with multimedia e-book authorship. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'index': '5', 'enabled': 0 },
 {'title': 'Multimedia — Filmmaking Derivatives', 'description': 'Allow circumvention of access controls on lawfully made and acquired motion pictures for filmmaking purposes. This exemption has been requested for audiovisual material made available in all formats, including DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'index': '6', 'enabled': 0 },
 {'title': 'Multimedia — Noncommercial Remixes', 'description': 'Allow circumvention of access controls on lawfully made and acquired audiovisual works for the sole purpose of extracting clips for inclusion in noncommercial videos that do not infringe copyright. This exemption has been requested for audiovisual material made available on DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'index': '7', 'enabled': 0 },
 {'title': 'Multimedia — Space and Format Shifting', 'description': 'Allow circumvention of access controls on lawfully made and acquired audiovisual works for the purpose of noncommercial space-shifting or format-shifting. This exemption has been requested for audiovisual material made available on DVDs protected by CSS, Blu-ray discs protected by AACS, and TPM-protected online distribution services.', 'index': '8', 'enabled': 0 },
 {'title': 'Literary works — Accessibility', 'description': 'Allow circumvention of access controls on lawfully made and acquired literary works distributed electronically for purposes of accessibility for persons who are print disabled. This exemption has been requested for literary works distributed electronically, including e-books, digital textbooks, and PDF articles.', 'index': '9', 'enabled': 0 },
 {'title': 'Literary works — Space and Format Shifting', 'description': 'Allow circumvention of access controls on lawfully made and acquired literary works distributed electronically for the purpose of noncommercial space-shifting or format-shifting. This exemption has been requested for literary works distributed electronically in e-books.', 'index': '10', 'enabled': 0 },
 {'title': 'Unlocking — Cell Phones', 'description': 'Allow the unlocking of wireless telephone handsets. “Wireless telephone handsets” includes all mobile telephones including feature phones, smart phones, and “phablets” that are used for two-way voice communications.', 'index': '11', 'enabled': 1 },
 {'title': 'Unlocking — Tablets', 'description': 'Allow the unlocking of all-purpose tablet computers. This class would encompass devices such as the Apple iPad, Microsoft Surface, Af a patient seeking access to information generated by his or her own device, or at the direction of those conducting research into the safety, security, and effectiveness of such devices. The proposal would cover devices such as pacemakers, implantable cardioverter defibrillators, insulin pumps, and continuous glucose monitors.', 'index': '27', 'enabled': 1 },
 {'title': 'Unlocking — Mobile Hotspots', 'description': 'Allow the unlocking of mobile connectivity devices. “Mobile connectivity devices” are devices that allow users to connect to a mobile data network through either a direct connection or the creation of a local Wi-Fi network created by the device. The category includes mobile hotspots and removable wireless broadband modems.', 'index': '13', 'enabled': 1 },
 {'title': 'Unlocking — Wearables', 'description': 'Allow the unlocking of wearable wireless devices. “Wearable wireless devices” include all wireless devices that are designed to be worn on the body, including smart watches, fitness devices, and health monitoring devices.', 'index': '14', 'enabled': 1 },
 {'title': 'Unlocking — Consumer Devices', 'description': 'Allow the unlocking of all wireless “consumer machines,” including smart meters, appliances, and precision-guided commercial equipment.', 'index': '15', 'enabled': 1 },
 {'title': 'Jailbreaking — Cell Phones', 'description': 'Permit the jailbreaking of wireless telephone handsets to allow the devices to run lawfully acquired software that is otherwise prevented from running, or to remove unwanted preinstalled software from the device.', 'index': '16', 'enabled': 1 },
 {'title': 'Jailbreaking — Tablets & Mobile Devices', 'description': 'Permit the jailbreaking of all-purpose mobile computing devices to allow the devices to run lawfully acquired software that is otherwise prevented from running, or to remove unwanted preinstalled software from the device. The category “all-purpose mobile computing device” includes all-purpose non-phone devices (such as the Apple iPod touch) and all-purpose tablets (such as the Apple iPad or the Google Nexus). The category does not include specialized devices such as e-book readers or handheld gaming devices, or laptop or desktop computers.', 'index': '17', 'enabled': 1 },
 {'title': 'Jailbreaking — E-Readers', 'description': 'Permit the jailbreaking of dedicated e-book readers to allow those devices to run lawfully acquired software that is otherwise prevented from running.', 'index': '18', 'enabled': 1 },
 {'title': 'Jailbreaking — Game Consoles', 'description': 'Permit the jailbreaking of home video game consoles. Asserted noninfringing uses include installing alternative operating systems, running lawfully acquired applications, preventing the reporting of personal usage information to the manufacturer, and removing region locks. The requested exemption would apply both to older and currently marketed game consoles.', 'index': '19', 'enabled': 1 },
 {'title': 'Jailbreaking — TVs', 'description': 'Permit the jailbreaking of computer-embedded televisions (“smart TVs”). Asserted noninfringing uses include accessing lawfully acquired media on external devices, installing user-supplied licensed applications, enabling the operating system to interoperate with local networks and external peripherals, and enabling interoperability with external devices, and improving the TV’s accessibility features (e.g., for hearing-impaired viewers). The TPMs at issue include firmware encryption and administrative access controls that prevent access to the TV’s operating system.', 'index': '20', 'enabled': 1 },
 {'title': 'Vehicle & Farm Equipment Repair', 'description': 'Allow circumvention of TPMs protecting computer programs that control the functioning of a motorized land vehicle, including personal automobiles, commercial motor vehicles, and agricultural machinery, for purposes of lawful diagnosis and repair, or aftermarket personalization, modification, or other improvement. Under the exemption as proposed, circumvention would be allowed when undertaken by or on behalf of the lawful owner of the vehicle.', 'index': '21', 'enabled': 1 },
 {'title': 'Vehicle Security Research', 'description': 'Allow circumvention of TPMs protecting computer programs that control the functioning of a motorized land vehicle for the purpose of researching the security or safety of such vehicles. Under the exemption as proposed, circumvention would be allowed when undertaken by or on behalf of the lawful owner of the vehicle.', 'index': '22', 'enabled': 1 },
 {'title': 'Abandoned Video Games', 'description': 'Allow circumvention of TPMs on lawfully acquired video games consisting of communication with a developer-operated server for the purpose of either authentication or to enable multiplayer matchmaking, where developer support for those server communications has ended. This exception would not apply to video games whose audiovisual content is primarily stored on the developer’s server, such as massive multiplayer online role-playing games.', 'index': '23', 'enabled': 0 },
 {'title': 'Abandoned Music Recording Software', 'description': 'Allow circumvention of access controls consisting of the PACE content protection system, which restricts access to the full functionality of lawfully acquired Ensoniq PARIS music recording software.', 'index': '24', 'enabled': 0 },
 {'title': 'Security Research', 'description': 'Allow researchers to circumvent access controls in relation to computer programs, databases, and devices for purposes of good-faith testing, identifying, disclosing, and fixing of malfunctions, security flaws, or vulnerabilities.', 'index': '25', 'enabled': 0 },
 {'title': '3D Printer Feedstock', 'description': 'Allow circumvention of TPMs on firmware or software in 3D printers to allow use of non- manufacturer-approved feedstock in the printer.', 'index': '26', 'enabled': 1 },
 {'title': 'Medical Device Data', 'description': 'Allow circumvention of TPMs protecting computer programs in medical devices designed for attachment to or implantation in patients and in their corresponding monitoring devices, as well as the outputs generated through those programs. As proposed, the exemption would be limited to cases where circumvention is at the direction of a patient seeking access to information generated by his or her own device, or at the direction of those conducting research into the safety, security, and effectiveness of such devices. The proposal would cover devices such as pacemakers, implantable cardioverter defibrillators, insulin pumps, and continuous glucose monitors.', 'index': '27', 'enabled': 1 }
 ];

if (Meteor.isClient) {
   Template.exemptionsForm.helpers({
      exemption_requests: function() {
         return exemption_requests;
      }   
   });

   Template.contactForm.helpers({
      states: function() {
         return us_states;
      }
   });

   Template.contactForm.events({
      'submit .exemptions-form': function(ev) {
         ev.preventDefault();
      }
   });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

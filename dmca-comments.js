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
 {'title': 'Unlocking — Tablets', 'description': 'Allow the unlocking of all-purpose tablet computers. This class would encompass devices such as the Apple iPad, Microsoft Surface, Af a patient seeking access to information generated by his or her own device, or at the direction of those conducting research into the safety, security, and effectiveness of such devices. The proposal would cover devices such as pacemakers, implantable cardioverter defibrillators, insulin pumps, and continuous glucose monitors.', 'index': '27', 'enabled': 1 }
 ];

if (Meteor.isClient) {
   Template.contactForm.helpers({
      states: function() {
         return us_states;
      },
      exemption_requests: function() {
         return exemption_requests;
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

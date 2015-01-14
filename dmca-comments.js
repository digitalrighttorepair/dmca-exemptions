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


if (Meteor.isClient) {
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

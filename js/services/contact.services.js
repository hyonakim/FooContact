let ContactService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/info';

  this.getAllContacts = getAllContacts;
  this.addPerson = addPerson;

  function ContactInfo (data) {
    this.fullName = data.fullName;
    this.email = data.email;
    this.website = data.website;
    this.msg = data.msg;
  }

  function addPerson (data) {
    let newPerson = new ContactInfo(data);
    return $http.post(url, newPerson, PARSE.CONFIG);
  }

  function getAllContacts () {
    return $http.get(url, PARSE.CONFIG);
  }

};

ContactService.$inject = ['$http', 'PARSE'];

export default ContactService;
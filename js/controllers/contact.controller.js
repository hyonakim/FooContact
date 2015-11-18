let ContactController = function(ContactService, $scope) {
  
  let vm = this;

  vm.addPerson = addPerson;

  function addPerson (personObj) {
    ContactService.addPerson (personObj).then ( (res) => {
      console.log(res);
    });
  }


  /// Validating the Name
  let validateName = (fullName) => {
    if(fullName.length <= 1) {
      vm.NameerrMsg = 'Need First and Last Name';
    } else {
      vm.NameerrMsg = '';
    }
  };

  $scope.$watch('personObj.fullName', function (newVal, prevVal) {
    if(!newVal) return;
    validateName(newVal);
  });


  /// Validating the Email
  let validateEmail = (email) => {

    let at = email.includes('@');

    if(at !== true) {
      vm.EmailerrMsg = 'Email must contain @';
    } else {
      vm.EmailerrMsg = '';
    }
  };

  $scope.$watch('personObj.email', function (newVal, prevVal) {
    if(!newVal) return;
    validateEmail(newVal);
  });


  /// Validating the Website Address
  let validateWebsite = (website) => {

    let http = website.includes('http://');
    let https = website.includes('https://');

    if (website.indexOf('http://') < 0 && website.indexOf('https://') < 0) {
      vm.SiteerrMsg = 'Website must start with http:// or https://';
    } else {
      vm.SiteerrMsg = '';
    }
  };

  $scope.$watch('personObj.website', function (newVal, prevVal) {
    if(!newVal) return;
    validateWebsite(newVal);
  });
  

  /// Validating Message Area
  let validateMsg = (msg) => {

    if(msg.length <= 1) {
      vm.MsgerrMsg = 'Must be longer';
    } else {
      vm.MsgerrMsg = '';
    }
  };

  $scope.$watch('personObj.msg', function (newVal, prevVal) {
    if(!newVal) return;
    validateMsg(newVal);
  });

};

ContactController.$inject = ['ContactService', '$scope'];

export default ContactController;
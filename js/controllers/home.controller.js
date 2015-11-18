let HomeController = function($scope, ContactService) {
  
  let vm = this;

  vm.title = 'Contact List';
  vm.getAll = getAll();

  function getAll () {
    ContactService.getAllContacts().then( (res) => {
      vm.allContacts = res.data.results;
      console.log(vm.allContacts);
    });
  }  

};

HomeController.$inject = ['$scope', 'ContactService'];

export default HomeController;
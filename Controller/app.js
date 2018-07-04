var app = angular.module("myApp",[]);
app.controller("myappcontroller",function($scope){
    var vm = this ;
    var etudiantIndex;
    vm.xlt = "Hihi richard fopa code";
    vm.add = add ;


    $scope.hello = " Bonjour le monde ";
    vm.etudiant = {}
    vm.etudiants = [];

    function add () {
        vm.etudiants.push(vm.etudiant);
        vm.etudiant = {};
    }
    vm.deleted = deleted ;
    function deleted (index) {
        vm.etudiants.splice(index,1);
    }
    vm.updated = updated ;
    function updated (index) {
        vm.etudiant.nom = vm.etudiants[index].nom;
        vm.etudiant.prenom = vm.etudiants[index].prenom;
        vm.etudiant.telephone = vm.etudiants[index].telephone;
        vm.etudiant.aniv = vm.etudiants[index].aniv;
        vm.etudiant.emai = vm.etudiants[index].emai;
        etudiantIndex = index;
    }
    vm.modifier = modifier ;
    function modifier() {
        vm.etudiants[userIndex].nom = vm.etudiant.nom;
        vm.etudiants[userIndex].prenom = vm.etudiant.prenom;
        vm.etudiants[userIndex].telephone = vm.etudiant.telephone;
        vm.etudiants[userIndex].aniv = vm.etudiant.aniv;
        vm.etudiants[userIndex].emai = vm.etudiant.emai;
        vm.etudiant = {};
    }
    vm.addCour = addCour ;
    vm.cour = {}
    vm.cours = [];
    function addCour () {
        vm.cours.push(vm.cour);
        vm.cour = {};
    }
});
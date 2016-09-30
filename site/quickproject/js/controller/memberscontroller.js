app.controller('MembersController', function($scope, $routeParams) {
  $scope.name = 'MembersController';
  $scope.params = $routeParams;
  $scope.editmember = function(member){
    var id = "#/members/"+member.$index;
    window.document.location = id;
  }
  $scope.members = [
    {
      name: "John",
      games: 24,
      joindate: "01/11/2010"
    },
    {
      name: "Alex",
      games: 27,
      joindate: "02/09/2009"
    },
    {
      name: "Tony",
      games: 19,
      joindate: "04/05/2010"
    }
  ]
})

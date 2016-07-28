gentooApp.service('Friend', ['$http', '$location', function($location, $http) {
  var storage = localStorage;

    return {
        rememberFriend: function(clickedperson){
          console.log(clickedperson + " is here now!");
          storage.setItem("friendtovisit", clickedperson);
        },

        getFriend:   function() { return storage.getItem("friendtovisit"); },
        isLoggedIn: function() { storage.getItem("friendtovisit") ? true : false; },



        }


    }])

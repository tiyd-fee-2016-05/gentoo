gentooApp.service('Friend', ['$http', '$location', function($location, $http) {
  var storage = localStorage;

    return {
        rememberFriend: function(clickedperson){
          console.log(clickedperson + " is here now!");
          storage.setItem("friendtovisit", clickedperson);
        },

        rememberNonFriend: function(clickedperson){
          console.log(clickedperson + " is not your friend but have a visit!");
          storage.setItem("nonfriendtovisit", clickedperson);
        },

        checkFriend: function(clickedperson){
          console.log(clickedperson + " is being checked!");


          // storage.setItem("friendtovisit", clickedperson);
        },

        getFriend:   function() { return storage.getItem("friendtovisit"); },
        getNonFriend:   function() { return storage.getItem("nonfriendtovisit"); },
        isLoggedIn: function() { storage.getItem("friendtovisit") ? true : false; },



        }


    }])

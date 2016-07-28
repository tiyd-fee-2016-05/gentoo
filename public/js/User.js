gentooApp.service('User', ['$location', function($location) {
    var storage = localStorage;

    return {
        getToken:   function() { return storage.getItem("user-token"); },
        isLoggedIn: function() { storage.getItem("user-token") ? true : false; },

        logIn: function(t) {
            storage.setItem("user-token", t);
            $location.path("/");
        },

        logOut: function() {
            storage.removeItem("user-token");
            $location.path("/login");
        },

    }
}])

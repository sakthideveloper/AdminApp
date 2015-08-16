'use strict';

/**
 * @ngdoc function
 * @name wedlockAdminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wedlockAdminApp
 */
angular.module('wedlockAdminApp')

.service('UserService', function(store) {
    var service = this,
        currentUser = null;

    service.setCurrentUser = function(user) {
        currentUser = user;
        store.set('user', user);
        return currentUser;
    };

    service.getCurrentUser = function() {
        if (!currentUser) {
            currentUser = store.get('user');
        }
        return currentUser;
    };
})
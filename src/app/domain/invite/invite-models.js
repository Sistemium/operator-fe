(function () {
  "use strict";

  angular.module('frontend.domain')
  .factory('InviteModel', [
    '$rootScope',
    'DataModel',
    function ($rootScope, DataModel) {
      var model = new DataModel('invite');

      model.handlerCreated = function (invite) {
        $rootScope.broadcast('invite:save', invite.data);
        //this.objects.push(invite.data);
      };

      model.handlerUpdated = function (invite) {
        $rootScope.broadcast('invite:save', invite.data);
      };

      return model;
    }
  ])
}());

(function () {
  "use strict";

  angular.module('frontend.domain')
  .factory('AgentModel', [
    'DataModel',
    function(DataModel) {
      var model = new DataModel('agent');

      console.log(model);
      return model;
    }
  ])
}());

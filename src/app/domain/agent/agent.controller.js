'use strict';

(function () {
  angular.module('frontend.domain')
    .controller('AgentCtrl', [
        '$scope', '$state',
        'MessageService',
        'ListConfig', 'AgentModel',
        '_items',
        function ($scope, $state, MessageService, ListConfig, AgentModel, _items) {
          var me = this;

          // Set current scope reference to model
          AgentModel.setScope($scope, false, 'items', 'itemCount');

          // Add default list configuration variable to current scope
          angular.extend($scope, angular.copy(ListConfig.getConfig()));

          // Set initial data
          me.items = _items;

          angular.extend(me, {
            save: function (form) {
              if (me.name) {
                AgentModel
                  .create({
                    name: me.name
                  })
                  .then(function () {
                    MessageService.success('New agent added successfully');
                    me.name = '';
                    form.$setPristine();
                  });
              }
            },

            cancel: function (form) {
              me.name = '';
              form.$setPristine();
            },

            goToAccounts: function (id) {
              $state.go('domain.account', {agent: id});
            },

            goToInvites: function (id) {
              $state.go('domain.invite', {agent: id});
            },

            goToOperations: function (id) {
              $state.go('domain.operation', {agent: id});
            }
          });
        }
      ]
    );
})();

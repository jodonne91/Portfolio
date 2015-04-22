'use strict';

describe('Controller: TiyCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var TiyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TiyCtrl = $controller('TiyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

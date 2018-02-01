: Unit Testing a Directive::
URL : https://coderwall.com/p/rvjqmg/unit-testing-a-custom-angularjs-directive

Problem
You need to write a (Jasmine) unit test spec to test a custom AngularJS directive.
Write a fixture comprising the directive tag, inject the custom directive logic, and then test it.

// Simple AngularJS directive
var directives = angular.module('myNameSpace.directives', []);

directives.directive('directive', function() {
  var directive = {};

  directive.restrict = 'E'; // Indicates an element directive.
  directive.template = 'Hello World';

  return directive;
});


// Test
describe('myNameSpace.directives', function() {
  var element, scope;

  beforeEach(module('myNameSpace.directives'));

  beforeEach(inject(function($rootScope, $compile) {
    element = angular.element(
      '<directive>Old text</directive>'
    );

    scope = $rootScope.$new();
    $compile(element)(scope);
    scope.$digest();
  }));

  it('should display the text properly', function() {
    expect(element.html()).toBe('Hello World');
  });
});



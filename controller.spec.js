:: Unit Testing a controller :

1. Define angular module of name appmodule.
2. Define angular controller of name mycontroller with scope employee object.
3. The EmpName of Employee object is initialized.
4. The scope() function is used to convert the EmpName on lowercase.

Testing the AngularJS Controller
Step 3: In this project we will add the Jasmine NuGet package. Follow same instructions as of Step 1 for AngularJS package.

jasmine-test-package

This step will add the following contents in the project:

Jasmine sub-folder in the Content folder with jasmine stylesheets in it.
Controllers folder with JasmineController.cs class in it.
Jasmine sub-folder in the Scripts folder with Jasmine Framework Scripts.
Jasmine-samples sub-folder in the Scripts folder providing some sample test scripts.
Views folder with Jasmine sub-folder in it. This contains the SpecRunner.cshtml in it which is a View file containing sample scripts references. We will change this file shortly.
Step 4: In the project add a new folder of name Test. In this folder add SpecRunner.cshtml by renaming it to SpecRunner.html and a JavaScript file of name controllertest.js

Step 5: In controllertest.js, add the following code

//1.
describe('mycontroller', function () {
    //2.
    beforeEach(module('appmodule'));
    //3.
    it('scopeTestSpec',
        //4.
        inject(function ($controller, $rootScope) {
            var $scope = $rootScope.$new();
            $controller('mycontroller', {
                $scope: $scope
            });
            //5.
            expect($scope.Employee.EmpName).toEqual('MS');
            
        }));
            //6.
it('scopeTestSpecFunction',
        inject(function ($controller, $rootScope) {
            var $scope = $rootScope.$new();
            $controller('mycontroller', {
                $scope: $scope
            });
            expect($scope.lower('MAHESH')).toEqual('mahesh');
        }));
});
The above script code has the following specifications. (Note: Following line numbers matches with comments applied in above JavaScript code.)

1. ‘describe’ defines what is it testing. In our case, it is a controller name passed to it.
2. ‘beforeEach’ allows to execute some code before each test spec. In our case, it is executing the angular module.
3. The spec is defined by calling the function ‘it’. The first parameter for this function is string which is title of spec. The second parameter is the spec itself.
4. The second parameter of ‘it’ contains one or more expectations for our test. In our case, it injects controller and scope and receives an instance of scope using $new for the controller $controller.
5. The ‘expect’ in scopeTestSpec defines the test for EmpName.
6. The ‘expect’ in scopeTestSpecFunction defines the test for lower() function.
-----------
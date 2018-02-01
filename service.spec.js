-------------------------------------

:: Unit Testing a service ::

URL : https://nathanleclaire.com/blog/2014/04/12/unit-testing-services-in-angularjs-for-fun-and-for-profit/

"use strict";

describe("reddit api service", function () {
  var userService, httpBackend;

  beforeEach(module("reddit"));

  beforeEach(inject(function (_userService_, $httpBackend) {
    userService = _userService_;
    httpBackend = $httpBackend;
  }));

  it("should do something", function () {
    httpBackend.whenGET("http://api.reddit.com/user/yoitsnate/submitted.json").respond({
        data: {
          children: [
            {
              data: {
                subreddit: "golang"
              }
            },
            {
              data: {
                subreddit: "javascript"
              }
            },
            {
              data: {
                subreddit: "golang"
              }
            },
            {
              data: {
                subreddit: "javascript"
              }
            }
          ]
        }
    });
    userService.getSubredditsSubmittedToBy("yoitsnate").then(function(subreddits) {
      expect(subreddits).toEqual(["golang", "javascript"]);
    });
    httpBackend.flush();
  });

});

********************-------------------------********************************

Or just use $q / manually manage promises
I found myself in kind of a funny situation at work recently. We use Angular for structure but the codebase we are working on has a lot of pre-existing bits/modules that were not really moved over to Angular fully due to intense deadline pressure. So, we find ourselves making XMLHttpRequests outside of $http land, but the original programmers still return promises from their outside world modules for us to use (it’s kind of an odd setup that we don’t really have time to refactor). So, I just caused the functions that take care of those API calls return promises that I control using $q.

var mockDeferred;
mockDeferred = $q.defer();
someSpyObj.methodThatReturnsAPromise.andCallFake(function () {
  return mockDeferred.promise;
});
mockDeferred.resolve({
  things: "foo",
  otherThings: "bar"
});

-----------------------------------------------------------


(function(module) {
  var repos = {};

  repos.requestRepos = function (callback) {
    $.when(
      $.get('/github/users/noahgribbin/repos', function(data){
        repos.allRepos = data;
        console.log(data);
      }),
      $.get('/github/users/noahgribbin/followers', function(data){
        repos.followers = data;
        console.log(data);
      })
    ).done(callback);
  };

  repos.withTheAttribute = function(myAttr) {
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.repos = repos;
})(window);

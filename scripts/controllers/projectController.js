(function(module){
  projectController = {};
  projectController.reveal = function(){
    $('#about').hide();
    $('#projects').fadeIn();
  }
  module.projectController = projectController;
})(window);

(function(module){
  aboutController = {};
  aboutController.reveal = function(){
    $('#projects').hide();
    $('#about').fadeIn();
  }
  module.aboutController = aboutController;
})(window);

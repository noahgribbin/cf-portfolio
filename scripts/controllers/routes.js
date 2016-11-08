page('/', home);
page('/about', about);
function home(){
  projectController.reveal();
}
function about(){
  aboutController.reveal();
}
page();

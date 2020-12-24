// adding stars to skills

rating("flutter", 8);
rating("java", 6);
rating("htmlcss", 7);
rating("js",8);
rating("nodejs", 6);
rating("jquery", 8);
rating("python", 4);
rating("mysql", 9);
rating("firebase",6);


//function to add stars
function rating(cls,rating){
    for(var i = 1; i<=rating; i++){
        $("#"+cls).append('<i class="fa fa-star" aria-hidden="true"></i>');
    }
}

<<<<<<< HEAD

//Recent Projects
var projects = [
    {name: "MuheebTech",
    desc: "The website for Muheeb technical services",
    website: "https://www.muheebtechservices.com"},

    {name: "MoneyManager",
    desc: "This a simple expense manager app built using flutter",
    },

    {name: "Personal-Website",
    desc: "Old personal website. Still in learning stage.",
    website: "https://huzon.github.io/personal-website/"},

    {name: "DrumSet",
    desc: "Play the music you like on this simple drumset.",
    website: "https://huzon.github.io/drumSet"},

    {name: "Simon-Game",
    desc: "A simple game of memory made using JQuery",
    website: "https://huzon.github.io/Simon-Game"},

    {name: "JSDiceGame",
    desc: "A simple dice game using Javascript and CSS",
    website: "https://huzon.github.io/JSDiceGame"}

];
console.log(projects.length);
projects.forEach(project => {
    console.log(project.name);
    $('.projectData').append('<div class="col-md-4 col-sm-6">'+
    '<div class="projectImg" id="'+project.name+'">'+
        '<div class="img__description_layer">'+
        '<div class="img_description" id="">'+
          '<h3 class="projectTitle">'+project.name+'</h3>'+
          '<p class="projectDesc">'+project.desc+'</p>'+
          '<a class="btn btn-dark" href="'+project.website+'">'+
           ' <i class="fab fa-chrome projectIcon" aria-hidden="true"></i>'+
          '</a>'+
          '<a class="btn btn-dark noBorder" href="#">'+
            '<i class="fab fa-github projectIcon" aria-hidden="true"></i>'+
          '</a>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '</div>');

    $('#'+project.name).css({'background-image':'url(./images/projects/'+project.name+'.png)', 'background-size':'cover', 'background-position': 'center', 'background-repeat': 'no-repeat'});

});



=======
// appending projects
var project = '<div class="col-md-4 projects">'+
  '<div class="img__description_layer">'+
   ' <p class="img_description" id="">hello</p>'+
  '</div>';

jQuery.githubUser = function(username, callback) {
    jQuery.getJSON('https://api.github.com/users/'+'huzon'+'/repos?callback=?',callback)
 }

 var target = this;
 $.githubUser('huzon', function(data) {
     var repos = data.data; // JSON Parsing    
     console.log(repos);
    
     repos.forEach(tdata => {
         if(tdata.name != "huzon"){
         $('#projectInfo').append('<div class="col-md-4 col-sm-6 projects" id='+tdata.name+'>'+
         '<div class="img__description_layer">'+
          ' <div class="img_description" id="">'+
          '<h3>'+tdata.name+'</h3>'+
          '<p>'+tdata.description+'</p>'+
          '<a name="" id="" class="btn btn-outline btn-large" href="'+tdata.html_url+'" role="button"><i class="fab fa-github iconProject" aria-hidden="true"></i></a>'+
          '</div>'+
         '</div>');

         $('#'+tdata.name).css({'background-image':'url(./images/projects/'+tdata.name+'.png)', 'background-size':'cover', 'background-position': 'center', 'background-repeat': 'no-repeat'});
         
         console.log(tdata.name);}
     });
   });
//    background-position: center;
//    background-repeat: no-repeat;
//    background-size: cover;
>>>>>>> parent of 7b83e1a... color scheme changes

// ******************************** to get on top of page **************************************************
window.onscroll = function () {scrollFunction()} ;

function scrollFunction() {
    if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800)
        $('#toTop').css('display','block');
    
    else
        $('#toTop').css('display','none');
    
    
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    document.body.scrollTo({top: 0, behavior: "smooth"});
    document.documentElement.scrollTo({top: 0, behavior: "smooth"});
  }

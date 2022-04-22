// adding stars to skills

rating("flutter", 8);
rating("java", 6);
rating("htmlcss", 7);
rating("js", 8);
rating("nodejs", 6);
rating("jquery", 8);
rating("python", 4);
rating("mysql", 9);
rating("firebase", 6);

//function to add stars
function rating(cls, rating) {
  for (var i = 1; i <= rating; i++) {
    $("#" + cls).append('<i class="fa fa-star" aria-hidden="true"></i>');
  }
}

//Recent Projects
var projects = [
  {
    name: "MuheebTech",
    desc: "The website for Muheeb technical services",
    website: "https://www.muheebtechservices.com",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
  },

  {
    name: "Qaayima",
    desc: "Built UI for Qaayima which connects clients, restaurants, and riders.",
    website: "https://app.qaayima.com/",
    tech: ["HTML", "SCSS", "JavaScript"],
  },

  {
    name: "FlyerKart",
    desc: "Built UI for FlyerKart, a portal for shop owners to take their business online.",
    website: "https://www.flyerkart.com/",
    tech: ["HTML", "SCSS", "JavaScript"],
  },
  {
    name: "Velocity Mobile App",
    desc: "Applications build for velocity riders and managers for Android and IOS.",
    website: "https://velocity.qaayima.com/",
    tech: ["Flutter", "JSON", "Dart"],
  },

  {
    name: "Qaayima Mobile App",
    desc: "Applications build for Qaayima riders and managers for Android and IOS.",
    website: "app.qaayima.com",
    tech: ["Flutter", "JSON", "Dart"],
  },
  {
    name: "FlyerKart Mobile App",
    desc: "Applications build for FlyerKart for Android and IOS.",
    website: "https://www.flyerkart.com/",
    tech: ["Flutter", "JSON", "Dart"],
  },
];
console.log(projects.length);

projects.forEach((project) => {
  const imageNameArr = project.name.split(" ");
  var pName = "";
  imageNameArr.forEach((e) => {
    pName += e;
  });
  console.log(project.name);
  var tech = "";
  project.tech.forEach((e) => (tech += "<p class='tech'>" + e + "</p>"));
  $(".projectData").append(
    '<div class="col-md-4">' +
      '<div class="projectImg" id="' +
      pName +
      '">' +
      '<div class="img__description_layer">' +
      '<div class="img_description" id="">' +
      '<h3 class="projectTitle">' +
      project.name +
      "</h3>" +
      '<p class="projectDesc">' +
      project.desc +
      "</p>" +
      "<div class='techs'>" +
      tech +
      "</div>" +
      '<a class="btn btn-dark" href="' +
      project.website +
      '">' +
      ' <i class="fab fa-chrome projectIcon" aria-hidden="true"></i>' +
      "</a>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>"
  );
  console.log("Image name is " + pName);
  $("#" + pName).css({
    "background-image": "url(./images/projects/" + pName + ".png)",
  });
});

// ******************************** to get on top of page **************************************************
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800)
    $("#toTop").css("display", "block");
  else $("#toTop").css("display", "none");
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  document.body.scrollTo({ top: 0, behavior: "smooth" });
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
}

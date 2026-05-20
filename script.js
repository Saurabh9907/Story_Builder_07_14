function generateStory(){

  localStorage.setItem("username", document.getElementById("usernameInput").value);
  localStorage.setItem("storyTime", document.getElementById("storyTimeInput").value);
  localStorage.setItem("mainText", document.getElementById("mainTextInput").value);
 

  const file = document.getElementById("profileInput").files[0];
  const reader = new FileReader();

  reader.onload = function(){
    localStorage.setItem("profile", reader.result);
    window.location.href = "story.html";
  }

  if(file){
    reader.readAsDataURL(file);
  } else {
    window.location.href = "story.html";
  }
}

if(window.location.pathname.includes("story.html")){


  document.getElementById("displayUsername").innerText =
    localStorage.getItem("username");

  document.getElementById("displayStoryTime").innerText =
    localStorage.getItem("storyTime");

  document.getElementById("displayMainText").innerText =
    localStorage.getItem("mainText");

  const profile = localStorage.getItem("profile");
  if(profile){
    document.getElementById("displayProfile").src = profile;
  }
}
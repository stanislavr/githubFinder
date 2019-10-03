// initiate github
const github = new GitHub();
// initiate UI
const ui = new UI();

// search input
const searchUser = document.getElementById("searchUser");

// search input event listener
searchUser.addEventListener("keyup", e => {
  // get input text
  const userText = e.target.value;

  if (userText !== "") {
    // make http call
    github.getUser(userText).then(data => {
      console.log(data);
      if (data.profile.message === "Not Found") {
        // show alert
        ui.showAlert(`User not found`, "alert alert-danger");
      } else {
        // show profile
        ui.showProfile(data.profile);
        // show repos
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear alerts
    ui.clearAlert();
    // clear profile
    ui.clearProfile();
  }
});

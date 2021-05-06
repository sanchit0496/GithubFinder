let github = new GitHub();
let ui = new UI();
let githubrepo = new GitHubRepo();
let userName = document.getElementById('userName');


userName.addEventListener('keyup', getUser);


function getUser(e) {
    let enterValue = e.target.value;
    
    if(enterValue != ""){

        let y = github.getUser(enterValue)
        .then(data => {
            if(data.message === "Not Found"){
                document.getElementById('profile').innerHTML = "Not Found!";
            }else{
                ui.showProfile(data);
            }
        })

        let z = githubrepo.getRepo(enterValue)
        .then(data => {
            if(data.message === "Not Found"){
                document.getElementById('repo').innerHTML = "No Repositories!";
            }else{
                ui.showRepo(data);
                console.log(data);
            }
        })


    }else{
        document.getElementById('message').innerHTML = "Enter Username!";
    }





}

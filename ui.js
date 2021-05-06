class UI{
    constructor(){
        this.profile = document.getElementById('profile');
        this.repo = document.getElementById('repo');
    }

    showProfile(user){

        this.profile.innerHTML = `

        <div class = "one">
            <div class="profilepic">
                <img class = 'profilepic' src=  ${user.avatar_url}  />
            </div>
        </div>

        <div class = "two">
            <div class="profilename">
                Username: ${user.name}
            </div>
            <div class="profileurl">
                Profile URL: ${user.html_url}
            </div>
            <div class="profilebio">
                Bio: ${user.bio}
            </div>
            <div class="profilefollowers">
                Followers: ${user.followers}
            </div>
            <div class="profilefollowing">
                Following: ${user.following}
            </div>
            <div class="profilecreatedat">
                Created At: ${user.created_at}
            </div>
        </div>
        `;

    }; 

    showRepo(repos){
        let ou = "";
        for(let i = 0; i < repos.length; i++){
            ou += `
            <div class = "allrepo">
                <div class = "one">
                    <div class="reponame">
                        Repository: ${repos[i].full_name}
                    </div>
                </div>

                
                <div class = "two>
                    <div class="repourl">
                        URL: ${repos[i].url}
                    </div>
                    <div class="repoforks">
                        Forks: ${repos[i].forks}
                    </div>
                    <div class="repostars">
                        Stars: ${repos[i].stargazers_count}
                    </div>
                </div>
            </div>

            `;
            this.repo.innerHTML = ou;
        }
    }

  
  
}

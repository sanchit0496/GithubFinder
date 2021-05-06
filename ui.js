class UI{
    constructor(){
        this.profile = document.getElementById('profile');
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

    showRepo(data) {
        console.log(data);

    }    

  
}

class GitHub{
    constructor(){
        this.client_id = '7f44e9a6f6e95ad6e655';
        this.client_secret = '5f586e89d37f4c65e42d1df45d7b96a5c04e1140';
        this.repo_count = 9;
        this.repo_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileName = await profileResponse.json();
        const repoList = await repoResponse.json();

        return profileName;

    }


}

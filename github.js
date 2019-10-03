// GitHub class for any GitHub interactions
class GitHub {
  constructor() {
    this.client_id = "4754ebc26213efdfe780";
    this.client_secret = "476c000f219928ee126137aa55d81310d21ec043";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  // method to get a github user profile data
  async getUser(user) {
    // making a request
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    // saving a response
    const profile = await profileResponse.json();
    // saving repos
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}

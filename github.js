// GitHub class for any GitHub interactions
class GitHub {
  constructor() {
    this.client_id = "4754ebc26213efdfe780";
    this.client_secret = "476c000f219928ee126137aa55d81310d21ec043";
  }

  // method to get a github user profile data
  async getUser(user) {
    // making a request
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    // saving a response
    const profile = await profileResponse.json();
    return {
      profile
    };
  }
}

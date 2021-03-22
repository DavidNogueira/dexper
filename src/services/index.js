
const GOT = "Game of Thrones";
// const PPG = "Powerpuff Girls";

const Service = {
  fetchShow() {
    return fetch(`https://api.tvmaze.com/singlesearch/shows?q=${GOT}`)
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });
  },
  fetchEpisodes(episode_id) {
    const url_episodes_search = `https://api.tvmaze.com/shows/${episode_id}/episodes`;
    return fetch(url_episodes_search)
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });
  },

  fetchEpisode(params) {
    return fetch(
      `https://api.tvmaze.com/shows/${params.show}/episodebynumber?season=${params.season}&number=${params.episode}`
    )
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });
  },
};

export default Service;

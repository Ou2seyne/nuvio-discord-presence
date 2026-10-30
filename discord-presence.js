const COMPANION = 'http://127.0.0.1:6473/play';
async function getStreams(tmdbId, mediaType, season, episode) {
  try {
    const q = 'tmdbId=' + tmdbId + '&type=' + mediaType + (season ? '&season=' + season : '') + (episode ? '&episode=' + episode : '');
    await fetch(COMPANION + '?' + q);
  } catch (e) {}
  return [];
}
module.exports = { getStreams };

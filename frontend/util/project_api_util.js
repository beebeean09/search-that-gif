import $ from '@rtorr/ajax-only';

export const scrapeGif = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'
  });
};

import $ from '@rtorr/ajax-only';

export const searchGif = (searchTerm) => {
  return $.ajax({
    method: 'GET',
    url: `http://api.giphy.com/v1/stickers/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`
  });
};

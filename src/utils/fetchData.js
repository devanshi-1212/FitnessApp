export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '19c535feb9mshc466749ed5282acp12dfeajsn36259252b22f',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '19c535feb9mshc466749ed5282acp12dfeajsn36259252b22f',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=IE2146EBliANZGXEZ7GCpp6GTRydg31t&q=anime&limit=25&offset=0&rating=g&lang=en'

export default function getGifs (){
    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      const gifs = data.map(image => image.images.downsized_medium.url)
      return gifs
    })
}
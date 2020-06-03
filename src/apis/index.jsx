import axios from 'axios'

const KEY = 'AIzaSyDgaT_-7hWzTZgsZ7qiFhQz3b_46SWCH1Q'

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

export const fetchPopularData = async () => {
  return await youtube.get('/videos', {
    params: {
      part: 'snippet',
      maxResults: 40,
      key: KEY,
      regionCode: 'JP',
      type: 'Video',
      chart: 'mostPopular'
    }
  })
}
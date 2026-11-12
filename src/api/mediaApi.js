import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY

function requireApiKey(key, variableName) {
  if (!key) {
    throw new Error(`Missing ${variableName}. Add it to your Vercel environment variables and redeploy.`)
  }
  return key
}

export async function fetchPhotos(query,page=1,per_page=20) {
  const apiKey = requireApiKey(UNSPLASH_KEY, 'VITE_UNSPLASH_KEY')
  const res = await axios.get('https://api.unsplash.com/search/photos',{
    params:{query,page,per_page},
    headers:{Authorization:`Client-ID ${apiKey}`}
  })
  
  return res.data
}

export async function fetchVideos(query,per_page=15) {
  const apiKey = requireApiKey(PEXELS_KEY, 'VITE_PEXELS_KEY')
  const res = await axios.get('https://api.pexels.com/videos/search',{
    params:{query,per_page},
    headers:{Authorization:apiKey}
  })
  return res.data
}

export async function fetchGIF(query,limit=20) {
  const apiKey = requireApiKey(TENOR_KEY, 'VITE_TENOR_KEY')
  const res = await axios.get('https://tenor.googleapis.com/v2/search',{
    params:{q:query,key:apiKey,limit},
  })
  return res
}
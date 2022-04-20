import axios from 'axios'

export default async function get(url) {
  try {
    const response = await axios.get(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

import axios from 'axios'
import { useEffect, useState } from 'react'

const usePodcasts = () => {
  const [podcastData, setPodcastData] = useState<any>(null)

  const fetchPodcasts = async () => {
    let res = await axios.get(
      `https://mcsorleys.barstoolsports.com/feed/pardon-my-take`,
      // parse the incoming xml automatically with axios
      { responseType: 'document' }
    )

    let { data } = res
    return data
  }

  useEffect(() => {
    const getPodcasts = async () => {
      const podcastsXML = await fetchPodcasts()
      const podcastsItems = podcastsXML.querySelectorAll('item')

      const shapedPodcasts = [...podcastsItems].map(element => ({
        // grab the desired text inside the <!CDATA tag
        title: element.querySelector('title').innerHTML.slice(9, -3),
        // grab the url attribute
        link: element.querySelector('enclosure').getAttribute('url'),
      }))
      setPodcastData(shapedPodcasts)
    }

    getPodcasts()
  }, [])

  console.log(podcastData)

  return { podcastData }
}

export default usePodcasts

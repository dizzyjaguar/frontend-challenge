import axios from 'axios'
import { useEffect, useState } from 'react'

type podcast = {
  title: string
  link: string
}

const usePodcasts = () => {
  const [podcastData, setPodcastData] = useState<podcast[] | null>(null)
  const [currentEpisode, setCurrentEpisode] = useState<podcast | null>(null)

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
      // only set the first 20 episodes
      setPodcastData(shapedPodcasts.slice(0, 20))
      // set the newest episode first
      setCurrentEpisode(shapedPodcasts[0])
    }

    getPodcasts()
  }, [])

  // handler for updating the current episode
  const changeEpisode = (episode: podcast) => {
    setCurrentEpisode(episode)
  }

  return { podcastData, currentEpisode, changeEpisode }
}

export default usePodcasts

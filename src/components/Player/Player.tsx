import { AudioPlayer } from '@barstoolsports/react-audio-player'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Player() {
  const [podcastData, setPodcastData] = useState<any>(null)

  const fetchPodcasts = async () => {
    let res = await axios.get(
      `https://mcsorleys.barstoolsports.com/feed/pardon-my-take`
    )
    let { data } = res

    return { data }
  }

  useEffect(() => {
    const getPodcasts = async () => {
      const podcasts = await fetchPodcasts()
      setPodcastData(podcasts)
    }

    getPodcasts()

    return () => {}
  }, [])

  console.log(podcastData)

  return (
    <div className="sticky bottom-0">
      <AudioPlayer />
    </div>
  )
}

export default Player

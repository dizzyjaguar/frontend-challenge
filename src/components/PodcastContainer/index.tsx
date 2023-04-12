import usePodcasts from '../../hooks/podcasts'
import EpisodesTable from '../EpisodesTable'
import Player from '../Player'

function PodcastContainer() {
  const { podcastData, currentEpisode, changeEpisode } = usePodcasts()

  return (
    <>
      <Player track={currentEpisode} />
      <EpisodesTable podcastData={podcastData} handleClick={changeEpisode} />
    </>
  )
}

export default PodcastContainer

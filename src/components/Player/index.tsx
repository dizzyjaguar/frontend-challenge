// @ts-ignore
import { AudioPlayer } from '@barstoolsports/react-audio-player'
import usePodcasts from '../../hooks/podcasts'

function Player() {
  const { podcastData } = usePodcasts()

  return (
    <div className="sticky bottom-0 mt-4">
      {podcastData ? (
        <AudioPlayer
          trackTitle={podcastData ? podcastData[0].title : 'Loading...'}
          trackUrl={podcastData && podcastData[0].link}
        />
      ) : (
        <h1>Loading Audio Player</h1>
      )}
    </div>
  )
}

export default Player

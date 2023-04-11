// @ts-ignore
import { AudioPlayer } from '@barstoolsports/react-audio-player'
import usePodcasts from '../../hooks/podcasts'

function Player() {
  const { currentEpisode } = usePodcasts()
  console.log(currentEpisode)
  return (
    <div className="sticky bottom-0 my-4">
      {currentEpisode !== null ? (
        <AudioPlayer
          trackTitle={currentEpisode ? currentEpisode.title : 'Loading...'}
          trackUrl={currentEpisode && currentEpisode.link}
        />
      ) : (
        <h1>Loading Audio Player</h1>
      )}
    </div>
  )
}

export default Player

// @ts-ignore
import { AudioPlayer } from '@barstoolsports/react-audio-player'
import { useRef } from 'react'

const initialState = { title: 'Loading...', link: '' }

function Player({ track = initialState }) {
  const player = useRef()

  return (
    <div className="sticky bottom-0 my-4">
      {
        <AudioPlayer
          ref={player}
          trackTitle={track !== undefined ? track.title : undefined}
          trackUrl={track !== undefined ? track.link : undefined}
        />
      }
    </div>
  )
}

export default Player

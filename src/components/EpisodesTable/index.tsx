import usePodcasts from '../../hooks/podcasts'

function EpisodesTable() {
  const { podcastData, changeEpisode, currentEpisode } = usePodcasts()
  console.log(currentEpisode)

  const podcastNodes = podcastData?.map(podcast => (
    <tr key={podcast.title} className="border-black border-b-[1px]">
      <td>
        <p className="text-sm">{podcast.title}</p>
      </td>
      <button onClick={() => changeEpisode(podcast)}>Listen</button>
    </tr>
  ))

  return (
    <div className="w-full">
      <table>{podcastNodes}</table>
    </div>
  )
}

export default EpisodesTable

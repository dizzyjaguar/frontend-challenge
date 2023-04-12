import { podcast } from '../../hooks/podcasts'

interface props {
  podcastData: podcast[] | undefined
  handleClick: (episode: podcast) => void
}

function EpisodesTable({ podcastData, handleClick }: props) {
  const podcastNodes = podcastData?.map((podcast: podcast) => (
    <tr key={podcast.title} className="border-black border-b-[1px]">
      <td>
        <p className="text-sm">{podcast.title}</p>
      </td>
      <td>
        <button
          className=" hover:text-gray-300"
          onClick={() => handleClick(podcast)}
        >
          Listen
        </button>
      </td>
    </tr>
  ))

  return (
    <div className="w-full">
      <h1 className="mb-2 text-lg">Recent Episodes</h1>
      <table>
        <tbody>{podcastNodes}</tbody>
      </table>
    </div>
  )
}

export default EpisodesTable

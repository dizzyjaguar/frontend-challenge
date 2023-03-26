import axios from 'axios'
import useSwr from 'swr'
import Button from '../Button'
import Story from '../Story'
import { API_URL } from '../../constants'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

function Feed() {
  const { data, error, isLoading } = useSwr(API_URL, fetcher)
  console.log(data)

  return (
    <div className="w-full mt-4">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data &&
        data.map((story: any) => (
          <Story
            key={story.id}
            title={story.title}
            storyImage={story.thumbnail.desktop}
            authorName={story.author.name}
            authorImage={story.author.avatar}
          />
        ))
      )}

      <div className="mt-4">
        <Button text="Load More" />
      </div>
    </div>
  )
}

export default Feed

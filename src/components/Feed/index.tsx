import Button from '../Button'
import Story from '../Story'
import useFeed from '../../hooks/feed'

function Feed() {
  const { stories, error, isLoading, isLoadingMore, fetchMore } = useFeed()

  return (
    <div className="w-full mt-4">
      {error ? (
        <h1 className="text-red-400">{error?.message}</h1>
      ) : (
        stories &&
        stories.map((story: any) => (
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
        <Button
          text="Load More"
          loading={isLoading || isLoadingMore}
          handleClick={fetchMore}
        />
      </div>
    </div>
  )
}

export default Feed

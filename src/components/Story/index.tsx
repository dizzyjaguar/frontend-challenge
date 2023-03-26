import Image from 'next/image'

interface StoryProps {
  title: string
  storyImage: string
  authorName: string
  authorImage: string
}

/**
 * Story
 *
 * @prop title - the title text of the story
 * @prop storyImage - the `url` of the stories thumbnail
 * @prop authorName - name of the author
 * @prop authorImage the `url` of the authors thumbnail
 */

function Story({ title, storyImage, authorName, authorImage }: StoryProps) {
  return (
    <div
      className={`border-[1px] border-[#DDDDDD] h-[192px] p-4 flex flex-row mb-4`}
    >
      <div className={`w-[50%] h-full mr-4 relative`}>
        <Image
          src={storyImage}
          layout="fill"
          objectFit="cover"
          alt="Image of a story post"
        />
      </div>
      <div className={`w-2/3 mr-4 flex flex-col justify-between`}>
        <h1 className={`text-xl font-bold leading-5`}>{title}</h1>
        <div className={`flex flex-row space-x-1 items-center pb-2`}>
          <div className={`w-8 h-8 mr-2 relative rounded-full overflow-hidden`}>
            <Image
              src={storyImage}
              layout="fill"
              objectFit="cover"
              alt="Image of a story post"
            />
          </div>
          <h3>{authorName}</h3>
        </div>
      </div>
    </div>
  )
}

export default Story

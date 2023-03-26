import axios from 'axios'
import useSWRInfinite from 'swr/infinite'
import { API_URL } from '../constants'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

const useFeed = () => {
  // use SWR to be our workhorse
  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    index => API_URL + `?page=${index + 1}`,
    fetcher,
    // poll every 10 seconds
    { refreshInterval: 10000 }
  )
  // add the next group of stories to the end of the previously fetched stories
  const stories = data ? [].concat(...data) : []
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined')

  // fetch the next page of stories
  const fetchMore = () => setSize(size + 1)

  return { stories, error, isLoading, isLoadingMore, fetchMore }
}

export default useFeed

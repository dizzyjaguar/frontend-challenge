interface ButtonProps {
  text: string
  loading?: Boolean
  handleClick?: () => void
}

/**
 * Button
 *
 * @prop text - text content of the `button`
 * @prop loading - `boolean` loading state
 * @prop handleClick - `function` that runs `onClick`
 */

function Button({ text, loading, handleClick }: ButtonProps) {
  return (
    <button
      onClick={!loading ? handleClick : undefined}
      className={`w-full h-10 bg-[#C4232A] text-white hover:opacity-90 hover:text-gray-50 active:bg-red-700 ${
        loading && 'bg-gray-400 active:bg-gray-400'
      }`}
    >
      {!loading ? text : 'Loading...'}
    </button>
  )
}

export default Button

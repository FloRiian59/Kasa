/* eslint-disable react/prop-types */
function Rating({ note }) {
  const stars = [1, 2, 3, 4, 5]
  return (
    <div className="rating-stars">
      {stars.map((level) =>
        note >= level ? (
          <i
            className="fa-solid fa-star full"
            key={level.toString()}
            alt="rating star"
          />
        ) : (
          <i
            className="fa-solid fa-star empty"
            key={level.toString()}
            alt="rating star"
          />
        )
      )}
    </div>
  )
}
export default Rating

const StarRating = ({ rate }: { rate: number }) => {
  return (
    <div className="rating rating-half">
      {Array(10)
        .fill(0)
        .map((d, idx) => (
          <input
            key={idx}
            type="radio"
            name="rating-10"
            className={
              idx % 2 === 0
                ? "bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
                : "bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
            }
            disabled
            checked={Math.floor(rate * 2) == idx + 1 ? true : false}
          />
        ))}
    </div>
  );
};

export default StarRating;

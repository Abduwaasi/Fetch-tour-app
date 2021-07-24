import React, { useState } from "react";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h5 className="tour-price">${price}</h5>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}{" "}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          type="submit"
          className="delete-btn"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tours;

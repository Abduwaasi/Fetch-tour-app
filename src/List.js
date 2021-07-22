import React from "react";
const List = (props) => {
  const { people } = props;
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className="person" key={id}>
            <img src={image} alt={name} />
            <div>
              <h5>{name}</h5>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </React.Fragment>
  );
};
export default List;

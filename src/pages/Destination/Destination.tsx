import { data } from "../../data";
import { useState } from "react";

type Props = {};

const Destination = (props: Props) => {
  const [destinationIndex, setDestinationIndex] = useState<number>(0);

  const { destinations } = data ?? {};
  return (
    <div className="dest-container">
      <div className="dest-content-row">
        <div className="dest-left-container">
          <h3>
            <span>01</span> Pick your destination
          </h3>
          {destinations?.[destinationIndex]?.images?.png && (
            <img
              src={destinations[destinationIndex].images.png}
              alt={destinations[destinationIndex].name ?? ""}
            />
          )}
        </div>
        <div className="dest-right-container">
          <div className="dest-nav-links">
            {data.destinations.map(
              (item, index) =>
                item?.name && (
                  <div
                    className={`hover ${
                      destinationIndex === index && "active"
                    }`}
                    key={index}
                    onClick={() => setDestinationIndex(index)}
                  >
                    <h1>{item.name}</h1>
                  </div>
                )
            )}
          </div>
          {destinations?.[destinationIndex]?.name && (
            <h1>{destinations[destinationIndex].name}</h1>
          )}
          {destinations?.[destinationIndex]?.description && (
            <p>{destinations[destinationIndex].description}</p>
          )}
          <div className="dest-right-container-details">
            {destinations?.[destinationIndex]?.distance && (
              <div>
                <span>AVG. DISTANCE</span>
                <h2>{destinations[destinationIndex].distance}</h2>
              </div>
            )}
            {destinations?.[destinationIndex]?.travel && (
              <div>
                <span>Est. travel time</span>
                <h2>{destinations[destinationIndex].travel}</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;

import { data } from "../../data";
import { useState } from "react";

type Props = {};

const Crew = (props: Props) => {
  const [crewIndex, setCrewIndex] = useState<number>(0);

  const { crew } = data ?? {};
  return (
    <div className="crew-container">
      <div className="crew-row">
        <div className="crew-wrapper">
          <div className="crew-left-container">
            <div className="crew-title-container">
              <h5>
                <span>02</span> Meet your crew
              </h5>
            </div>
            <div className="crew-desc-container">
              {crew?.[crewIndex]?.role && <h4>{crew[crewIndex].role}</h4>}

              {crew?.[crewIndex]?.name && <h3>{crew[crewIndex].name}</h3>}

              {crew?.[crewIndex]?.bio && <p>{crew[crewIndex].bio}</p>}
            </div>
            <div className="carousel-container">
              <div className="carousel-row">
                {data.crew.map(
                  (item, index) =>
                    item?.id && (
                      <div
                        className={`carousel-item ${
                          crewIndex === index && "active"
                        }`}
                        key={index}
                        onClick={() => setCrewIndex(index)}
                      >
                        {item.id}
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
          <div className="crew-right-container">
            {crew?.[crewIndex]?.images?.png && (
              <img
                src={crew[crewIndex].images.png}
                alt={crew[crewIndex].name ?? ""}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;

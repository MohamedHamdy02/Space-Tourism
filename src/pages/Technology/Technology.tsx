import { data } from "../../data";
import { useState } from "react";

type Props = {};

const Technology = (props: Props) => {
  const [technologyIndex, setTechnologyIndex] = useState<number>(0);

  const { technology } = data ?? {};

  return (
    <div className="technology-container">
      <div className="technology-row">
        <div className="technology-wrapper">
          <div className="technology-left-container">
            <div className="technology-title">
              <h5>
                <span>03</span> Space Lanuch 101
              </h5>
            </div>
            <div className="technology-content-container">
              <div className="buttons-container">
                {data.technology.map(
                  (item, index) =>
                    item.id && (
                      <div
                        className={`button ${
                          technologyIndex === index && "active"
                        }`}
                        key={index}
                        onClick={() => setTechnologyIndex(index)}
                      >
                        {item.id}
                      </div>
                    )
                )}
              </div>
              <div className="technology-desc-container">
                <h6>THE TERMINOLOGY…</h6>

                {technology?.[technologyIndex]?.name && (
                  <h3>{technology?.[technologyIndex]?.name}</h3>
                )}

                {technology?.[technologyIndex]?.description && (
                  <p>{technology?.[technologyIndex]?.description}</p>
                )}
              </div>
            </div>
          </div>
          <div className="technology-right-container">
            <div className="device-screen">
              {technology?.[technologyIndex]?.images?.portrait && (
                <img
                  src={technology[technologyIndex].images.portrait}
                  alt={technology[technologyIndex].name ?? ""}
                />
              )}
            </div>

            <div className="mobile-tablet-screen">
              {technology?.[technologyIndex]?.images.landscape && (
                <img
                  src={technology[technologyIndex].images.landscape}
                  alt={technology[technologyIndex].name ?? ""}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;

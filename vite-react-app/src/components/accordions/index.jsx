/* eslint-disable react/jsx-key */
/* single and multiple selection */
import { useState } from "react";
import data from "./data";
import './styles.css';

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSinglSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          // eslint-disable-next-line react/jsx-key
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handleSinglSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
}

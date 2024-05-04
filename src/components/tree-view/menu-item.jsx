import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

function MenuItem({ item }) {
  const [displayCurrentChildern, setDisplayCurrentChildern] = useState({});

  function handleToggleChildern(getCurrentLabel) {
    setDisplayCurrentChildern({
      ...displayCurrentChildern,
      [getCurrentLabel]: !displayCurrentChildern[getCurrentLabel],
    });
  }

  console.log(displayCurrentChildern);

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildern(item.label)}>
            {displayCurrentChildern[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildern[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;

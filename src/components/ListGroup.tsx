import { MouseEvent, useState } from "react";

/* Using an interface to pass in data using Props. */
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  /* Using a State Hook, we can tell react that this Component will have data or state that will change over time.
     This Event Handler uses an array with a variable (selectedIndex) and a Function (SetSelectedIndex)*/
  const [selectedIndex, SetSelectedIndex] = useState(-1);

  /* Can use a Constant or Function to extract logic and dynamically update elements below to increase readability.
     A Function allows for parameters, if not needed then use a Constant. */
  const message = items.length === 0 && <p>No items found.</p>;
  const getMessage = () => {
    return items.length === 0 && <p>Function test.</p>;
  };

  /* Another way an event can be used to handle mouseclicks - specify handleClick in the onClick attribute */
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      {/* Using a Fragment "<>, </>" to group multiple elements in a return statement, this way it doesn't create an extra element in the DOM, like a div. */}
      <h1>{heading}</h1>
      {message}
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              SetSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

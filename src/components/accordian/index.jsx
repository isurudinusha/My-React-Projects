import data from "./data";
import { useState } from "react";
import './styles.css';

function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMutiSelection, setEnableMutilSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentID) {
        setSelected(getCurrentID === selected ? null : getCurrentID);
    }

    function handleMultiSletion(getCurrentID) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentID);

        if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentID)
        else copyMultiple.splice(findIndexOfCurrentId, 1)
        console.log(copyMultiple);
        setMultiple(copyMultiple)
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMutilSelection(!enableMutiSelection)}>Enable Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map(dataItem =>
                            <div className="item">
                                <div onClick={enableMutiSelection
                                    ? () => handleMultiSletion(dataItem.id)
                                    : () => handleSingleSelection(dataItem.id)}

                                    className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>

                                {

                                    selected === dataItem.id ||
                                        multiple.indexOf(dataItem.id) !== -1 ?
                                        <div className="content">{dataItem.answer}</div>
                                        : null

                                }


                            </div>

                        )
                        : <div>No Data Found!</div>
                }
            </div>
        </div>
    );
}

export default Accordian;
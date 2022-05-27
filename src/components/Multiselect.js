import Multiselect from 'multiselect-react-dropdown'
import { useState } from "react";
import "../assets/css/multiselect.css";

export default function MultiselectComponent(props){
    const [selected, setSelected] = useState([]); // this tracks the items/options that the user has selected
    const options = props.values;

    return (
        <div className='ms-box'>
            <Multiselect
                displayValue="key"  // the value to display
                groupBy="cat"       // the value to group the items by
                selectedValues={selected}
                options={options}
                onSelect={(event) => {
                    // if 'Select All' was pressed
                    if(event[event.length-1].key === "Select All"){
                        // update the state so that all the options/items are selected
                        setSelected(options); 
                    }
                    else {
                        // add the singular item that was selected to the array of selected items
                        setSelected([...selected, event[event.length-1]]);
                    }
                }}
                onRemove={(event) => {
                    // 'event' is an array of the new set of selected items, after the removal so we simply use it to set the state
                    setSelected(event);
                }}            
                placeholder="Select an item or two..."
                showArrow={true}
                emptyRecordMsg= "No more options available"
            />
        </div>
    );
}

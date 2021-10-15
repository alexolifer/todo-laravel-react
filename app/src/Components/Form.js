import React, {useState} from 'react';

export default function Form(props) {

    const [text, setText] = useState("");

    function handleChange(evt) {
        let txt = evt.target.value;
        setText(txt)
    }

    function addItem(evt) {
        evt.preventDefault()

        if (text){
            props.onAddItem(text)
        }
        setText("")
    }

    return (
            <form>
                <input onChange={handleChange} className={"border-2 border-indigo-200 rounded-md mr-3 px-2 py-1"}
                       type="text"
                       value={text}/>
                <button onClick={addItem}>Add</button>
            </form>
    );

}
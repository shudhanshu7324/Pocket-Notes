import { useState } from 'react';
import '../components/Css/SubNotes.css';
import { IoSend } from "react-icons/io5";

const SubNotes = () => {
    const [text, setText] = useState('');

    const handleText = (e) => {
        setText(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {  // Detect 'Enter' key without shift
            e.preventDefault();
            handleSubmit();  // Call submit function directly
        }
    };

    const handleSubmit = () => {
        if (text.trim().length === 0) return;  // Ensure non-empty text
        console.log('Text submitted:', text);
        setText('');  // Clear the textarea after submission
    };

    return (
        <div className='subnotes'>
            <div className="header"></div>
            <div className="notes-content"></div>
            <div className="textarea-foot">
                <textarea 
                    placeholder='Enter your text here...........' 
                    name="text" 
                    id="text" 
                    value={text} 
                    onChange={handleText} 
                    onKeyDown={handleKeyPress}  // Add the key press listener
                ></textarea>
            </div>
            <button 
                className={`send ${text.length > 0 ? 'enabled' : 'disabled'}`}  // Add conditional class
                onClick={handleSubmit}  // Submit on button click
                disabled={text.length === 0}
            >
                <IoSend />
            </button>
        </div>
    );
};

export default SubNotes;

import React from 'react';
import './overlay.scss';

interface OverlayInterface {
    emitClick: () => void;
    buttonText: string;
}

const Overlay: React.FC<OverlayInterface> = ({ emitClick, buttonText }) => {
    return (
        <div className="overlay">
            <button className="button" onClick={() => emitClick()}>{ buttonText }</button>
        </div>
    )
}
export default Overlay;

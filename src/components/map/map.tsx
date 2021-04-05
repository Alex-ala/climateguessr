import React from 'react';

interface MapInterface {
    onSelect: (selectValue: any) => void;
}

const Map: React.FC<MapInterface> = ({onSelect}) => {
    return (
        <div className="osm">
            hier kommt die map rein und bei onClick / onSelect whatever rufst du onSelect() mit deinem Parameter auf.
        </div>
    )
}
export default Map;

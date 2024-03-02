import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onHandleSubmit = (ev) => {
        ev.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    };

    return (
        <div>
            
        </div>
    );
};

export default SearchBar;
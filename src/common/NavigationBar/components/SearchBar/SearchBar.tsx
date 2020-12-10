import React from 'react';

const searchImgUrl = `http://localhost:3000/static/search.png`;

const SearchBar: React.FC = () => {
    return (
        <div className="nav-search-box">
            <div className="nav-search">
                <input type="text"/>
                <div className="nav-search-btn" style={{
                    background: `url(${searchImgUrl}) 0% 0% / 100% 100% no-repeat`,
                }}>
                </div>
            </div>
        </div>
    )
};

export default SearchBar;
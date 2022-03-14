import React from 'react';
type Props = {
    className?: string,
    onSearch?: () => void
}
const Search = ({className, onSearch} : Props) => {
    return (
        <div className={`d-flex align-items-center ${className} && ${className}`}>
            <input className='app-search' placeholder='Search here' style={{ border: '1px solid #000' }} />
            <button className='search-btn'> <i className="fal fa-search"></i> </button>
        </div>
    );
};

export default Search;
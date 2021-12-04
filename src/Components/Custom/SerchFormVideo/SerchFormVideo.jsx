import React from 'react'

const SerchFormVideo = ({handleKeyword, handleSearchData}) => {
    return (
        <form className="w-3/4 tablet:w-1/2 m-auto mt-5 mb-5" onSubmit={handleSearchData}>
            <input
            type="text"
            className="w-3/4 px-1 py-1 tablet:p-3 outline-none border border-black rounded-l-2xl"
            placeholder="Search Video by keyword"
            onChange={({ target }) => handleKeyword(target)}
            />
            <input
            type="submit"
            value="Search"
            className="w-1/4 bg-teal-600 px-1 py-1 tablet:p-3 border border-teal-600 text-white rounded-r-2xl"
            />
      </form>
  
    );
};

export default SerchFormVideo

import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function Search({ onChange }) {
  return (
    <>
      <div className="search__container">
        <label htmlFor="searchbar" className="search__label">
          <span className="search__icon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          Search recent posts...
        </label>
        <input
          type="text"
          onChange={onChange}
          className="search"
          placeholder="Search..."
        />
      </div>
    </>
  )
}

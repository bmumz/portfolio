import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function Search({ onChange }) {
  return (
    <>
      <form
        id="page-search"
        role="search"
        aria-label="On this page"
        className="search__container"
      >
        <label htmlFor="searchbar" className="search__label">
          <span className="search__icon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </label>
        <input
          type="text"
          onChange={onChange}
          className="search"
          placeholder="Search recent posts..."
          aria-label="searchbar"
        />
      </form>
    </>
  )
}

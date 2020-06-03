import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div>
        <Link to="/">VideoTude</Link>
      </div>
      <div>
        <form>
          <input type="text" placeholder="検索" />
          <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </div>
    </div>
  )
}

export default Header

import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import Style from './Header.module.scss'

const Header = () => {
  const [term, setTerm] = useState('')
  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to="/">VideoTude</Link>
      </div>
      <div className={Style.item}>
        <form>
          <input
            type="text"
            placeholder="検索"
            onChange={e => setTerm(e.target.value)}
            value={term} />
          <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </div>
    </div>
  )
}

export default Header

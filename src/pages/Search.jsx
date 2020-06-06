import React,{useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import { useLocation} from 'react-router-dom'

const Search = () => {
  const location = useLocation()
  const setSearchResult = async () => {
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get('query')
    console.log(query)
  }
  useEffect(() => {
    setSearchResult()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Layout>
      Seach page
    </Layout>
  )
}

export default Search

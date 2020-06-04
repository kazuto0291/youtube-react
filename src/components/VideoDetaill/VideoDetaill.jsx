import React, { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import {fetchSelectedData} from '../../apis/index'

const VideoDetaill = () => {
  const location = useLocation();
  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('v')
    await fetchSelectedData(id).then((res) => {
      console.log('res', res);
    })
  }
  useEffect(() => {
    setSelectedVideo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default VideoDetaill

import React, { useState, useEffect } from 'react'
import { Text } from '../index'
import moment from 'moment'

const TimeDisplay = () => {
  const [date, setDate] = useState(moment(new Date()).format('HH:mm:ss A'))
  const updateDate = () => {
    setDate(moment(new Date()).format('HH:mm:ss A'))
  }

  useEffect(() => {
    setInterval(() => {
      updateDate()
    }, 1000)
  }, [])
  return <Text variant='link'>{date}</Text>
}

export default TimeDisplay

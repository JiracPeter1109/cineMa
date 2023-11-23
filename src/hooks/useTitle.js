import { useEffect } from 'react'

export const useTitle = (title) => {
  return (
    useEffect( () => {
        document.title = `${title} / DarkDevil`
    } )
  )
}

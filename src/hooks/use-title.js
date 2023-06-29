import { useEffect } from 'react'

export function useTitle(title) {
  useEffect(() => {
    // const prevTitle = document.title
    document.title = title ? `${title} - henland` : 'henland'
    // return () => {
    //   console.log(`exiting ${prevTitle}`)
    //   document.title = prevTitle
    // }
  }, [title])
}

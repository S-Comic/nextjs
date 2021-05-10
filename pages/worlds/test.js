import { useState } from 'react'

const names = ['Tim', 'Joe', 'Bel', 'Max', 'Lee']

export default function Page() {
  const [results, setResults] = useState()

  return (
    <div>
      <button
        onClick={async (e) => {
          const { value } = e.currentTarget
          // Dynamically load fuse.js
          const Fuse = (await import('../../components/Juno Whitfoot.md')).default
        }}>
      </button>
      <pre>Results: </pre>
    </div>
  )
}

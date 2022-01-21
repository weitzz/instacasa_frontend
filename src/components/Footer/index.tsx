import {Link} from 'react-router-dom'

  const Footer = () => {
  return (
    <footer className="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">
      <h2>Tatiane Weitzel</h2>
      <p>21/01/2022</p>
      <Link to="">GitHub</Link>
      <Link to="">LinkedIn</Link>
    </footer>
  )
}

export default Footer
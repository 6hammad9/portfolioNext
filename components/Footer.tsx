import { contact } from '@/lib/plakat'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© MMXXVI Raja Hammad Naseer · Gesetzt in Ilmenau</span>
        <a href={contact.website} target="_blank" rel="noopener">
          rajahammadnaseer.com ↗
        </a>
      </div>
    </footer>
  )
}

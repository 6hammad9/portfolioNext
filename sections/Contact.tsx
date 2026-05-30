import { contact } from '@/lib/plakat'

export default function Contact() {
  return (
    <section className="kontakt" id="kontakt">
      <div className="wrap" data-reveal>
        <div className="de">Kontakt aufnehmen / Get in touch</div>
        <h2>
          Lass uns etwas
          <br />
          <em>Bauen</em>.
        </h2>
        <a className="mail" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        <div className="socials">
          <a href={contact.linkedin} target="_blank" rel="noopener">
            LinkedIn ↗
          </a>
          <a href={contact.github} target="_blank" rel="noopener">
            GitHub ↗
          </a>
          <a href={contact.website} target="_blank" rel="noopener">
            Website ↗
          </a>
          <a href={contact.phoneHref}>{contact.phone}</a>
        </div>
      </div>
    </section>
  )
}

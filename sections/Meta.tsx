// Languages / Certifications / Workshops — three bordered panels.
export default function Meta() {
  return (
    <section className="sec" id="weiteres">
      <div className="wrap">
        <div className="meta3" data-reveal>
          <div className="mp">
            <h4>
              Sprachen <span className="de">/ Languages</span>
            </h4>
            <div className="ln">
              <span className="nm">English</span>
              <span className="vl">C1 · Pro</span>
            </div>
            <div className="ln">
              <span className="nm">Deutsch</span>
              <span className="vl">B1</span>
            </div>
            <div className="ln">
              <span className="nm">Urdu</span>
              <span className="vl">Native</span>
            </div>
          </div>
          <div className="mp">
            <h4>
              Zertifikate <span className="de">/ Certifications</span>
            </h4>
            <div className="ln">
              <span className="nm">
                Node.js: The Complete Guide
                <small>MVC · REST APIs · GraphQL</small>
              </span>
            </div>
            <div className="ln">
              <span className="nm">
                Google Data Analytics
                <small>Professional Certificate</small>
              </span>
            </div>
          </div>
          <div className="mp">
            <h4>
              Workshops <span className="de">/ Seminare</span>
            </h4>
            <div className="ln">
              <span className="nm">
                Fraunhofer IOSB-AST — Dataspaces
                <small>Sovereign data infra · contract negotiation</small>
              </span>
              <span className="vl">2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

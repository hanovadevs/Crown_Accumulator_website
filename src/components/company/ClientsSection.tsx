import { company } from "@/data/company";

export function ClientsSection({ light = false }: { light?: boolean }) {
  return (
    <section className={"clients-section " + (light ? "clients-light" : "")} aria-labelledby="clients-title">
      <div className="section-shell">
        <div className="section-intro"><p className="eyebrow">Our customers</p><div><h2 id="clients-title">Built on lasting relationships.</h2><p>Supplying motorcycle and engineering companies across Pakistan.</p></div></div>
        <div className="client-grid">{company.customers.map((client) => <div className="client-name" key={client.name}><p>{client.name}</p>{"alias" in client && <span>{client.alias}</span>}</div>)}</div>
      </div>
    </section>
  );
}

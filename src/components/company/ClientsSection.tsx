import { company } from "@/data/company";

export function ClientsSection({ light = false }: { light?: boolean }) {
  return (
    <section className={light ? "py-16 sm:py-20" : "bg-surface py-16 sm:py-20"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p
          className={`font-display text-center text-sm font-bold uppercase tracking-[0.25em] ${
            light ? "text-crown-maroon" : "text-crown-maroon"
          }`}
        >
          Main Customers
        </p>
        <h2
          className={`font-display mt-3 text-center text-2xl font-bold sm:text-3xl ${
            light ? "text-text-primary" : "text-text-primary"
          }`}
        >
          Trusted by leading manufacturers
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-text-muted">
          Crown Accumulator supplies batteries, plates, and sprockets to motorcycle
          and engineering companies across Pakistan.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {company.customers.map((client) => (
            <div
              key={client.name}
              className="rounded-lg border border-border bg-surface-elevated px-5 py-6 text-center transition-shadow hover:shadow-md"
            >
              <p className="font-display text-sm font-bold leading-snug text-crown-navy">
                {client.name}
              </p>
              {"alias" in client && client.alias && (
                <p className="mt-1 text-xs text-crown-maroon">({client.alias})</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

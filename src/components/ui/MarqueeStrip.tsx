interface MarqueeItem {
  name: string;
  alias?: string;
  shortName?: string;
}

export function MarqueeStrip({ items }: { items: readonly MarqueeItem[] }) {
  return <div className="client-grid">{items.map((item) => <div className="client-name" key={item.name}><p>{item.name}</p>{item.alias && <span>{item.alias}</span>}</div>)}</div>;
}

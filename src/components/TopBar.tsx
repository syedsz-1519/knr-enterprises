export default function TopBar() {
  return (
    <div className="top-bar py-1.5">
      <div className="container-app flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="font-mono tracking-wide">
          H.No 1-77/6, Near HP Petrol Pump, Chevella 501503
        </span>
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-mono tracking-wide">
            GSTIN:&nbsp;36CUHPK5939D1ZG
          </span>
          <span
            className="font-heading font-semibold uppercase tracking-widest text-[11px]"
            style={{ color: '#73dc90' }}
          >
            ● CIVIC MUNICIPAL SUPPLIER
          </span>
          <span className="font-mono tracking-wide">
            8886175855 / 9640195798
          </span>
        </div>
      </div>
    </div>
  );
}

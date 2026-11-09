import Link from "next/link";
import { MessageSquare, Package, ChevronRight } from "lucide-react";

const orders = [
  {
    id: "#ORD-8902",
    status: "Dispatched",
    date: "24 Oct, 09:15 AM",
    item: "Streetlight LED Fixtures (90W)",
    qty: "30 Units",
    value: "₹1,35,000",
    customer: "Gram Panchayat Shankarpally",
  },
  {
    id: "#ORD-8895",
    status: "Delivered",
    date: "21 Oct, 02:30 PM",
    item: "Bleaching Powder (50kg Bags)",
    qty: "80 Bags",
    value: "₹56,000",
    customer: "Gram Panchayat Chevella",
  },
];

function statusStyle(status: string) {
  switch (status.toLowerCase()) {
    case "new":        return "pill-new";
    case "confirmed":  return "pill-confirmed";
    case "dispatched": return "pill-dispatched";
    case "delivered":  return "pill-delivered";
    default:           return "pill-new";
  }
}

export default function MyOrdersPage() {
  return (
    <div className="container-app py-4">
      {/* Header */}
      <div className="mb-5">
        <h1 className="section-heading text-3xl">My Orders</h1>
        <p className="font-body text-sm mt-2" style={{ color: "#64748B" }}>
          Track your indent history and dispatch status.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="card p-10 text-center">
          <Package size={40} className="mx-auto mb-3" style={{ color: "#64748B" }} />
          <div className="font-heading font-bold text-lg uppercase tracking-wide mb-1" style={{ color: "#0B1B3A" }}>
            No Orders Yet
          </div>
          <p className="font-body text-sm mb-4" style={{ color: "#64748B" }}>
            Browse the catalogue and submit your first indent.
          </p>
          <Link href="/catalogue" className="btn-primary inline-flex">
            Open Catalogue
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {orders.map((order) => (
            <div key={order.id} className="card p-4">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-sm" style={{ color: "#0B1B3A" }}>
                    {order.id}
                  </span>
                  <span
                    className={`inline-block font-heading font-bold uppercase text-xs tracking-widest px-3 py-1 rounded-full ${statusStyle(order.status)}`}
                  >
                    {order.status}
                  </span>
                </div>
                <span className="font-body text-xs flex-shrink-0" style={{ color: "#64748B" }}>
                  {order.date}
                </span>
              </div>

              <div
                className="py-2 mb-3"
                style={{ borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}
              >
                <div className="font-body text-sm font-medium" style={{ color: "#0F172A" }}>
                  {order.item}
                </div>
                <div className="flex gap-4 mt-1 font-body text-sm" style={{ color: "#64748B" }}>
                  <span>Qty: {order.qty}</span>
                  <span className="font-mono font-bold" style={{ color: "#0F172A" }}>
                    {order.value}
                  </span>
                </div>
                <div className="font-body text-xs mt-1" style={{ color: "#64748B" }}>
                  {order.customer}
                </div>
              </div>

              <a
                href={`https://wa.me/918886175855?text=Status%20enquiry%20for%20order%20${order.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
                style={{ minHeight: 44 }}
              >
                <MessageSquare size={15} />
                WhatsApp Slip
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Place new order CTA */}
      <div className="mt-6">
        <Link href="/catalogue" className="btn-primary w-full">
          <Package size={16} />
          Place New Indent
        </Link>
      </div>
    </div>
  );
}

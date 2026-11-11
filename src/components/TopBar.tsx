export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white text-xs py-2">
      <div className="container-app flex items-center justify-center md:justify-between flex-wrap gap-2">
        <div className="text-gray-300">
          📍 <strong>Chevella Depot:</strong> H.No 1-77/6, Ranga Reddy, Telangana 501503
        </div>
        <div className="hidden md:flex items-center gap-4 text-gray-300">
          <a href="tel:8886175855" className="hover:text-white">📞 8886175855</a>
          <a href="https://wa.me/918886175855" target="_blank" rel="noopener noreferrer" className="hover:text-white">💬 WhatsApp</a>
          <a href="mailto:knrenterprises679@gmail.com" className="hover:text-white">✉️ Email</a>
        </div>
      </div>
    </div>
  );
}

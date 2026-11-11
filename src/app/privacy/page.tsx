export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0D2B5B] to-[#1a3a6b] py-12">
        <div className="container-app text-white">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-orange-200">Effective Date: November 2024</p>
        </div>
      </div>

      <div className="container-app py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              KNR Enterprises ("we", "us", "our", or "Company") operates the knrenterprises.vercel.app website (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Site and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Collection and Use</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect personal information only when necessary to provide our services. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Contact Information: Name, email, phone number, business address</li>
              <li>Order Information: Product preferences, quantities, delivery addresses</li>
              <li>Business Details: GST registration, institutional affiliation</li>
              <li>Usage Data: Pages visited, time spent, device information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Data</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              KNR Enterprises uses the collected data for various purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>To provide and maintain our Site and services</li>
              <li>To process and fulfill quotations and orders</li>
              <li>To send transactional and promotional emails</li>
              <li>To improve and optimize our Site and services</li>
              <li>To comply with legal and regulatory requirements</li>
              <li>To communicate with you regarding updates or service changes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our Site and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Security of Data</h2>
            <p className="text-gray-600 leading-relaxed">
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Site may contain links to third-party sites that are not operated by us. This Privacy Policy does not apply to those sites, and we are not responsible for their privacy practices. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <p className="font-semibold text-gray-900">KNR Enterprises</p>
              <p className="text-gray-600">H.No 1-77/6, Near HP Petrol Pump, Chevella 501503, Telangana</p>
              <p className="text-gray-600">📞 8886175855</p>
              <p className="text-gray-600">💬 WhatsApp: <a href="https://wa.me/918886175855" className="text-orange-600 hover:underline">Message Us</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

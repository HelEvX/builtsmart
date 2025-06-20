export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <section className="w-full flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-b from-black to-gray-700">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-blue-900">
          Bouw slimmer met BuiltSmart
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-2xl">
          Dé centrale databank voor technische informatie over bouwmaterialen.
          Snel, betrouwbaar en altijd up-to-date.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/materialen" className="btn-primary">
            Bekijk materialen
          </a>
          <a href="/over" className="btn-secondary">
            Meer over BuiltSmart
          </a>
        </div>
      </section>

      {/* Wat is BuiltSmart */}
      <section className="flex flex-col items-center py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2 text-blue-800">
          Wat is BuiltSmart?
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          BuiltSmart helpt bouwprofessionals en studenten om snel technische
          informatie over bouwmaterialen te vinden. Gebruiksvriendelijk,
          overzichtelijk en altijd actueel.
        </p>
        <ul className="flex flex-wrap gap-6 justify-center">
          <li className="feature-card">🔍 Geavanceerd zoeken en filteren</li>
          <li className="feature-card">
            📄 Gedetailleerde materiaalinformatie
          </li>
          <li className="feature-card">👷 Voor professionals & studenten</li>
          <li className="feature-card">🤝 Gesteund door de sector</li>
        </ul>
      </section>

      {/* Partners */}
      <section className="bg-gray-50 py-8 px-4">
        <h3 className="text-xl font-semibold text-center mb-4 text-blue-800">
          Onze partners
        </h3>
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {/* Vervang deze img src's door echte logo's */}
        </div>
        <p className="text-center text-gray-500 mt-4 text-sm">
          Met steun van onze partners uit de bouwsector en Hogeschool PXL.
        </p>
      </section>

      {/* Voor wie */}
      <section className="flex flex-col sm:flex-row gap-8 justify-center items-stretch py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 flex-1 flex flex-col items-center">
          <h4 className="font-bold text-blue-700 mb-2">Voor professionals</h4>
          <p className="text-gray-600 mb-4 text-center">
            Vind snel technische specificaties en documentatie. Bespaar tijd op
            de werf.
          </p>
          <a href="/registreren" className="btn-secondary">
            Registreer
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex-1 flex flex-col items-center">
          <h4 className="font-bold text-blue-700 mb-2">Voor studenten</h4>
          <p className="text-gray-600 mb-4 text-center">
            Leer werken met digitale tools en bereid je voor op de bouwsector
            van morgen.
          </p>
          <a href="/studenten" className="btn-secondary">
            Meer info
          </a>
        </div>
      </section>

      {/* Missie & Visie */}
      <section className="py-8 px-4 text-center max-w-3xl mx-auto">
        <h5 className="text-lg font-semibold text-blue-800 mb-2">
          Onze missie
        </h5>
        <p className="text-gray-700">
          Wij willen de bouwsector digitaliseren en professionals en studenten
          ondersteunen met betrouwbare, toegankelijke informatie.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 px-4 mt-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} BuiltSmart</span>
          <div className="flex gap-4">
            <a href="/contact" className="hover:underline">
              Contact
            </a>
            <a href="/partners" className="hover:underline">
              Partners
            </a>
            <a href="/privacy" className="hover:underline">
              Privacybeleid
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  const tmsUrl = "https://transport-management-system-gilt.vercel.app";
  const appointmentUrl = "#contact";

  const navItems = [
    ["Products", "#products"],
    ["Portfolio", "#portfolio"],
    ["Demo", "#demo"],
    ["Pricing", "#pricing"],
    ["Contact", "#contact"],
  ];

  const products = [
    { icon: "🚛", title: "Transport Management System", text: "Complete SaaS for school transport, drivers, escorts, students, compliance, GPS and reports.", link: `${tmsUrl}/login` },
    { icon: "📅", title: "Online Appointment System", text: "Booking software for barbers, nail salons, clinics and appointment-based businesses.", link: appointmentUrl },
    { icon: "📱", title: "Driver & Escort Apps", text: "Mobile route apps with attendance, live tracking and secure job completion.", link: `${tmsUrl}/login` },
    { icon: "🤖", title: "AI Business Solutions", text: "AI tools, chatbots and automation to help businesses save time.", link: "#contact" },
    { icon: "🌐", title: "Business Websites", text: "Modern websites for shops, restaurants, instructors and service companies.", link: "#contact" },
  ];

  const portfolio = [
    { icon: "🚛", title: "Transport Management System SaaS", type: "Live SaaS Product", text: "Drivers, escorts, students, schools, compliance, GPS tracking and reporting.", link: `${tmsUrl}/login` },
    { icon: "📅", title: "Online Appointment System", type: "Booking SaaS", text: "Online bookings for salons, clinics, barbers and appointment-based businesses.", link: appointmentUrl },
    { icon: "🍕", title: "Crust & Flame Online Store", type: "Shopify Website", text: "Online ordering website for pizza, burgers, shakes and grill.", link: "#contact" },
    { icon: "🌐", title: "Business Website Portfolio", type: "Website Portfolio", text: "Professional websites for local businesses, restaurants and service companies.", link: "#contact" },
    { icon: "🎓", title: "Driving Instructor Student Diary SaaS", type: "Coming Soon", text: "Student management, lesson diary, payments, progress tracking and instructor tools.", link: "#contact" },
    { icon: "🤖", title: "AI Business Solutions", type: "Coming Soon", text: "AI assistants, automation and business workflow tools.", link: "#contact" },
  ];
const demos = [
  {
    icon: "🚛",
    title: "Transport Management System Demo",
    text: "See how TMS manages drivers, escorts, students, schools, compliance and daily routes.",
    button: "View TMS Demo",
    link: `${tmsUrl}/login`,
  },
];

  const pricing = [
    ["Starter Website", "From £99", "Professional website for a small business."],
    ["Business Software", "From £99/month", "Hosted software, dashboard or booking system."],
    ["Custom SaaS", "Custom Quote", "Full custom platform for your business workflow."],
  ];

  const features = [
    ["☁️", "Cloud Based", "Access your software from anywhere."],
    ["🔐", "Secure & Reliable", "Login, permissions and data protection."],
    ["📱", "Mobile Friendly", "Works on laptop, tablet and mobile."],
    ["🤖", "AI Powered", "Smart automation for better results."],
    ["🇬🇧", "UK Based Support", "Local support when you need it."],
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#0F172A]">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:px-5">
          <a href="#" className="flex min-w-0 items-center">
            <img
              src="/logo.png"
              alt="Coretix Technologies"
              className="h-20 w-auto max-w-[320px] object-contain md:h-24 md:max-w-[420px]"
            />
          </a>

          <nav className="hidden items-center gap-6 text-sm font-bold text-slate-700 lg:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="hover:text-[#2563EB]">
                {label}
              </a>
            ))}
          </nav>

          <a
            href={`${tmsUrl}/login`}
            className="hidden rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-4 text-sm font-black text-white shadow-lg shadow-blue-200 md:block"
          >
            Client Login
          </a>

          <details className="relative lg:hidden">
            <summary className="list-none rounded-2xl bg-[#EEF2FF] px-4 py-3 text-sm font-black text-[#2563EB]">
              Menu
            </summary>
            <div className="absolute right-0 top-14 w-56 rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">
              {navItems.map(([label, href]) => (
                <a key={label} href={href} className="block rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-[#EEF2FF]">
                  {label}
                </a>
              ))}
              <a href={`${tmsUrl}/login`} className="mt-2 block rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-4 py-3 text-center text-sm font-black text-white">
                Client Login
              </a>
            </div>
          </details>
        </div>
      </header>

      <section className="bg-gradient-to-br from-white via-[#F8FAFC] to-[#F3F0FF]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-8 py-10 md:px-10 md:py-14 lg:px-16 lg:grid-cols-2">
          <div>
            <div className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-[11px] font-black uppercase tracking-widest text-[#2563EB] shadow-sm">
              Software • Websites • AI
            </div>

            <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Smart Software for{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                Growing Businesses
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 md:text-lg">
              Coretix Technologies builds SaaS platforms, booking systems, transport systems, business websites and AI automation.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#demo" className="rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-4 text-center font-black text-white shadow-xl shadow-blue-200">
                View Demos
              </a>
              <a href="#portfolio" className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-center font-black shadow-sm">
                View Portfolio
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[430px] lg:max-w-[500px]">
            <div className="rounded-[1.7rem] border border-slate-200 bg-white p-3 shadow-2xl">
              <div className="rounded-[1.3rem] bg-[#0F172A] p-3">
                <div className="rounded-2xl bg-white p-4">
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400">Coretix Dashboard</p>
                      <h3 className="text-lg font-black">Business Overview</h3>
                    </div>
                    <div className="rounded-xl bg-[#EEF2FF] px-3 py-2 text-xs font-black text-[#2563EB]">Live</div>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {["12", "56", "24", "98%"].map((num, i) => (
                      <div key={num} className="rounded-xl bg-[#F8FAFC] p-2">
                        <p className="text-[10px] font-bold text-slate-400">{["Jobs", "Users", "Book", "Uptime"][i]}</p>
                        <p className="mt-1 text-lg font-black text-[#2563EB] md:text-xl">{num}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl bg-gradient-to-r from-[#EEF2FF] to-[#F5F3FF] p-4">
                    <div className="flex h-20 items-end gap-2 md:h-24">
                      {[35, 55, 45, 70, 60, 85, 75].map((h, i) => (
                        <div key={i} className="w-full rounded-t-xl bg-gradient-to-t from-[#2563EB] to-[#7C3AED]" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-2">
                    {["TMS route completed", "New booking received"].map((item) => (
                      <div key={item} className="flex items-center justify-between rounded-xl border border-slate-100 p-3">
                        <span className="text-sm font-bold text-slate-600">{item}</span>
                        <span className="h-3 w-3 rounded-full bg-[#7C3AED]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-4 py-14 md:px-5">
        <p className="text-sm font-black uppercase tracking-widest text-[#7C3AED]">Our Products</p>
        <h2 className="mt-3 text-3xl font-black md:text-4xl">Software products built for real business workflow</h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((item) => (
            <a key={item.title} href={item.link} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-2 hover:border-[#7C3AED] hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF2FF] text-2xl">{item.icon}</div>
              <h3 className="mt-5 text-lg font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              <p className="mt-5 text-sm font-black text-[#2563EB]">Learn More →</p>
            </a>
          ))}
        </div>
      </section>

      <section id="portfolio" className="bg-[#F8FAFC] px-4 py-14 md:px-5">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-widest text-[#2563EB]">Portfolio</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Projects we are building</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.map((item) => (
              <a key={item.title} href={item.link} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                <div className="text-4xl">{item.icon}</div>
                <p className="mt-5 text-xs font-black uppercase tracking-widest text-[#7C3AED]">{item.type}</p>
                <h3 className="mt-3 text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-7xl px-4 py-14 md:px-5">
        <p className="text-sm font-black uppercase tracking-widest text-[#7C3AED]">Demos</p>
        <h2 className="mt-3 text-3xl font-black md:text-4xl">See Coretix software in action</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {demos.map((demo) => (
            <div key={demo.title} className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-[#F5F3FF] p-5 shadow-sm md:p-6">
              <video
  controls
  className="aspect-video w-full rounded-[1.5rem]"
  preload="metadata"
>
  <source
    src="/videos/tms-demo.mp4"
    type="video/mp4"
  />
</video>
                 
              <h3 className="mt-6 text-2xl font-black">{demo.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{demo.text}</p>
              <a href={demo.link} className="mt-6 inline-flex rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3 font-black text-white shadow-lg shadow-blue-200">
                {demo.button}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="bg-[#F8FAFC] px-4 py-14 md:px-5">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-widest text-[#2563EB]">Pricing</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Simple starting prices</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pricing.map(([name, price, text]) => (
              <div key={name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black">{name}</h3>
                <p className="mt-4 text-3xl font-black text-[#7C3AED]">{price}</p>
                <p className="mt-3 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-4 py-14 md:px-5">
        <p className="text-sm font-black uppercase tracking-widest text-[#2563EB]">Why Choose Coretix</p>
        <h2 className="mt-3 text-3xl font-black md:text-4xl">Modern, secure and business-ready</h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map(([icon, title, text]) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-3xl">{icon}</div>
              <h3 className="mt-4 font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-4 py-14 md:px-5">
        <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] bg-[#0F172A] p-5 text-white shadow-2xl md:p-12">
          <div className="grid min-w-0 gap-6 md:grid-cols-2">
            <div className="min-w-0">
              <p className="text-sm font-black uppercase tracking-widest text-blue-300">Contact Coretix</p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">Ready to build your next business system?</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Contact Coretix Technologies for SaaS software, booking systems, websites, AI automation and custom business tools.
              </p>
            </div>

            <div className="grid min-w-0 gap-4">
              <a href="mailto:coretixtech@gmail.com" className="block w-full max-w-full break-words rounded-2xl bg-white/10 px-4 py-5 text-sm font-black transition hover:bg-white/20 sm:text-base">
                coretixtech@gmail.com
              </a>
              <a href="tel:+447949904412" className="block w-full rounded-2xl bg-white/10 px-4 py-5 text-sm font-black transition hover:bg-white/20 sm:text-base">
                +44 7949 904412
              </a>
              <a href={`${tmsUrl}/login`} className="block w-full rounded-2xl bg-white px-4 py-5 text-center text-sm font-black text-[#2563EB] transition hover:bg-blue-50 sm:text-base">
                Open Client Login
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500">
        <p className="font-black text-[#0F172A]">CORETIX Technologies</p>
        <p className="mt-2">© {new Date().getFullYear()} Coretix Technologies. All rights reserved.</p>
        <p className="mt-1">SaaS software, websites, AI automation and business systems.</p>
      </footer>
    </main>
  );
}
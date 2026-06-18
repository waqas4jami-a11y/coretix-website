export default function Home() {
  const tmsUrl = "https://transport-management-system-gilt.vercel.app/";

  const software = [
    {
      title: "Transport Management System",
      tag: "Live",
      text: "Manage school transport, drivers, escorts, students, compliance, live GPS and reports.",
      demo: `${tmsUrl}/login`,
      login: `${tmsUrl}/login`,
    },
    {
      title: "Booking Systems",
      tag: "Available",
      text: "Online booking systems for salons, clinics, trades and appointment-based businesses.",
      demo: "#contact",
      login: "#contact",
    },
    {
      title: "Driving Instructor Diary",
      tag: "Coming Soon",
      text: "Digital diary, learner records, lessons, payments and instructor workflow tools.",
      demo: "#contact",
      login: "#contact",
    },
    {
      title: "Business Websites",
      tag: "Available",
      text: "Modern business websites with contact forms, service pages and professional branding.",
      demo: "#contact",
      login: "#contact",
    },
    {
      title: "AI Assistants",
      tag: "Planned",
      text: "Customer support chatbots, lead capture tools and AI business automation.",
      demo: "#contact",
      login: "#contact",
    },
    {
      title: "Custom Software",
      tag: "Available",
      text: "Dashboards, admin portals and internal systems built around your business process.",
      demo: "#contact",
      login: "#contact",
    },
  ];

  const pricing = [
    ["Starter Website", "From £100", "Professional website for a small business."],
    ["Business Software", "From £99/month", "Hosted software, dashboard or booking system."],
    ["Custom SaaS", "Custom Quote", "Full custom platform for your business workflow."],
  ];

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1F2937]">
      <header className="sticky top-0 z-50 border-b border-[#E7DED2] bg-[#FFFDF8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#163300] text-xl font-black text-[#9FE870] shadow-sm">
              C
            </div>
            <div>
              <p className="text-xl font-black leading-5 text-[#141D38]">
                Coretix
              </p>
              <p className="text-xs font-bold text-[#64748B]">Technologies</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-[#475569] md:flex">
            <a href="#software" className="hover:text-[#163300]">Software</a>
            <a href="#pricing" className="hover:text-[#163300]">Pricing</a>
            <a href="#policies" className="hover:text-[#163300]">Policies</a>
            <a href="#contact" className="hover:text-[#163300]">Contact</a>
          </nav>

          <a
            href={`${tmsUrl}/login`}
            className="rounded-full bg-[#141D38] px-5 py-3 text-sm font-black text-white shadow-sm hover:bg-[#26304f]"
          >
            Client Login
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[230px_1fr] md:py-14">
        <aside className="hidden md:block">
          <div className="sticky top-28 rounded-3xl border border-[#E7DED2] bg-white/80 p-4 shadow-sm">
            <p className="mb-3 px-3 text-xs font-black uppercase tracking-widest text-[#94A3B8]">
              Main Menu
            </p>

            {[
              ["Overview", "#"],
              ["Software", "#software"],
              ["Pricing", "#pricing"],
              ["Policies", "#policies"],
              ["Book Demo", "#contact"],
            ].map(([label, link]) => (
              <a
                key={label}
                href={link}
                className="mb-1 block rounded-2xl px-3 py-3 text-sm font-bold text-[#475569] transition hover:bg-[#EEF7E8] hover:text-[#163300]"
              >
                {label}
              </a>
            ))}
          </div>
        </aside>

        <div>
          <section className="rounded-[28px] border border-[#E7DED2] bg-[#FFFDF8] p-6 shadow-sm md:p-9">
            <div className="inline-flex rounded-full bg-[#EEF7E8] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#163300]">
              Websites • Software • Automation
            </div>

            <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#141D38] md:text-5xl">
              Business software and websites built for growing companies.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#64748B]">
              Coretix Technologies builds modern systems for transport companies,
              booking businesses, service providers and growing teams that need
              reliable software, clean websites and smart automation.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#software"
                className="rounded-2xl bg-[#163300] px-6 py-3 font-black text-[#9FE870] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                View Software
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-[#D6CCBE] bg-white px-6 py-3 font-black text-[#141D38] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Book Demo
              </a>
              <a
                href={`${tmsUrl}/login`}
                className="rounded-2xl bg-[#FCDB32] px-6 py-3 font-black text-[#141D38] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                TMS Login
              </a>
            </div>
          </section>

          <section id="software" className="py-12">
            <div className="mb-7">
              <p className="text-xs font-black uppercase tracking-widest text-[#163300]">
                Software We Sell
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#141D38]">
                Systems built for real business workflow.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {software.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-[#E7DED2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#9FE870] hover:shadow-xl"
                >
                  <span className="rounded-full bg-[#E4E4FF] px-3 py-1 text-xs font-black text-[#141D38]">
                    {item.tag}
                  </span>

                  <h3 className="mt-5 text-xl font-black text-[#141D38]">
                    {item.title}
                  </h3>

                  <p className="mt-3 min-h-[96px] leading-7 text-[#64748B]">
                    {item.text}
                  </p>

                  <div className="mt-5 flex gap-3">
                    <a
                      href={item.demo}
                      className="rounded-xl bg-[#163300] px-4 py-3 text-sm font-black text-[#9FE870] transition group-hover:bg-[#0f2400]"
                    >
                      Demo
                    </a>
                    <a
                      href={item.login}
                      className="rounded-xl border border-[#D6CCBE] px-4 py-3 text-sm font-black text-[#141D38] transition hover:bg-[#FAF7F2]"
                    >
                      Login
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="pricing" className="py-10">
            <div className="mb-7">
              <p className="text-xs font-black uppercase tracking-widest text-[#163300]">
                Pricing
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#141D38]">
                Simple starting prices.
              </h2>
              <p className="mt-3 text-[#64748B]">
                Final pricing depends on setup, features, hosting and support.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {pricing.map(([name, price, text]) => (
                <div
                  key={name}
                  className="rounded-3xl border border-[#E7DED2] bg-[#FFFDF8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="text-xl font-black text-[#141D38]">{name}</h3>
                  <p className="mt-4 text-3xl font-black text-[#163300]">
                    {price}
                  </p>
                  <p className="mt-3 text-[#64748B]">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="policies"
            className="my-10 rounded-[28px] border border-[#E7DED2] bg-white p-6 shadow-sm md:p-8"
          >
            <p className="text-xs font-black uppercase tracking-widest text-[#163300]">
              Policies
            </p>
            <h2 className="mt-2 text-3xl font-black text-[#141D38]">
              Secure, professional and transparent.
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {[
                ["Privacy Policy", "Customer and business data is handled carefully and used only for agreed services."],
                ["Software Trial Terms", "Trial access can be offered before a full subscription or project agreement."],
                ["Support Policy", "Support is provided for agreed plans, bug fixes and business-critical issues."],
                ["Data Security", "Systems use authenticated access, company isolation and controlled permissions."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl bg-[#FAF7F2] p-5 transition hover:bg-[#EEF7E8]"
                >
                  <h3 className="font-black text-[#141D38]">{title}</h3>
                  <p className="mt-2 leading-7 text-[#64748B]">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="py-10">
            <div className="rounded-[28px] bg-[#141D38] p-7 text-white shadow-xl md:p-10">
              <h2 className="text-3xl font-black">
                Ready to build your next business system?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Contact Coretix Technologies for websites, booking systems,
                transport software, dashboards and custom business tools.
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                <a
                  href="mailto:coretixtech@gmail.com"
                  className="rounded-2xl bg-white/10 p-5 font-black transition hover:bg-white/20"
                >
                 coretixtech@gmail.com
                </a>
                <a
                  href="tel:+447949904412"
                  className="rounded-2xl bg-white/10 p-5 font-black transition hover:bg-white/20"
                >
                  +447949904412
                </a>
                <a
                  href={`${tmsUrl}/login`}
                  className="rounded-2xl bg-[#FCDB32] p-5 text-center font-black text-[#141D38] transition hover:bg-[#ffe45c]"
                >
                  Open TMS Login
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      <footer className="border-t border-[#E7DED2] bg-[#FFFDF8] px-5 py-8 text-center text-sm text-[#64748B]">
        <p className="font-bold text-[#141D38]">Coretix Technologies</p>
        <p className="mt-2">
          © {new Date().getFullYear()} Coretix Technologies. All rights reserved.
        </p>
        <p className="mt-1">
          Business software, websites, automation and SaaS solutions.
        </p>
      </footer>
    </main>
  );
}
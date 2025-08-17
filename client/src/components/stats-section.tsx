export default function StatsSection() {
  const stats = [
    { value: "15+", label: "Years in Business" },
    { value: "50+", label: "Countries Served" },
    { value: "1000+", label: "Products Exported" },
    { value: "500+", label: "Satisfied Clients" },
  ];

  return (
    <section className="bg-brand-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-brand-blue mb-2">{stat.value}</div>
              <div className="text-brand-gray">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

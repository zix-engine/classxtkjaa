export default function ClassInfo() {
  const info = [
    {
      icon: "📚",
      title: "Program Studi",
      description: "Teknik Komputer dan Jaringan (TKJ)",
    },
    {
      icon: "🎓",
      title: "Tingkat",
      description: "Kelas X (Sepuluh)",
    },
    {
      icon: "📅",
      title: "Tahun Ajaran",
      description: "2025 / 2026",
    },
    {
      icon: "👥",
      title: "Jumlah Siswa",
      description: "31 Peserta Didik",
    },
  ]

  return (
    <section id="info" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Informasi Kelas</h2>
          <p className="text-muted-foreground">Identitas dan profil CLASS QUESTERS X TKJ A</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {info.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/10 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Class Statistics */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-primary mb-6">Statistik Kelas</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">31</div>
              <p className="text-sm text-muted-foreground">Siswa Aktif</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">1</div>
              <p className="text-sm text-muted-foreground">Wali Kelas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">2025</div>
              <p className="text-sm text-muted-foreground">Tahun Masuk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary/5 to-accent/10 py-16 sm:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Main Logo */}
          <div className="inline-flex">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white shadow-lg">
              <span className="text-4xl font-bold">TKJ</span>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary">CLASS QUESTERS X TKJ A</h1>
            <p className="text-lg sm:text-xl text-primary font-semibold">SMK MIFTAHUL ULUM JATI DATAR</p>
            <p className="text-base text-muted-foreground">Teknik Komputer dan Jaringan | Tahun Ajaran 2025/2026</p>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-primary/20">
              <p className="text-sm text-muted-foreground">Total Siswa</p>
              <p className="text-2xl font-bold text-primary">31</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

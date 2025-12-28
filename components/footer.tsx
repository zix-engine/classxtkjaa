export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* School Info */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">SMK MIFTAHUL ULUM</h3>
            <p className="text-sm opacity-90">Jati Datar</p>
            <p className="text-sm opacity-90">Program Studi: Teknik Komputer dan Jaringan</p>
          </div>

          {/* Class Info */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">CLASS QUESTERS X TKJ A</h3>
            <ul className="text-sm space-y-1 opacity-90">
              <li>Tahun Ajaran: 2025/2026</li>
              <li>Jumlah Siswa: 31</li>
              <li>Status: Aktif</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">Informasi</h3>
            <ul className="text-sm space-y-1 opacity-90">
              <li>Hubungi Wali Kelas untuk informasi lebih lanjut</li>
              <li className="text-xs opacity-75 mt-2">Website Kelas Class Questers</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8"></div>

        {/* Bottom */}
        <div className="text-center text-sm opacity-90">
          <p>&copy; {currentYear} CLASS QUESTERS X TKJ A - SMK MIFTAHUL ULUM JATI DATAR. Semua hak cipta dilindungi.</p>
          <p className="mt-2 text-xs opacity-75">Dibuat dengan ❤️ untuk dokumentasi kelas</p>
        </div>
      </div>
    </footer>
  )
}

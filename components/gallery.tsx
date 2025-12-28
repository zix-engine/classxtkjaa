"use client"

import { useState } from "react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      title: "Keseruan di Kelas",
      query: "happy students in computer lab classroom",
    },
    {
      id: 2,
      title: "Praktik Jaringan",
      query: "networking lab students working on computers",
    },
    {
      id: 3,
      title: "Diskusi Kelompok",
      query: "students group discussion learning together",
    },
    {
      id: 4,
      title: "Presentasi Materi",
      query: "students presentation school classroom",
    },
    {
      id: 5,
      title: "Lab Komputer",
      query: "computer lab networking equipment IT students",
    },
    {
      id: 6,
      title: "Kolaborasi Belajar",
      query: "students collaboration learning teamwork",
    },
  ]

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Galeri Kelas</h2>
          <p className="text-muted-foreground">Momen-momen berharga CLASS QUESTERS X TKJ A</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer aspect-video bg-muted"
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={`/.jpg?height=400&width=600&query=${encodeURIComponent(image.query)}`}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="text-center bg-white p-6 rounded-xl border border-primary/20">
          <p className="text-muted-foreground">
            <span className="text-2xl font-bold text-primary">{galleryImages.length}</span> foto dokumentasi kegiatan
            kelas tersimpan
          </p>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-2xl w-full max-h-[80vh]">
              <button
                className="absolute -top-10 right-0 text-white hover:text-accent transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={`/.jpg?height=600&width=800&query=${encodeURIComponent(galleryImages.find((img) => img.id === selectedImage)?.query || "")}`}
                alt="Gallery"
                className="w-full h-auto rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <p className="text-white text-center mt-4">
                {galleryImages.find((img) => img.id === selectedImage)?.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

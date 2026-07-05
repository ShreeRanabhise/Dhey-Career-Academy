import { Badge } from "@/components/ui/badge"

export default function GalleryPage() {
  const images = [
    { src: "/placeholder-1.jpg", alt: "Physical Training at Ground", category: "Training" },
    { src: "/placeholder-2.jpg", alt: "Classroom Lecture", category: "Campus" },
    { src: "/placeholder-3.jpg", alt: "Annual Sports Event", category: "Events" },
    { src: "/placeholder-4.jpg", alt: "Felicitation Ceremony", category: "Selections" },
    { src: "/placeholder-5.jpg", alt: "Library Session", category: "Campus" },
    { src: "/placeholder-6.jpg", alt: "Obstacle Course", category: "Training" },
  ]

  return (
    <div className="flex flex-col w-full min-h-screen pt-12 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 pt-16 text-center max-w-3xl mb-12">
        <Badge variant="accent" className="mb-4">Visual Tour</Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          Photo Gallery
        </h1>
        <p className="text-lg text-muted-foreground">
          Take a glimpse into the life of a DHEY Career Academy student.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Campus", "Training", "Events", "Selections"].map((cat, i) => (
            <button key={i} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-primary text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200 shadow-sm hover:shadow-xl transition-shadow cursor-pointer">
              {/* Note: In a real app, replace with next/image */}
              <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
                <span className="text-slate-400 font-medium">Image: {img.alt}</span>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <Badge variant="accent" className="mb-2 bg-primary text-white border-none">{img.category}</Badge>
                  <p className="text-white font-medium">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

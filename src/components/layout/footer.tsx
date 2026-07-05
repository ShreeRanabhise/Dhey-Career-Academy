import Link from "next/link"
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-white border-t pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary text-white p-2 rounded-xl">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                DHEY <span className="text-primary font-extrabold">Academy</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mt-2">
              Empowering students to achieve their dreams of serving the nation. We provide top-tier coaching and physical training for government exams.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FaFacebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FaTwitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-red-600 transition-colors">
                <FaYoutube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Explore</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="text-muted-foreground hover:text-primary text-sm transition-colors">Our Courses</Link></li>
              <li><Link href="/physical-training" className="text-muted-foreground hover:text-primary text-sm transition-colors">Physical Training</Link></li>
              <li><Link href="/results" className="text-muted-foreground hover:text-primary text-sm transition-colors">Success Stories</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary text-sm transition-colors">Photo Gallery</Link></li>
              <li><Link href="/notice-board" className="text-muted-foreground hover:text-primary text-sm transition-colors">Notice Board</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Top Courses</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/courses/ssc" className="text-muted-foreground hover:text-primary text-sm transition-colors">SSC Preparation</Link></li>
              <li><Link href="/courses/police" className="text-muted-foreground hover:text-primary text-sm transition-colors">Police Bharti</Link></li>
              <li><Link href="/courses/army" className="text-muted-foreground hover:text-primary text-sm transition-colors">Army / NDA</Link></li>
              <li><Link href="/courses/mpsc" className="text-muted-foreground hover:text-primary text-sm transition-colors">MPSC Exams</Link></li>
              <li><Link href="/courses/railway" className="text-muted-foreground hover:text-primary text-sm transition-colors">Railway Exams</Link></li>
              <li><Link href="/courses/banking" className="text-muted-foreground hover:text-primary text-sm transition-colors">Banking Exams</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm leading-relaxed">
                  123 Academy Road, Education Hub<br />
                  Pune, Maharashtra 411001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">info@dheyacademy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} DHEY Career Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

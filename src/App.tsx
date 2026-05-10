import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sun, Battery, Zap, ShieldCheck, ArrowRight, CheckCircle2, 
  Phone, Mail, MapPin, Menu, X, Award, Lightbulb, Users, Factory 
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-blue-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <Sun className="h-6 w-6 text-blue-900" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-blue-900 tracking-tight uppercase">
                  Sri Madhav <span className="text-yellow-500">SolarTech</span>
                </h1>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest hidden sm:block">Empowering Sustainable Futures</p>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium hover:text-yellow-600 transition-colors">Services</a>
              <a href="#products" className="text-sm font-medium hover:text-yellow-600 transition-colors">Products</a>
              <a href="#projects" className="text-sm font-medium hover:text-yellow-600 transition-colors">Case Studies</a>
              <a href="#contact" className="text-sm font-medium hover:text-yellow-600 transition-colors">Contact</a>
              <a href="#contact" className="bg-blue-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-800 transition-all shadow-md shadow-blue-900/10">
                Get a Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-blue-900 focus:outline-none">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-yellow-600 hover:bg-slate-50 rounded-md">Services</a>
              <a href="#products" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-yellow-600 hover:bg-slate-50 rounded-md">Products</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-yellow-600 hover:bg-slate-50 rounded-md">Case Studies</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-yellow-600 hover:bg-slate-50 rounded-md">Get a Quote</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden text-white bg-slate-900">
        <div className="absolute inset-0">
          <img 
            src="https://i.ibb.co/cS7H3z6r/Chat-GPT-Image-May-7-2026-12-31-00-PM.png" 
            alt="Solar Panels on Roof" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 sm:bg-gradient-to-r sm:from-black/60 sm:via-black/40 sm:to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400 text-slate-900 text-xs font-bold rounded-full mb-6 uppercase tracking-wider shadow-sm">
                <Award className="h-4 w-4" /> Govt. Subsidy Available
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] drop-shadow-sm text-white">
                Say no to <span className="text-yellow-400">Electricity Bills</span><br className="hidden sm:block" />
                Smart Invest in Solar & <span className="text-green-400">Start Earning Today.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-2xl leading-relaxed drop-shadow-sm font-medium">
                Authorized WAAREE partners delivering premium ON-Grid and OFF-Grid solar solutions. Get expert guidance on government subsidies for your home or business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-yellow-400/20">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#products" className="inline-flex justify-center items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 rounded-xl font-bold transition-all">
                  View Our Projects
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="py-12 bg-white border-b border-slate-200 shadow-sm relative z-10 -mt-8 rounded-t-3xl mx-4 sm:mx-6 lg:mx-8 lg:-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-black text-blue-900 mb-2">WAAREE</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Authorized Partner</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-black text-blue-900 mb-2">30+</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Major Projects completed</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-black text-blue-900 mb-2">25<span className="text-xl">yr</span></span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Panel Warranty</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-black text-blue-900 mb-2">Subsidy</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Govt. Assistance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-900 mb-4">Complete Solar Solutions</h2>
            <p className="text-lg text-slate-600">
              From residential rooftops to commercial installations, we provide end-to-end services to make your transition to solar seamless.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-blue-600" />,
                title: "ON-Grid Solutions",
                desc: "Stay connected to the utility grid. Generate your own power and send excess back to the grid, saving drastically on monthly electricity bills."
              },
              {
                icon: <Battery className="h-8 w-8 text-blue-600" />,
                title: "OFF-Grid Solutions",
                desc: "Complete energy independence with high-capacity battery storage. Ideal for remote locations or areas with frequent power outages."
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
                title: "Subsidy Assistance",
                desc: "As PM Surya Yojane members, we handle all paperwork and applications to ensure you receive the maximum government subsidy available."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
              >
                <div className="w-16 h-16 bg-yellow-50 border border-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-blue-900">Premium WAAREE Equipment</h2>
              <p className="text-lg text-slate-600">
                We strictly use top-tier equipment from India's leading solar manufacturer, ensuring maximum efficiency and reliability for decades.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400 bg-yellow-50">
              <Factory className="h-5 w-5 text-yellow-500" />
              <span className="font-bold tracking-wide text-blue-900 text-xs uppercase">WAAREE Partner</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col group"
            >
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop" alt="BiFacial Solar Panel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-yellow-400 text-blue-900 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider">Top Seller</div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-blue-600 mb-4 font-bold uppercase text-[10px] tracking-widest">Premium Panels</div>
                <h3 className="text-2xl font-bold mb-2 text-slate-800">590W BiFacial Panels</h3>
                <div className="flex items-center gap-2 mb-6">
                  <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-[11px] font-bold">25 YR WARRANTY</div>
                  <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-[11px] font-bold">DUAL ENERGY</div>
                </div>
                <p className="text-slate-600 mb-8 flex-1 text-sm leading-relaxed">
                  Latest BiFacial technology captures sunlight from both sides, generating up to 30% more power than traditional mono panels. Highly durable design to withstand extreme weather.
                </p>
                <ul className="space-y-3">
                  {['Generates power from both sides', 'Higher efficiency rating', 'Better performance in low light'].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col group"
            >
              <div className="h-64 overflow-hidden relative bg-blue-900 flex items-center justify-center">
                <img src="https://i.ibb.co/RGYzWnCx/Chat-GPT-Image-May-10-2026-11-13-15-AM.png" alt="Solar Inverter" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-blue-900 text-white font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider border border-white/20">Essential</div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-blue-600 mb-4 font-bold uppercase text-[10px] tracking-widest">Power Systems</div>
                <h3 className="text-2xl font-bold mb-2 text-slate-800">WAAREE Inverters</h3>
                <div className="flex items-center gap-2 mb-6">
                  <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-[11px] font-bold">6 YR WARRANTY</div>
                  <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-[11px] font-bold">ON/OFF GRID</div>
                </div>
                <p className="text-slate-600 mb-8 flex-1 text-sm leading-relaxed">
                  The brain of your solar system. Highly efficient WAAREE inverters perfectly convert DC power to usable AC power for your home, with smart monitoring capabilities.
                </p>
                <ul className="space-y-3">
                  {['Smart app monitoring', 'Over 98% conversion efficiency', 'Robust build quality'].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies / Projects */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-900 mb-4">Featured Projects</h2>
              <p className="text-lg text-slate-600">
                We've successfully completed over 30 major installations across the region. Here are a few examples of our recent work.
              </p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors uppercase text-sm tracking-wider">
              Start Your Project <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: "https://i.ibb.co/h1XrRS6h/Solar-Panel-For-Home.jpg",
                title: "5kW Residential ON-Grid",
                type: "Residential"
              },
              {
                img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2079&auto=format&fit=crop",
                title: "15kW Commercial Installation",
                type: "Commercial"
              },
              {
                img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop",
                title: "10kW Hybrid System w/ Battery",
                type: "Residential"
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-72 rounded-2xl overflow-hidden mb-4 border border-slate-100 shadow-sm">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-blue-900/80 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <span className="text-yellow-400 text-[10px] font-bold uppercase tracking-widest mb-1 block">{project.type}</span>
                      <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-yellow-50 border-t border-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              
              <div className="bg-blue-900 p-10 lg:p-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Sun className="h-64 w-64 text-yellow-400" />
                </div>
                <h2 className="text-3xl font-extrabold mb-4 relative z-10">Let's power your home.</h2>
                <p className="text-blue-100 mb-10 text-lg relative z-10 leading-relaxed">
                  Contact us today for a free site visit and consultation. We'll explain the PM Surya Yojane scheme and help you get maximum subsidies.
                </p>

                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center shrink-0 border border-blue-700">
                      <Phone className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-blue-300 tracking-widest mb-1">Call us directly</p>
                      <p className="text-lg font-bold text-white">+91 93413 08850</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center shrink-0 border border-blue-700">
                      <Mail className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-blue-300 tracking-widest mb-1">Email us</p>
                      <p className="text-lg font-bold text-white">srimadhavsolartech2025@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center shrink-0 border border-blue-700">
                      <MapPin className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-blue-300 tracking-widest mb-1">Visit our office</p>
                      <p className="text-lg font-bold text-white">C/o Ashisri Arcade, 1st Floor, Opp. Water Booster, Moka Road, Gandhi Nagar, Ballari - 583102. Land Mark: Davanagere Benne Dose Hotel Branch-1</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="p-10 lg:p-16">
                <h3 className="text-2xl font-black text-blue-900 mb-6 uppercase tracking-tight">Request a Free Quote</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all font-medium" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all font-medium" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all font-medium" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">Requirement Type</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all font-medium">
                      <option>Residential (Home)</option>
                      <option>Commercial (Business)</option>
                      <option>Industrial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all resize-none font-medium" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-4 rounded-xl transition-all shadow-md shadow-yellow-400/20 uppercase tracking-widest text-sm">
                    Send Inquiry
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white px-8 py-8 border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8 text-sm">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Sun className="h-6 w-6 text-yellow-400" />
                <span className="font-black text-xl tracking-tight text-white uppercase">
                  Sri Madhav <span className="text-yellow-400">SolarTech</span>
                </span>
              </div>
              <p className="max-w-xs leading-relaxed mb-4 text-blue-200 text-[13px] font-medium">
                Dedicated to providing high-quality, sustainable energy solutions using world-class WAAREE equipment.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-[10px] text-yellow-400 font-bold uppercase tracking-widest">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                PM Surya Yojane Member
              </div>
            </div>
            
            <div>
              <h4 className="text-blue-300 font-bold mb-4 uppercase tracking-widest text-[10px]">Quick Links</h4>
              <ul className="space-y-3 font-medium text-[13px]">
                <li><a href="#services" className="hover:text-yellow-400 transition-colors">Services</a></li>
                <li><a href="#products" className="hover:text-yellow-400 transition-colors">Products</a></li>
                <li><a href="#projects" className="hover:text-yellow-400 transition-colors">Case Studies</a></li>
                <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-300 font-bold mb-4 uppercase tracking-widest text-[10px]">Services</h4>
              <ul className="space-y-3 font-medium text-[13px]">
                <li>ON-Grid Solar</li>
                <li>OFF-Grid Solar</li>
                <li>Subsidy Guidance</li>
                <li>Panel Maintenance</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-blue-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold text-blue-300 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Sri Madhav SolarTech. All rights reserved.</p>
            <p className="text-yellow-400">Authorized Partner of WAAREE Energies Ltd.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


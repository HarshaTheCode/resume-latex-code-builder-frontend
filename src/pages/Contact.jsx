import React, { useState } from 'react';
import emailjs from '@emailjs/browser'
import Navcomponent from '../components/Navcomponent';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    emailjs.send("service_9fcjxm6","template_nkqyl5s", formData,"ZucJ9BLElzJXZkfL_").then(
    ()=>{
      console.log('mail was send sucssfully');
      alert("The email was send to the developer") 
    },(err)=>{
      console.log("somethig went wrong please try again",err);
      alert("somethig went wrong please try again") 
    }
  )

    console.log('Form submitted:', formData);
  };

  
  return (
    <div className="min-h-screen bg-[#FDFBF6] text-[#1a1a1a] selection:bg-[#B8860B]/20 selection:text-[#1a1a1a] relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#B8860B]/5 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#B8860B]/5 rounded-full blur-[100px] animate-blob [animation-delay:2000ms]" />
      </div>

      <div className="relative z-10">
        <Navcomponent />

        {/* Main Content Container */}
        <div className="pt-28 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">

          {/* Header Section */}
          <div className="max-w-2xl mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#1a1a1a]">
              Get in 
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#B8860B]">
                &nbsp;touch
            </span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
              Have a question about the AI Resume Builder? Interested in partnering?
              Or just want to say hi? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Contact Information (Left Column) */}
            <div className="space-y-12 animate-fade-in-up [animation-delay:200ms]">

              {/* Contact Details */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#1a1a1a]/5 rounded-lg text-[#B8860B]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:harshapc0109@gmail.com" className="text-[#4A4A4A] hover:text-[#B8860B] transition-colors">
                      harshapc0109@gmail.com
                    </a>
                    <p className="text-sm text-[#4A4A4A]/60 mt-1">Support is available 24/7.</p>
                  </div>
                </div>

                
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-bold text-lg mb-4">Follow us</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/HarshaTheCode" target="_blank" className="p-3 bg-[#1a1a1a] text-white rounded-full hover:bg-[#B8860B] transition-all duration-300 hover:-translate-y-1">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/sai-eleshwaram-full-stack-web-developer/" target="_blank" className="p-3  bg-[#1a1a1a] text-white rounded-full hover:bg-[#B8860B] transition-all duration-300 hover:-translate-y-1">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/harshapc0109" target="_blank" className="p-3 bg-[#1a1a1a] text-white rounded-full hover:bg-[#B8860B] transition-all duration-300 hover:-translate-y-1">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Contact Form (Right Column) */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-[#1a1a1a]/5 animate-fade-in-up [animation-delay:400ms]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[#1a1a1a]">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FDFBF6] border border-[#1a1a1a]/10 rounded-lg focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all duration-300 placeholder:text-[#1a1a1a]/30"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#1a1a1a]">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FDFBF6] border border-[#1a1a1a]/10 rounded-lg focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all duration-300 placeholder:text-[#1a1a1a]/30"
                      placeholder="yourname@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-[#1a1a1a]">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FDFBF6] border border-[#1a1a1a]/10 rounded-lg focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all duration-300 placeholder:text-[#1a1a1a]/30"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-[#1a1a1a]">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FDFBF6] border border-[#1a1a1a]/10 rounded-lg focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all duration-300 resize-none placeholder:text-[#1a1a1a]/30"
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1a1a1a] text-white rounded-lg font-medium text-lg hover:bg-[#B8860B] active:scale-[0.98] transition-all duration-300 flex justify-center items-center gap-2 group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

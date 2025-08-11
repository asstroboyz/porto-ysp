import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact <span className="text-blue-500">Us</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a design opportunity? I'd love to hear from you. Reach out and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-600/20 p-2 rounded-lg mr-4">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Email</h4>
                    <a href="mailto:contact@myusufmaulana.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                      muhammadyusufm529@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-600/20 p-2 rounded-lg mr-4">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Phone</h4>
                    <a href="tel:+62895413985210" className="text-gray-400 hover:text-blue-400 transition-colors">
                      +62895413985210
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-600/20 p-2 rounded-lg mr-4">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Location</h4>
                    <p className="text-gray-400">
                      Pekalongan City, Central Java, Indonesia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-600/20 p-2 rounded-lg mr-4">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Working Hours</h4>
                    <p className="text-gray-400">
                      Monday - Friday, 9AM - 6PM PST
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl border border-blue-700/30">
              <h3 className="text-xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-400 mb-6">
                Follow me on social media for design insights, project updates, and more.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Check my profiles <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 p-6 md:p-8 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
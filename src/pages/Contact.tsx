import React, { useState } from 'react';
import Transition from '../components/Transition';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1000);
  };

  return (
    <Transition>
      <div className="min-h-screen pt-24 pb-20">
        {/* Header */}
        <section className="bg-honey-50 py-12">
          <div className="container px-6 md:px-10 max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-honey-900 mb-4">Contact Us</h1>
            <p className="text-honey-700/80 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you! Use the form below to get in touch with our team.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16">
          <div className="container px-6 md:px-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-honey-50 rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-serif font-bold text-honey-900 mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center text-honey-600 mt-1">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-honey-900 mb-1">Our Location</h3>
                      <p className="text-honey-700/80">
                      7/271 3rd Floor, Jivan Jyot Building, <br />
                      Gathaman Gate Rd, opp. Govt Technical High School,<br />
                      Palanpur, 385001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center text-honey-600 mt-1">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-honey-900 mb-1">Phone</h3>
                      <a 
                        href="tel:+919510653527" 
                        className="text-honey-700/80 hover:text-honey-900 transition-colors"
                      >
                        +91 95106 53527
                      </a>
                      <p className="text-honey-700/80">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center text-honey-600 mt-1">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-honey-900 mb-1">Email</h3>
                      <a 
                        href="mailto:kalpraj9510@gmail.com" 
                        className="text-honey-700/80 hover:text-honey-900 transition-colors"
                      >
                        kalpraj9510@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-medium text-honey-900 mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-white border border-honey-200 flex items-center justify-center text-honey-600 hover:bg-honey-100 transition-colors"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-white border border-honey-200 flex items-center justify-center text-honey-600 hover:bg-honey-100 transition-colors"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-white border border-honey-200 flex items-center justify-center text-honey-600 hover:bg-honey-100 transition-colors"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-sm border border-honey-100 p-8 md:p-10">
                <h2 className="text-2xl font-serif font-bold text-honey-900 mb-6">Send Us a Message</h2>
                
                {formStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    There was an error sending your message. Please try again.
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-honey-800 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-honey-200 rounded-lg focus:ring-2 focus:ring-honey-500 focus:border-transparent transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-honey-800 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-honey-200 rounded-lg focus:ring-2 focus:ring-honey-500 focus:border-transparent transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-honey-800 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-honey-200 rounded-lg focus:ring-2 focus:ring-honey-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Order Status">Order Status</option>
                      <option value="Wholesale Inquiry">Wholesale Inquiry</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-honey-800 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-honey-200 rounded-lg focus:ring-2 focus:ring-honey-500 focus:border-transparent transition-all duration-200"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-honey-500 hover:bg-honey-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-honey-50">
          <div className="container px-6 md:px-10 max-w-7xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-honey-900 mb-6 text-center">Visit Our Store</h2>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-honey-100 h-96">
              <iframe
                title="Pure Honey Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.1320264528213!2d72.4361687!3d24.167102099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ce9018f5e555b%3A0x252e97b3bf54f402!2sKalpRaj%20Store!5e0!3m2!1sen!2sin!4v1743059327087!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </Transition>
  );
};

export default Contact;

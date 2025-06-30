import React, { useRef } from "react";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    const form = useRef();


     const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gq8nm1m', 'template_y1nlcbu', form.current, {
        publicKey: 'Y_RA0rQcfnVQ4RE61',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="bg-gray-900 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 backdrop-blur-md bg-white/10 border border-gray-600 rounded-3xl shadow-2xl p-1">

        {/* Contact Info */}
        <div className="bg-[#362b30] shadow-xl p-10 rounded-2xl text-white flex flex-col justify-center">
  <h2 className="text-4xl font-bold mb-8">Contact Info</h2>
  <ul className="space-y-5 text-lg">
    <li className="flex items-center gap-3">
      <User className="w-5 h-5" />
      Faysal Ahmed
    </li>
    <li className="flex items-center gap-3">
      <FaWhatsapp  className="w-5 h-5" />
      +88 01779161032 (Phone / WhatsApp)
    </li>
    <li className="flex items-center gap-3">
      <Mail className="w-5 h-5" />
      fr.abir.ahmed.faysal@gmail.com
    </li>
    <li className="flex items-center gap-3">
      <MapPin className="w-5 h-5" />
      9440 Satkhira, Dhaka, Bangladesh
    </li>
  </ul>
</div>

        {/* Contact Form */}
        <div className="p-10 text-gray-200">
          <h2 className="text-3xl font-semibold mb-6">Send a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-white placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                rows={6}
                name="message"
                required
                placeholder="Your Message"
                className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-white placeholder-gray-400"
              ></textarea>
            </div>
            <button
              type="submit"
              
              className="w-full bg-teal-500 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

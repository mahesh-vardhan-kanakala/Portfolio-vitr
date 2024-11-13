import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle, Phone } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      await fetch('https://getform.io/f/bmddkjwa', {
        method: 'POST',
        body: formData,
      });
      setIsSubmitted(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">Get in Touch</h2>
          <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 text-white bg-blue-600 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <a href="mailto:maheshvardhank@gmail.com" className="text-blue-600 hover:text-blue-700">
                      maheshvardhank@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 text-white bg-blue-600 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700">
                      +91 7287082713
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 text-white bg-blue-600 rounded-lg">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600">Social Media</p>
                    <div className="flex space-x-4">
                      <a href="https://www.linkedin.com/in/mahesh-vardhan-kanakala/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                        LinkedIn
                      </a>
                      <a href="https://github.com/mahesh-vardhan-kanakala" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form 
  onSubmit={handleSubmit} 
  className="p-6 bg-white shadow-md rounded-xl"
  action="https://getform.io/f/bmddkjwa"
  method="POST"
>
  <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
  
  <div className="space-y-6">
    <div>
      <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    <div>
      <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    <div>
      <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
        Phone
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{10}"
        placeholder="1234567890"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    <div>
      <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={4}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id="subscribe"
        name="subscribe"
        value="yes"
        className="text-blue-600 rounded focus:ring-blue-500"
      />
      <input type="hidden" name="subscribe" value="no" />
      <label htmlFor="subscribe" className="text-sm text-gray-600">
        Keep me updated about future opportunities
      </label>
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 ${
        isSubmitting 
          ? 'bg-gray-400 cursor-not-allowed' 
          : isSubmitted
          ? 'bg-green-600 hover:bg-green-700'
          : 'bg-blue-600 hover:bg-blue-700'
      } text-white`}
    >
      {isSubmitting ? (
        <div className="w-5 h-5 border-2 border-white rounded-full animate-spin border-t-transparent" />
      ) : isSubmitted ? (
        <>
          <CheckCircle className="w-5 h-5" />
          <span>Message Sent!</span>
        </>
      ) : (
        <>
          <Send className="w-5 h-5" />
          <span>Send Message</span>
        </>
      )}
    </button>

    {isSubmitted && (
      <p className="text-sm text-center text-green-600">
        Thanks for reaching out! I'll get back to you soon.
      </p>
    )}
  </div>
</form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import FAQItem from './FAQItem';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Do you provide any scripts with your templates?',
      answer: 'Our templates do not include any additional scripts, Newsletter subscriptions, search fields, forums, image galleries (in HTML versions of Flash products are inactive). Basic scripts can be easily added at www.zemez.io if you are not sure that the element you’re interested in is active please contact our Support.',
    },
    {
      question: 'In what formats are your templates available?',
      answer: 'Website templates are available in Photoshop and HTML formats. Fonts are included with the Photoshop file.',
    },
    {
      question: 'What payment methods can I use to pay for my order?',
      answer: 'We accept Visa, MasterCard, and American Express credit and debit cards for your convenience. Some other payment methods are also available.',
    },
    {
      question: 'What are the advantages of purchasing a website template?',
      answer: 'The major advantage is price: You get a high quality design for just $20-$70. You don’t have to hire a web designer or web design studio. Second advantage is time frame: It usually takes 5-15 days for a good designer to produce a web page of such quality regardless of its purpose.',
    },
    {
      question: 'What am I allowed to do with the templates?',
      answer: 'You may build a website using the template in any way you like. You may not resell or redistribute templates (like we do). Claim intellectual or exclusive ownership to any of our products.',
    },
    {
      question: 'What do I receive when I order a template from Zemez?',
      answer: 'After you complete the payment via our secure form you will receive the instructions for downloading the product. The source files in the downloaded package may vary based on the type of the product you have purchased.',
    },
  ];

  return (
    <div className="bg-white py-16 px-4 ">
        <div className=''>
      <h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold">
          View All Questions
        </button>
      </div>
      </div>
    </div>
  );
};

export default FAQSection;

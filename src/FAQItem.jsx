


import React from 'react'

function FAQItem({ question, answer }) {
  return (
    <div className="mb-8">
    <h3 className="text-lg font-semibold mb-2">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
  )
}

export default FAQItem


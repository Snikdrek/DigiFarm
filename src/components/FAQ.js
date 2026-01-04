import React, { useState } from 'react';

const initialFaq = [
  {
    question: 'How often should I irrigate wheat in winter?',
    answer: 'Aim for light, infrequent watering when soil moisture falls below 60%. Check moisture first; avoid standing water in colder weeks.',
  },
  {
    question: 'Best time to spray for pests?',
    answer: 'Early morning or late evening on clear, low-wind days. Our weather window card highlights the next 72 hours.',
  },
  {
    question: 'How do I log my equipment maintenance?',
    answer: 'Use the dashboard tasks section to add maintenance logs and reminders. You can attach notes and costs for each entry.',
  },
];

function FAQ() {
  const [faqs, setFaqs] = useState(initialFaq);
  const [form, setForm] = useState({ question: '', details: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.question.trim() || !form.details.trim()) {
      setStatus('Please add a question and a short description.');
      return;
    }
    setFaqs([{ question: form.question.trim(), answer: form.details.trim() }, ...faqs]);
    setForm({ question: '', details: '' });
    setStatus('Posted. An expert will reply soon.');
  };

  return (
    <div className="page-container">
      <h1 className="page-title">❓ FAQ & Ask an Expert</h1>
      <p className="page-subtitle">Quick answers for farmers, with space to ask your own questions.</p>

      <div className="faq-layout">
        <div className="faq-list">
          {faqs.map((item, idx) => (
            <div key={idx} className="faq-card">
              <div className="faq-q">
                <span>Q.</span>
                <h3>{item.question}</h3>
              </div>
              <div className="faq-a">
                <span>A.</span>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-form-card">
          <h3>Ask a new question</h3>
          <p style={{ color: '#558b2f', marginBottom: '1rem' }}>Experts respond within 24 hours.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your question</label>
              <input
                value={form.question}
                onChange={(e) => setForm({ ...form, question: e.target.value })}
                placeholder="E.g., When should I start irrigation after rain?"
              />
            </div>
            <div className="form-group">
              <label>Details</label>
              <textarea
                rows="4"
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                placeholder="Share crop type, region, and what you have tried."
              />
            </div>
            {status ? <p style={{ color: '#2e7d32', marginBottom: '0.75rem' }}>{status}</p> : null}
            <button className="btn" type="submit">Post question</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

// src/pages/form.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function AdminRequestForm() {
  const [formData, setFormData] = useState({
    requesterName: '',
    requestType: '',
    jobTitle: '',
    instructions: ''
  });
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    // Listen for login/logout events
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => setSession(session)
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('requests').insert([formData]);
    if (error) {
      alert('Error submitting request: ' + error.message);
    } else {
      alert('Request submitted successfully!');
      setFormData({ requesterName: '', requestType: '', jobTitle: '', instructions: '' });
    }
  };

  if (!session) {
    return <p>Please login to submit requests.</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Submit Admin Request</h1>
      <form onSubmit={handleSubmit}>
        {/* same inputs as before */}
      </form>
    </div>
  );
}

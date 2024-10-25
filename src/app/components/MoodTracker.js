import { useState } from 'react';

const MoodTracker = () => {
  const [mood, setMood] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to save mood to the database
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        placeholder="How do you feel today?"
      />
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Add notes..."
      ></textarea>
      <button type="submit">Log Mood</button>
    </form>
  );
};

export default MoodTracker;

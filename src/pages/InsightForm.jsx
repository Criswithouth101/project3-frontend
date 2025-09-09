import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createInsight } from "../api/insights";

export default function InsightForm() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [impact, setImpact] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createInsight({ title, summary, impact });
      navigate("/");
    } catch (err) {
      alert("Error creating insight");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Insight</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input
        placeholder="Impact"
        value={impact}
        onChange={(e) => setImpact(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInsight } from "../api/insights";

export default function InsightDetail() {
  const { id } = useParams();
  const [insight, setInsight] = useState(null);

  useEffect(() => {
    getInsight(id).then((res) => setInsight(res.data));
  }, [id]);

  if (!insight) return <p>Loading...</p>;

  return (
    <div>
      <h2>{insight.title}</h2>
      <p>{insight.summary}</p>
      <p><strong>Impact:</strong> {insight.impact}</p>
      <p><strong>Category:</strong> {insight.category}</p>
      <p><strong>Source:</strong> {insight.source}</p>
    </div>
  );
}

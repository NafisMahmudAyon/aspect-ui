import { BackToTop } from "@/app/src";

export default function DefaultBackToTopExample() {
  return (
    <div style={{ height: '2000px', padding: '2rem' }} className="text-white">
      <h1>Default Back To Top Example</h1>
      <p>Scroll down to see the BackToTop button appear in the bottom right corner.</p>
      <p style={{ marginTop: '1800px' }}>You have reached the bottom of the page!</p>
      <BackToTop />
    </div>
  );
}
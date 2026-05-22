import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    let rafId: number;
    let targetX = -100, targetY = -100;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovered(!!(el.closest("a,button,[role=button]")));
    };

    let rx = -100, ry = -100;
    const animate = () => {
      rx += (targetX - rx) * 0.12;
      ry += (targetY - ry) * 0.12;
      setRing({ x: rx, y: ry });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <style>{`@media (min-width: 769px) { * { cursor: none !important; } }`}</style>
      <div
        style={{
          position: "fixed",
          left: pos.x - 4,
          top: pos.y - 4,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#fff",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "transform 0.1s",
        }}
      />
      <div
        style={{
          position: "fixed",
          left: ring.x - (hovered ? 20 : 14),
          top: ring.y - (hovered ? 20 : 14),
          width: hovered ? 40 : 28,
          height: hovered ? 40 : 28,
          borderRadius: "50%",
          border: "2px solid #E87722",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.2s, height 0.2s, left 0.05s, top 0.05s",
          opacity: 0.7,
        }}
      />
    </>
  );
}

import { useRef } from "react";

interface TechMarqueeProps {
    tools: { name: string; icon: string }[];
}

export default function TechMarquee({ tools }: TechMarqueeProps) {
    const doubled = [...tools, ...tools]; // duplicate for seamless loop

    return (
        <div className="overflow-hidden w-full mt-6">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-3 font-semibold">
                Tools & Technologies
            </p>
            <div className="flex w-max animate-marquee gap-6">
                {doubled.map((tool, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white/70 text-sm whitespace-nowrap hover:bg-white/10 transition-colors"
                    >
                        <img src={tool.icon} alt={tool.name} className="w-4 h-4 object-contain" />
                        <span>{tool.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

'use client'

import { useState } from "react";
import { Check } from "lucide-react";

const colors = [
    { id: 1, value: "#fff" },
    { id: 2, value: "#CBBBAD" },
    { id: 3, value: "#FF80AB" },
];

export default function ColorPicker() {
    const [selected, setSelected] = useState<number | null>(null);

    function getContrastColor(hex: string) {
        const r = parseInt(hex.substr(1, 2), 16);
        const g = parseInt(hex.substr(3, 2), 16);
        const b = parseInt(hex.substr(5, 2), 16);

        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        return luminance > 0.5 ? "#ffffff" : "#000000";
    }

    return (
        <div className="flex gap-2 lg:gap-4">
            {colors.map((color) => (
                <button
                    key={color.id}
                    onClick={() => setSelected(color.id)}
                    className={`
            relative w-7.5 h-7.5 lg:w-10 lg:h-10 rounded-full border lg:border-2 transition-all
            ${selected === color.id ? "border-black scale-110" : ""}
          `}
                    style={{ backgroundColor: color.value }}
                >
                    {selected === color.id && (
                        <span className="absolute inset-0 flex items-center justify-center">
                            <Check className="w-4.5 h-4.5" style={{ color: getContrastColor(color.value) }} />
                        </span>
                    )}
                </button>
            ))}
        </div>
    );
}

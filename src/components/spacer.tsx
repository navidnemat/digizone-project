'use client'

import { useEffect, useState } from "react";

export default function Spacer() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
            const handleScroll = () => setScrolled(window.scrollY > 10);
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

    return (
        <div className={`w-full h-[150px] pt-5 lg:pt-10 ${scrolled ? 'block' : 'hidden'}`}></div>
    )
}
"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LuSearch } from "react-icons/lu";

const SUGGESTIONS = [
    ""
]

export default function SearchBox() {
    const [query, setQuery] = useState("")
    const [open, setOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const results = useMemo(() => {
        if (!query.trim()) return []
        return SUGGESTIONS.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        )
    }, [query])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div className="relative w-60 md:w-72" ref={containerRef}>
            <input
                type="text"
                placeholder="جستجو کالا مورد نظر..."
                value={query}
                onFocus={() => setOpen(true)}
                onChange={(e) => {
                    setQuery(e.target.value)
                    setOpen(true)
                }}
                className="py-1.5 px-3 placeholder:text-[#BFD0C8] outline-none w-full rounded-full border border-[#BFD0C8]"
            />
            <button className="absolute left-2 top-1/2 -translate-y-1/2 transition-all duration-200 hover:opacity-60">
                <LuSearch className="text-[#BFD0C8]" size={24}/>
            </button>
            <AnimatePresence>
                {open && query.trim() !== "" && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 right-0 bg-white border border-[#BFD0C8] rounded-2xl mt-1 shadow z-10 h-60 overflow-y-auto"
                    >
                        {results.length > 0 ? (
                            results.map((item) => (
                                <div
                                    key={item}
                                    onClick={() => {
                                        setQuery(item)
                                        setOpen(false)
                                    }}
                                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {item}
                                </div>
                            ))
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex flex-col items-center">
                                    <img src="/images/sad-emoji.svg" alt="emoji" width={32} height={32}/>
                                    <span className="text-[#BFD0C8]">کالایی یافت نشد</span>
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
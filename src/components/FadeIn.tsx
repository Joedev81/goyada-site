"use client";

import { useEffect, useRef, useState } from "react";

type FadeInProps = {
    children: React.ReactNode;
    className?: string;
};

export default function FadeIn({
    children,
    className = "",
}: FadeInProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.unobserve(entry.target);
            }
        },
    {
        threshold: 0.15,
    }
);

observer.observe(element);

return () => observer.disconnect();
    }, []);

    return (
        <div
        ref={ref}
        className={`transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }
        ${className}
        `}
    >
        {children}
    </div>
    );
}
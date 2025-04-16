"use client";


interface Props {
    children: React.ReactNode;
}

export default function HomeWrapper({ children }: Props) {
    return (
        <section className="py-8">
            {children}
        </section>
    );
}

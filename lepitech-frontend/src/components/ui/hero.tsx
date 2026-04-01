import { useState } from "react"
import { Button } from "@/components/ui/button"


export function Hero() {
  const scrollToSearch = () => {
  const element = document.getElementById("search-section");
  
  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

  return (
    <section id="home" className="flex flex-col items-center justify-center text-center py-24 px-6 ">
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[hsl(var(--primary))]">
        Willkommen bei LepiTech
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Wir entwickeln moderne, nutzerfreundliche Softwarelösungen für dein Unternehmen.
      </p>

      <div className="mt-8 flex gap-4">
        <Button 
          size="lg" 
          className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--accent))]"
          onClick={scrollToSearch}
        >
          Jetzt starten
        </Button>
      </div>
    </section>
  )
}
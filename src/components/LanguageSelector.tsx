import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

type Language = "en" | "hi" | "ta" | "te";

const languages = {
  en: { name: "English", flag: "🇬🇧" },
  hi: { name: "हिंदी", flag: "🇮🇳" },
  ta: { name: "தமிழ்", flag: "🇮🇳" },
  te: { name: "తెలుగు", flag: "🇮🇳" },
};

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState<Language>("en");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" data-testid="button-language-selector" className="rounded-full">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([code, { name, flag }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setCurrentLang(code as Language)}
            data-testid={`menu-item-lang-${code}`}
            className={currentLang === code ? "bg-accent" : ""}
          >
            <span className="mr-2">{flag}</span>
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

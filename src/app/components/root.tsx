import { Outlet } from "react-router";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Navigation } from "@/app/components/navigation";
import { Toaster } from "@/app/components/ui/sonner";

export function Root() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Outlet />
        </main>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

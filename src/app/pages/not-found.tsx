import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}

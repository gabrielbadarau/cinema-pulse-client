import { Button } from '@/components/ui/button';
import { FileQuestion } from 'lucide-react';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="h-[calc(100vh-8rem)] flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center">
        <FileQuestion className="h-20 w-20 text-muted-foreground" />
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          404 - Page Not Found
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. The
          page might have been moved, deleted, or never existed.
        </p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

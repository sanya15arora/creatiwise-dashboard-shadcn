import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background px-4 text-center">
            <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100">404</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link
                to="/dashboard/articles/generate"
                className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-2 hover:bg-blue-400"
                style={{ color: 'white' }}
            >
                Go back to Dashboard
            </Link>

        </div>
    );
}

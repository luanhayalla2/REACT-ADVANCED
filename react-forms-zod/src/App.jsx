import UseForm from "./components/UseForm";
import { ErrorBoundary } from "./components/ErroBoundary";

export default function App() {
    return (
        <ErrorBoundary>
            <UseForm />
        </ErrorBoundary>
    );
}

// components/Loading.tsx
import { SpinnerKaotika } from "./SpinnerKaotika";

const Loading: React.FC = () => {
    console.log("Rendering spinner...");
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
            <SpinnerKaotika size="lg" color="white" />
        </div>
    );
};

export default Loading;
import { Spinner } from "@nextui-org/react";

const Loading: React.FC = () => {
    console.log("rendering spinner");
    
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <Spinner size="lg" color="white" />
        </div>
    );
};

export default Loading;
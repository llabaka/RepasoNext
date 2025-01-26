interface SpinnerKaotikaProps {
    size: 'sm' | 'md' | 'lg';
    color: string;
    'data-testid'?: string;
}

export const SpinnerKaotika = ({ size, color, 'data-testid': testId }: SpinnerKaotikaProps) => {
    const sizeClasses = {
        sm: 'w-5 h-5 border-2 text-small',
        md: 'w-8 h-8 border-3 text-medium',
        lg: 'w-36 h-36 border-3 text-large',
    };

    return (
        <div
            className={`${sizeClasses[size]} border-t-2 border-t-${color} border-solid rounded-full animate-spin`}
            data-testid={testId}
        />
    );
};
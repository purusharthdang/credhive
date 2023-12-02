export interface ModalTypes {
    isOpen: boolean;
    onClose: () => void;
    onApply?: () => void;
    onCancel?: () => void;
    children: React.ReactNode;
}
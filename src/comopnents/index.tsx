import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode
    style?: 'hard' | 'soft' | 'transparent';
    color?: 'sky' | 'rose' | 'stone';
    className?: string;
    onClick?: () => void;
}

export interface NewTodoItemProps {
    value: string;
    errorMsg?: string;
    onCancel?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCreate?: () => void;
}


export interface TodoItemProps {
    key: React.Key | null | undefined;
    children?: ReactNode;
    done?: boolean;
    onDone: () => void;
    onRemove: () => void;
}

export interface ModalProps {
    openModalButton: ReactNode;
    children: ReactNode;
    onConfirm: () => void;
}

export interface MessageProps {
    text: ReactNode;
    type: 'info' | 'error';
}
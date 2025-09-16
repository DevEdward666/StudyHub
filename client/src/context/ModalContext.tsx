// src/context/ModalContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { IonModal } from "@ionic/react";
import "./ModalContext.css";
interface ModalContextProps {
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useGlobalModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useGlobalModal must be used within ModalProvider");
  return ctx;
};

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const showModal = (content: ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}

      {isOpen && (
        <div className="glass-modal">
          <div className="modal-content">{modalContent}</div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

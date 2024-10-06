import { useState } from "react";
import { ModalProps } from "..";
import Button from "../Button";

export default function Modal({
  openModalButton,
  children,
  onConfirm,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    onConfirm();
    closeModal();
  }

  return (
    <div>
      <div onClick={openModal}>{openModalButton}</div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeModal}
          />

          <dialog
            id="my_modal_1"
            className="modal z-50 fixed inset-0 flex items-center justify-center rounded-lg"
            open
          >
            <div className="modal-box">
              <div className="p-12">{children}</div>
              <div className="modal-action bg-stone-50 px-4 py-4 flex rounded-b-lg">
                <Button color="stone" style="transparent" className="flex-grow" onClick={closeModal}>
                  Cancel
                </Button>
                <Button color="rose" className="flex-grow" onClick={handleConfirm}>
                  Confirm
                </Button>
              </div>
            </div>
          </dialog>
        </>
      )}
    </div>
  );
}

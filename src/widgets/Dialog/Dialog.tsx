import { h, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

interface Props {
  title?: string;
  message?: string;
  confirmText?: string;
  closeOnConfirm?: boolean;
  onConfirm?: () => void;
}

const Dialog: FunctionalComponent<Props> = ({
  title = 'Подтверждение',
  message = 'Поставьте галочку, чтобы продолжить.',
  confirmText = 'Продолжить',
  closeOnConfirm = true,
  onConfirm = () => {},
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleCheckChange = () => {
    setIsChecked(prev => !prev);
  };

  const handleClose = () => {
    if (isChecked || !closeOnConfirm) {
      setIsOpen(false);
      onConfirm();
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-25"> {/* Оставляем фоновый оверлей */}
      <div className="w-full max-w-md p-6 my-20 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{message}</p>
        <label className="block mt-4 text-sm">
          <input type="checkbox" checked={isChecked} onChange={handleCheckChange} />
          Я согласен с условиями
        </label>
        <button
          className={`inline-flex justify-center w-full px-4 py-2 mt-4 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed ${!isChecked ? 'disabled' : ''}`}
          onClick={handleClose}
        >
          {confirmText}
        </button>
      </div>
    </div>
  ) : null;
};

export default Dialog;
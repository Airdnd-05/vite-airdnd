/* eslint-disable react/prop-types */
import { useState } from 'react';
import LoginModal from './Modal/LoginModal.jsx';
import Portal from './Modal/Portal.jsx';
import clsx from 'clsx';

function HeaderProfileItem({ section, chosenItem, setChosenItem }) {
  const [isOpen, setIsOpen] = useState(false);

  function showModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function handleClick() {
    if (section.key === 'signup') {
      showModal();
    }
    setChosenItem(section.key);
  }

  return (
    <>
      <li
        onClick={handleClick}
        className={clsx('text-sm py-3 px-4 cursor-pointer hover:bg-gray-200 hover:rounded-lg transition-transform', {
          'font-bold': chosenItem === section.key,
        })}>
        {section.title}
      </li>
      {isOpen && (
        <Portal>
          <LoginModal onClick={closeModal} />
        </Portal>
      )}
    </>
  );
}

export default HeaderProfileItem;

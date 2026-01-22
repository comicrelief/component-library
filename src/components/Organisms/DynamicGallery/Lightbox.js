import { Dialog } from '@base-ui/react/dialog';
import React from 'react';

/**
 * lightbox context:
 * - selectedCard: the card that is currently selected
 * - setSelectedCard:  set the selected card
 * - nextCard/previousCard: navigate to the next/previous card
 */
export const LightboxContext = React.createContext(null);

/**
 * the Lightbox component is a modal that displays a single image,
 * along with UI to navigate through the gallery
 * .
 * accessibility features like tabbing and focus management are currently implemented here;
 * a better long-term approach would be to use an established modal/dialog library,
 * but to avoid friction with the build process we've gone custom for now
 * .
 * TODO: hide the main window scroll bar in a nicer way, see:
 * https://www.npmjs.com/package/react-remove-scroll
 */
const Lightbox = () => {
  const styles = {
    Button: '',
    Backdrop: '',
    Popup: '',
    Title: '',
    Description: '',
    Actions: ''
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger className={styles.Button}>View notifications</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className={styles.Backdrop} />
        <Dialog.Popup className={styles.Popup}>
          <Dialog.Title className={styles.Title}>Notifications</Dialog.Title>
          <Dialog.Description className={styles.Description}>
            You are all caught up. Good job!
          </Dialog.Description>
          <div className={styles.Actions}>
            <Dialog.Close className={styles.Button}>Close</Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Lightbox;

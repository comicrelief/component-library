import { useEffect } from 'react';

export default function useClickOutside(
  amountRef,
  setAmountDonate,
  givingType,
  singleGiving,
  errorMsg,
  regularGiving
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (!errorMsg) {
        return;
      }

      if (amountRef.current && !amountRef.current.contains(event.target)) {
        const givingData = givingType === 'single' ? singleGiving : regularGiving;

        // Check the 2nd moneybuy exists before using it;
        // 'philantrophy' carts have been set up to use a single moneybuy.
        // See ENG-1685 for more details
        const thisAmount = givingData.moneybuys[1]
          ? givingData.moneybuys[1].value
          : givingData.moneybuys[0].value;

        setAmountDonate(parseFloat(thisAmount));
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [amountRef, errorMsg]);
}

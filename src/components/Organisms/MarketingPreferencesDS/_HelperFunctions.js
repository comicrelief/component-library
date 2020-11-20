const associatedFields = {
  permissionSMS: ['mobile'],
  permissionPhone: ['phone'],
  permissionEmail: ['email'],
  permissionPost: ['address1', 'address2', 'address3', 'town', 'postcode', 'country']
};

const returnAssociatedFields = (checkBoxName, fieldPrefix) => {
  const genericKey = checkBoxName.replace(fieldPrefix, '');
  return associatedFields[genericKey];
};

export default returnAssociatedFields;

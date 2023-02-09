const AssociatedFields = {
  mp_permissionSMS: {
    fieldNames: ['mp_mobile'],
    label: 'Text'
  },
  mp_permissionPhone: {
    fieldNames: ['mp_phone'],
    label: 'Phone'
  },
  mp_permissionEmail: {
    fieldNames: ['mp_email'],
    label: 'Email'
  },
  mp_permissionPost: {
    fieldNames: ['mp_address1', 'mp_address2', 'mp_address3', 'mp_town', 'mp_postcode', 'mp_country'],
    label: 'Post'
  }
};

export default AssociatedFields;

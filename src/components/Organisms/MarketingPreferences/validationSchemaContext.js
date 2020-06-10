import React from 'react';

const ValidationSchema = React.createContext({});

export const ValidationSchemaProvider = ValidationSchema.Provider;
export const ValidationSchemaConsumer = ValidationSchema.Consumer;

export default ValidationSchema;

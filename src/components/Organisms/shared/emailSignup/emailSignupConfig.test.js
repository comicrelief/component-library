import { buildEsuValidationSchema, ESU_FIELDS } from './emailSignupConfig';

describe('buildEsuValidationSchema', () => {
  const schema = buildEsuValidationSchema({});

  it('accepts first and last names with accented Latin letters', async () => {
    await expect(
      schema.validate({
        [ESU_FIELDS.FIRST_NAME]: 'André',
        [ESU_FIELDS.LAST_NAME]: 'François',
        [ESU_FIELDS.EMAIL]: 'andre.francois@example.com'
      })
    ).resolves.toEqual({
      [ESU_FIELDS.FIRST_NAME]: 'André',
      [ESU_FIELDS.LAST_NAME]: 'François',
      [ESU_FIELDS.EMAIL]: 'andre.francois@example.com'
    });
  });
});

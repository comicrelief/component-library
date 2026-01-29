import PropTypes from 'prop-types';

// ignoring the linting rule here so we can name the export for clarity;
// this shared type is used in the DynamicGallery and DynamicGalleryColumn components,
// so lives here to avoid circular dependencies
// eslint-disable-next-line import/prefer-default-export
export const GalleryNodeType = PropTypes.shape({
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
  body: PropTypes.node,
  caption: PropTypes.node,
  centredText: PropTypes.bool
});

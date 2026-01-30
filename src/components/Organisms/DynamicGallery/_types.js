import PropTypes from 'prop-types';

// ignoring the linting rule here so we can name the export for clarity;
// this shared type is used in the DynamicGallery and DynamicGalleryColumn components,
// so lives here to avoid circular dependencies
// eslint-disable-next-line import/prefer-default-export
export const GalleryNodeType = PropTypes.shape({
  image: PropTypes.string.isRequired,
  gridBody: PropTypes.node,
  gridCaption: PropTypes.node,
  lightboxBody: PropTypes.node,
  lightboxCaption: PropTypes.node
});

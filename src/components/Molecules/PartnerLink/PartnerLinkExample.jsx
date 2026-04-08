import React from 'react';
import PartnerLink from './PartnerLink';
import Picture from '../../Atoms/Picture/Picture';
import { defaultData } from '../../../styleguide/data/data';

export default function PartnerLinkExample() {
  return (
    <PartnerLink link="https://www.comicrelief.com">
      <Picture alt="test Image" imageLow={defaultData.imageLow} images={defaultData.images} />
    </PartnerLink>
  );
}

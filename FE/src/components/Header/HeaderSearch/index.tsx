import React from 'react';

// styles
import { Search } from '@mui/icons-material';
import Wrapper from './styles';

function HeaderSearch(): React.ReactElement {
  return (
    <Wrapper>
      <input type="text" className="search-input" />
      <Search className="search-icon" />
    </Wrapper>
  );
};

export default HeaderSearch;
import React, { useRef } from 'react';
import { useHistory } from 'react-router';

// styles
import { Search } from '@mui/icons-material';
import Wrapper from './styles';

function HeaderSearch(): React.ReactElement {
  const searchRef: any = useRef();
  const history = useHistory();

  const handleSearchInput = (e: any) => {
    if (!searchRef.current) return
    
    if (e.key === 'Enter') {
      const searchValue = searchRef?.current.value.trim().toLowerCase();
      if (!searchValue) {
        alert('검색어를 입력해주세요.');
        searchRef.current.value = '';
      } else {
        const location = { 
          pathname: 'search',
          state: { searchValue, },
        };
        history.push(location);
      };
    };
  };

  return (
    <Wrapper>
      <input 
        ref={searchRef}
        type="text"
        className="search-input"
        onKeyPress={handleSearchInput}
      />
      <Search className="search-icon" />
    </Wrapper>
  );
};

export default HeaderSearch;
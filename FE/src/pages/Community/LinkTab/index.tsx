import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

interface Props {
  tabsIdx: number;
  setTabsIdx: React.Dispatch<React.SetStateAction<number>>;
}

const Wrapper = styled.div`
  cursor: pointer;
`

function LinkTab({ tabsIdx, setTabsIdx }: Props): React.ReactElement {
  const [title, setTitle] = useState('전체');
  
  const handleTabsIdx = (event: React.MouseEvent<HTMLDivElement>) => {
    setTabsIdx(tabsIdx)
  }

  useEffect(() => {
    if (tabsIdx === 0) {
      setTitle('전체');
    } else if (tabsIdx === 1) {
      setTitle('모집중');
    } else {
      setTitle('완료');
    }
  }, [tabsIdx]);

  return (
    <Wrapper onClick={handleTabsIdx}>
      <p>{title}</p>
    </Wrapper>
  );
};

export default LinkTab;

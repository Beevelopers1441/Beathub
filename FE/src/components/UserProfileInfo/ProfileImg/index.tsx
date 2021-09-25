import React from 'react';

// component
// import { ProfileImage } from 'components/atoms';

// styles
import Wrapper from './styles';

function Instruments(): React.ReactElement {
  return(
    <Wrapper>
      {/* <div>
        <ProfileImage url={"https://cdnweb01.wikitree.co.kr/webdata/editor/202004/07/img_20200407162305_1f42c686.webp"} />
      </div> */}

      <img className="profile-img" src="https://cdnweb01.wikitree.co.kr/webdata/editor/202004/07/img_20200407162305_1f42c686.webp" alt="" />
    </Wrapper>
  )
}

export default Instruments;
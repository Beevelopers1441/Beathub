import React, { useState } from 'react';

import Modal from './modal';
import Wrapper from './styles';

interface Props {
  bandId: number;
};


function ApplyBtn({ bandId }: Props): React.ReactElement {
  const [showModal, setShowModal] = useState<boolean>(false);
  
  const handleModal = () => {
    setShowModal(true);
  }

  return(
    <Wrapper>
      <Modal
        bandId={bandId}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className="divider"></div>
      <button className="apply-btn" onClick={handleModal}>
        <div className="apply-letter">밴드 가입 신청하기</div>
      </button>
    </Wrapper>
  )
}

export default ApplyBtn;
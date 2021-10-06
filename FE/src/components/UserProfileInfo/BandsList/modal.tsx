import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import InstPicker from './InstPicker';

// apis
import { createBandAPI } from 'lib/api/band'; 
import { getUserProfile } from 'lib/api/userProfile';

// styles
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button, Input } from '@mui/material';

const Wrapper = styled.div`
  & .radio-container {
    display: flex;
    justify-content: space-evenly;
  }
`;

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: '-110vh',
    opacity: 0,
  },
  visible: {
    y: '200px',
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

interface IInst {
  ability: string;
  instrument: string;
}

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ showModal, setShowModal }: Props): React.ReactElement => {
  const [instList, setInstList] = useState<string[]>([]);
  const [currInst, setCurrInst] = useState<string | null>(null);
  
  const nameRef: any = useRef();
  const history = useHistory();
  const { userInfo } = useSelector((state: any) => state.user);

  // init user 악기 리스트
  useEffect(() => {
    if (!userInfo) return

    getUserProfile(userInfo.id)
      .then(res => {
        const _insts = res.data.instruments;
        const newInstList = _insts.map((inst: IInst) => inst.instrument);
        setInstList(newInstList);
      });
  }, [userInfo])

  // 밴드 생성
  const createBand = () => {
    const name = nameRef.current.value;
    if (!name || !currInst) {
      alert('밴드명과 악기를 입력해주세요.')
    } else {
      createBandAPI(name, currInst)
        .then(res => {
          const _bandId = res.data.band.id;
          history.push({ pathname: `/group-profile/${_bandId}`});
        });
    };
  };

  // 모달 닫기
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Wrapper>
      { showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <p className="title">밴드를 생성해주세요!</p>
            <div className="input-container">
              <Input
                inputRef={nameRef} 
                placeholder="밴드 이름을 설정해주세요."
              />
            </div>
            <div className="picker-container">
              <InstPicker width={'175px'} instList={instList} setCurrInst={setCurrInst} />
            </div>
            <div className="button-container">
              <Button
                variant="outlined"
                color="primary"
                onClick={createBand}
                >
                생성하기
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={closeModal}
                >
                취소
              </Button>
            </div>
            <p className="sub-description">밴드를 만들면 밴드 이미지와 소개글을 작성해 꾸며보세요!</p>
          </motion.div>
        </motion.div>
      )}
    </Wrapper>
  );
};

export default Modal;
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// apis
import { bandApply } from 'lib/api/band';
import { getUserProfile } from 'lib/api/userProfile';

// styles
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';

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
  bandId: number;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ bandId, showModal, setShowModal }: Props): React.ReactElement => {
  const [instList, setInstList] = useState<string[]>([]);
  const [currInst, setCurrInst] = useState<string>('');

  const { userInfo } = useSelector((state: any) => state.user);

  // constructor
  useEffect(() => {
    setCurrInst('');
  }, [showModal])

  // init user's instrument list
  useEffect(() => {
    const userId = userInfo.id;
    getUserProfile(userId)
      .then(res => {
        const _newInstList = res.data.instruments;
        const newInstList = _newInstList.map(((inst: IInst) => inst.instrument));
        setInstList(newInstList);
      });
    return (() => {
      setCurrInst('');
    })
    
  }, [userInfo.id]);
  
  // select instrument and apply
  const handleRadioInput = (event: any): void => {
    const value = event.target.value;
    setCurrInst(value);
  };
  const handleApply = () => {
    console.log('!!!!')
    console.log(currInst)
    if (currInst) {
      bandApply(bandId, currInst)
        .then((res) => {
          console.log(res);
          console.log('신청 성공');
        })
      setShowModal(false);
    } else {
      alert('악기를 선택해주세요.');
    };
  };
  

  return (
    <Wrapper>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <p>밴드 가입에 신청할</p>
            <p>악기를 선택해주세요!</p>
            <div className="instrument-list">
              <RadioGroup row aria-label="instruments" name="row-radio-buttons-group" className="radio-container">
                { instList.map((inst, idx) => {
                  return (
                    <FormControlLabel
                      onChange={handleRadioInput} 
                      value={inst}
                      control={<Radio />}
                      label={inst}
                      key={idx}
                    />
                  )
                })}
              </RadioGroup>
            </div>
            <div className="button-container">
              <Button
                onClick={handleApply}
                variant="outlined"
                color="primary"
              >
                신청하기
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setShowModal(false)}
              >
                취소
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </Wrapper>
  );
};

export default Modal;
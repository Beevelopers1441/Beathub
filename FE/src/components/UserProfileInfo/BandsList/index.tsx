import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// components
import Modal from './modal';
import BandsItem from './BandsItem';

// types
import { ProfileInfo } from 'types';

// styles
import { Button } from '@mui/material';
import Wrapper from './styles';

interface IProps {
  profileInfo: ProfileInfo;
}

// 밴드 목록을 Props로 받는다
const BandsList: React.FC<IProps> = ({ profileInfo }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const { userInfo } = useSelector((state: any) => state.user);

  // Prop으로 받은 밴드 목록의 각각의 밴드들을 BandsItem으로 넘겨주는 함수
  const renderList = (): JSX.Element[] | JSX.Element => {
    if (profileInfo.participatingBands.length > 0) {
      return profileInfo.participatingBands.map((band) => {
        return(
            <BandsItem key={band.id} band={band}></BandsItem>
        )
      })
    }
    return <div className="secondary-letter">아직 활동하는 밴드가 없습니다.</div>
  }

  // 밴드 생성 버튼 클릭 시 모달
  const handleModal = () => {
    setShowModal(true);
  };

  // 위의 함수를 리턴한다(각각의 밴드를 아이템으로 보여준다)
  return (
    <Wrapper>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className="bands-divider"></div>
      <div className="bands-letter-create-container">
        <div className="bands-letter">활동하는 밴드</div>
        { profileInfo.id === userInfo.id &&
          <Button
            size="small"
            variant="contained"
            className="bands-creater"
            onClick={handleModal}
          >
            밴드생성
          </Button>
        }
      </div>
      <div className="bands-subwrapper">
        {renderList()}
      </div>
    </Wrapper>
  )
}

export default BandsList;
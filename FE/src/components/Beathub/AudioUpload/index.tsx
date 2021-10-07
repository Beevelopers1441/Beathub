import React, {useState} from 'react';

// styles
import Wrapper from './styles';
import { FormControl, Select, MenuItem } from '@mui/material';

// apis
import { s3Auth, s3Send } from 'lib/api/beathub/s3Upload';
import { createBucketAudio } from 'lib/api/beathub';

// redux
import { useSelector } from 'react-redux';

interface Props {
  bucketId: number
}


function AudioUpload({ bucketId }: Props): React.ReactElement {

  s3Auth()
  
  // 유저정보 리덕스에서 가져오기
  const userid = useSelector((state: any) => state.user.userInfo.id);
  
  // 파일 미리보기
  const [fileUrl, setFileUrl] = useState<string>('')
  const [file, setFile] = useState({});

  // 값이 바뀌었으면 true
  const [changed, setChanged] = useState(false)
  // 업로드 완료했으면 true
  const [uploaded, setUploaded] = useState(false)

  // 오디오
  const [audio, setAudio] = useState<HTMLAudioElement>()

  // 업로드한 파일의 정보
  const [audioInfo, setaudioInfo] = useState({
    userInfo: {
      imageUrl: "image",
      nickname: "name",
    },
    title: '',
    instrument: ''
  })

  // 카테고리 입력
  const handleChangeInstName = (e: any) => {
    setaudioInfo({
      ...audioInfo,
      instrument: e.target.value as string
    })
  }
  
  // 타이틀 입력
  const onChangeAudioTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setaudioInfo({
      ...audioInfo,
      title: e.target.value
    })
  }
  
  // 업로드 파일이 바뀌면 실행되는 로직
  function processAudio(e: React.ChangeEvent<HTMLInputElement>): void {
    // 업로드 후 파일명을 이름으로 설정
    if (e.target.files) {
      if (e.target.files[0] !== undefined){
        setaudioInfo({
          ...audioInfo,
          title: e.target.files[0].name
        })
  
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = (e) => {
          setFile(file);
        }
        reader.readAsDataURL(file);
        setChanged(true)
      }
      }
  }

  // s3에 파일 전송 후 url을 받아옴
  async function handleFileInput() {
    s3Send(userid, file).then(function (res: string) {
      const payload = {
        filename: audioInfo.title,
        filepath: res,
        instrumentType: audioInfo.instrument
      }

      // 버킷에 음악 저장
      createBucketAudio(bucketId, payload).then(res => console.log(res))
      
      setFileUrl(res)
    });
  }
  
  // 저장 로직
  const onClickSave = () => {
    // 파일 input에 변경사항이 있으면
    if (audioInfo.title && audioInfo.title !== "" && audioInfo.instrument && audioInfo.instrument !== "" ){
      if (changed === true) {
        // s3에 파일 전송 후 url을 받아옴
        handleFileInput()
        // url로 audio객체 생성
        const uploadedAudio = new Audio(fileUrl)
        setAudio(uploadedAudio)
        // 업로드 후 url 받아와 audio객체까지 만들었으니 true
        setUploaded(true)
        setChanged(false)
        setaudioInfo({
          ...audioInfo,
          title: "",
          instrument: ""
        })
      }
    } else {
      alert("정보를 입력하세요")
    }
  }
  
  const onClickCancel = () => {
    setChanged(false)
    setaudioInfo({
      ...audioInfo,
      title: "",
      instrument: ""
    })
  }
  
  return (
    <Wrapper>
      <div className="content">음악 파일 업로드</div>

      {/* 파일 업로드 */}
      <input className="input-file" type="file" name="afile" id="input-file" onChange={processAudio} />
      <div></div>

      {/* 타이틀 */}
      <input
        className="post-input"
        placeholder="타이틀을 입력하세요"
        onFocus={(e) => {
          e.target.placeholder = '';
        }}
        onBlur={(e) => {
          e.target.placeholder = '타이틀을 입력하세요';
        }}
        type="text"
        // value가 null이 되지 않게 처리
        value={audioInfo.title}
        name="title"
        onChange={onChangeAudioTitle}
      />

      {/* 악기카테고리 선택 */}
      <div className="form-container">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }} style={{ margin: 0 }}>
          <Select
            value={audioInfo.instrument}
            label="instrument"
            inputProps={{ 'aria-label': 'Without label' }}
            onChange={handleChangeInstName}
          > 
            <MenuItem value=""><em>악기선택</em></MenuItem>
            <MenuItem value="보컬" >보컬</MenuItem>
            <MenuItem value="키보드">키보드</MenuItem>
            <MenuItem value="일렉기타">일렉기타</MenuItem>
            <MenuItem value="어쿠스틱기타">어쿠스틱기타</MenuItem>
            <MenuItem value="베이스">베이스</MenuItem>
            <MenuItem value="드럼">드럼</MenuItem>
            <MenuItem value="기타(etc)">기타(etc)</MenuItem>
          </Select>
        </FormControl>
      </div>

      {changed
        ?
        <div className="btn-container">
          <button className="save-btn" onClick={onClickSave}>저장</button>
          <button className="cancel-btn" onClick={onClickCancel}>취소</button>
        </div>
        : <div></div>
      }
    </Wrapper>
  );
}

export default AudioUpload;

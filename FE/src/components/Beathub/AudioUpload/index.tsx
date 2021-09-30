import React, {useState, useEffect, cloneElement} from 'react';

// component

// types

// styles

// apis
import { s3Auth, s3Send } from 'lib/api/beathub/s3Upload'

// libraries
import AWS from 'aws-sdk';
import axios from 'axios';

// redux
import { useDispatch, useSelector } from 'react-redux';

interface Props {
}

function AudioUpload(): React.ReactElement {
  // S3 기본 정보
  var albumBucketName = "beathub-bucket";
  var bucketRegion = "ap-northeast-2";
  
  s3Auth()
  
  // 2. 기초 처리
  const dispatch = useDispatch();

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
      // imageUrl: userInfo.imageUrl,
      // nickname: userInfo.nickname,
    },
    title: '',
    instrument: ''
  })
  
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
      setaudioInfo({
        ...audioInfo,
        title: e.target.files[0].name
      })
    }

    if (e.target.files) {
      
      let file = e.target.files[0];
      let reader = new FileReader();

      reader.onloadend = (e) => {
        setFile(file);
        
      }
      
      reader.readAsDataURL(file);
      setChanged(true)
    }
  }

  // s3에 파일 전송 후 url을 받아옴
  async function handleFileInput() {
    s3Send(userid, file).then(function (res: string) {
      setFileUrl(res)
    });
  }

  // 저장 로직
  const onClickSave = () => {
    // 파일 input에 변경사항이 있으면
    if (changed === true) {
      // s3에 파일 전송 후 url을 받아옴
      handleFileInput()
      // url로 audio객체 생성
      var uploadedAudio = new Audio(fileUrl)
      setAudio(uploadedAudio)
      // 업로드 후 url 받아와 audio객체까지 만들었으니 true
      setUploaded(true)
    }
  }

  useEffect(() => {
    console.log(audio)
  }, [uploaded])


  const onClickPlay = () => {
    if (audio) {
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(_ => {
            // Automatic playback started!
            // Show playing UI.
            console.log("audio played auto");
          })
          .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
            console.log("playback prevented");
          });
      }
    }
  }
    
  const onClickStop = () => {
    if (audio) {
      audio.pause() 
    }
  }
    // test: 받아오기
    // const downloadAudio = async () => {
    //   const response = await axios.get(fileUrl)

    //   return response
    // }

    // console.log(downloadAudio())

  return (
    <>
      <input
        placeholder="타이틀을 입력하세요"
        onFocus={(e) => {
          e.target.placeholder = '';
        }}
        onBlur={(e) => {
          e.target.placeholder = '타이틀을 입력하세요';
        }}
        type="text"
        // value가 null이 되지 않게 처리
        value={audioInfo.title ? audioInfo.title : ''}
        name="title"
        onChange={onChangeAudioTitle}
      />

      {/* 미리 듣기 */}
      <audio controls>
        <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3" type="audio/mpeg" />
      </audio>
      <p>파일주소: {fileUrl}</p>
      <p>유저정보: {userid}</p>
      {/* 파일 업로드 */}
      <label className="cbtn-sm cbtn-primary" htmlFor="input-file" >
      </label>
      <input type="file" id="input-file" onChange={processAudio} />
      {/* <button onClick={removeFile}>파일삭제</button> */}
      {changed
        ? <button onClick={onClickSave} >저장</button>
        : <button>저장불가능</button>
      }
      {uploaded
        ? <div>
          <div className="loading">
            <div className="spinner"></div>
          </div>
          <div className="play-pause-btn" onClick={onClickPlay}>  
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
              <path fill="#566574" fill-rule="evenodd" d="M18 12L0 24V0" className="play-pause-icon" id="playPause"/>
            </svg>
          </div>
            <button onClick={onClickStop} >일시정지</button>
          </div>
        : <button>재생불가능</button>
      }
    </>
  );
}

export default AudioUpload;

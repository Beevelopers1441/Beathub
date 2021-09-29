import React, {useState, useEffect} from 'react';

// component

// types

// styles

// libraries
import AWS from 'aws-sdk';
import axios from 'axios';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { ConstructionOutlined } from '@mui/icons-material';

interface Props {
}

function AudioUpload(): React.ReactElement {

  // 1. S3 인증
  // S3 기본 정보
  var albumBucketName = "beathub-bucket";
  var bucketRegion = "ap-northeast-2";

  // Cognito 연동으로 S3 접근 권한을 얻는 부분
  AWS.config.update({
    region: bucketRegion,
    accessKeyId: "AKIAZHROONISQWM5MHCZ",
    secretAccessKey: "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"
    // accessKeyId: process.env.AWS_AUTH_URL,
    // secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  })

  var s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: albumBucketName },
    // accessKeyId: process.env.AWS_AUTH_URL,      // should be:  process.env.AWS_ACCESS_ID
    // secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
  });

  // 2. 기초 처리
  const dispatch = useDispatch();

  // 유저정보 리덕스에서 가져오기
  const userInfo = useSelector((state: any) =>  console.log(state.user.userInfo));

  // 오디오 파일 생성
  const audioplayer = new Audio();
  audioplayer.src = './dump.mp3';
  
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
  // 값이 바뀌었으면 true
  const [changed, setChanged] = useState(false)
  
  // 타이틀 입력
  const onChangeAudioTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setaudioInfo({
      ...audioInfo,
      title: e.target.value
    })
  }
  
  // let audio = `https://${albumBucketName}.s3.${bucketRegion}.amazonaws.com/${userInfo.userId}/${userInfo.userId}_audio.jpg`
  
  // 이미지 미리보기
  const [fileUrl, setFileUrl] = useState<string>('')
  const [file, setFile] = useState({});

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
        // setFileUrl(reader.result);
      }
      
      reader.readAsDataURL(file);
      setChanged(true)
    }
  }

  // 이미지 S3에 업로드
  // const userid = userInfo.userId;
  const userid = "userid";
  let albumAudiosKey = encodeURIComponent(userid) + "/";
  let audioKey = albumAudiosKey + userid + "_audio3.mp3";

  async function handleFileInput() {
    // AWS sdk에 포함된 함수로 파일을 업로드하는 부분
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: albumBucketName,
        Key: audioKey,
        Body: file,
      },
    })
    upload.send(function(err, data) {
      console.log(err, data.Location);
      setFileUrl(data.Location)
      console.log(fileUrl)
    });
    const promise = upload.promise();
  
    promise.then(
      function (data) {
        console.log("Successfully uploaded photo.");
      },
      function (err) {
        return console.log("There was an error uploading your photo: ", err.message);
      }
    );
  }

  // 저장
  const onClickSave = () => {
    if (changed === true) {
      handleFileInput();
    }

    // test: 받아오기
    // const downloadAudio = async () => {
    //   const response = await axios.get(fileUrl)

    //   return response
    // }

    // console.log(downloadAudio())
  }



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
      <audio controls>
        <source src={fileUrl} type="audio/mpeg" />
      </audio>
      {/* 파일 업로드 */}
      <label className="cbtn-sm cbtn-primary" htmlFor="input-file" >
      </label>
      <input type="file" id="input-file" onChange={processAudio} />
      {/* <button onClick={removeFile}>파일삭제</button> */}
      {changed
        ? <button onClick={onClickSave} >저장</button>
        : <button>저장불가능</button>
      }
    </>
  );
}

export default AudioUpload;

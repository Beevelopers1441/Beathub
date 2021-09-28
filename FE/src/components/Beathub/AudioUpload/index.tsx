import React, {useState, useEffect} from 'react';

// component

// types

// styles

// libraries
import AWS from 'aws-sdk';

// redux
import { useDispatch, useSelector } from 'react-redux';

interface Props {
}

function AudioUpload(): React.ReactElement {
  // S3 기본 정보
  var albumBucketName = "beathub-bucket";
  var bucketRegion = "ap-northeast-2";
  // var IdentityPoolId = "ap-northeast-2:00a0ab54-d07b-4fbc-9601-4362640e9362";

  // Cognito 연동으로 S3 접근 권한을 얻는 부분
  AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: ''
    }),
  })

  var s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: albumBucketName },
  });


  const dispatch = useDispatch();

  // 유저정보 리덕스에서 가져오기
  const { userInfo } = useSelector((state: any) => state.user);

  // 업로드한 파일의 정보
  const [audioInfo, setaudioInfo] = useState({
    userInfo: {
      imageUrl: userInfo.imageUrl,
      nickname: userInfo.nickname,
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
  const [fileUrl, setFileUrl] = useState('')
  const [file, setFile] = useState('');

  function processImage(e: React.ChangeEvent<HTMLInputElement>): void {

    // 업로드 후 파일명을 이름으로 설정
    if (e.target.files) {
      setaudioInfo({
        ...audioInfo,
        title: e.target.files[0].name
      })
    }
    console.log(e.target.files)

    setChanged(true)
      
    // 파일명으로 바뀐 이름 반영
    // useEffect(() => {
    
    // },[audioInfo.title])

    
    // let reader = new FileReader();

    // reader.onloadend = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   setFile(file);
    //   setFileUrl(reader.result);
    // }
    // if(file)
    //   reader.readAsDataURL(file);
    // setChanged(true);
  }

  // 이미지 S3에 업로드
  const userid = userInfo.userId;
  let albumAudiosKey = encodeURIComponent(userid) + "/";
  let audioKey = albumAudiosKey + userid + "_audio.mp3";

  async function handleFileInput() {
    // AWS sdk에 포함된 함수로 파일을 업로드하는 부분
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: albumBucketName,
        Key: audioKey,
        Body: file,
      },
    })

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
    if (changed === true) handleFileInput();
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
        <source src={fileUrl} type='audio/mp3' />
      </audio>
      {/* 파일 업로드 */}
      <label className="cbtn-sm cbtn-primary" htmlFor="input-file" >
      </label>
      <input type="file" id="input-file" onChange={processImage} />
      {/* <button onClick={removeFile}>파일삭제</button> */}
      {changed
        ? <button onClick={onClickSave} >저장</button>
        : <button>저장불가능</button>
      }
    </>
  );
}

export default AudioUpload;

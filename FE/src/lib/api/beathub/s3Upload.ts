
import AWS from 'aws-sdk';

// S3 기본 정보
var albumBucketName = "beathub-bucket";
var bucketRegion = "ap-northeast-2";

export const s3Auth = async () => {
  // 1. S3 인증

  // Cognito 연동으로 S3 접근 권한을 얻는 부분
  AWS.config.update({
    region: bucketRegion,
    accessKeyId: process.env.REACT_APP_AWS_URL,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
  })

  var s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: albumBucketName },
  });
}

export const s3Send = async (userid:string, file:object) => {
  let fileUrl = ''

  // 이미지 S3에 업로드
  let albumAudiosKey = encodeURIComponent(userid) + "/";
  let audioKey = albumAudiosKey + userid + "_audio3.mp3";
  // AWS sdk에 포함된 함수로 파일을 업로드하는 부분
  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: albumBucketName,
      Key: audioKey,
      Body: file,
    },
  })
  const promise = upload.promise()
  
  await promise.then(
    function (data) {
      fileUrl = data.Location
      console.log("Successfully uploaded photo.");
    },
    function (err) {
      return console.log("There was an error uploading your photo: ", err.message);
    }
  );
  return fileUrl
}
    

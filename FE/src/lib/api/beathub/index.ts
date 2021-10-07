import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const TOKEN = localStorage.getItem('userToken');

interface BucketInfo {
  bpm: number,
  introduction: string,
  title: string,
}

interface CommitInfo {
  audioSettingInfos: [
    {
      audioId: number,
      high: number,
      low: number,
      mid: number,
      volume: number
    }
  ],
  introduction: string,
  title: string
}

interface AudioInfo {
  filename: string,
  filepath: string,
  instrumentType: string,
}

// 버킷 생성
const createBucket = async (payload: BucketInfo) => {
  const { bpm, introduction, title } = payload;
  const data = {
    bpm: bpm,
    introduction: introduction,
    title: title,
  }

  const config: any = {
    method: 'POST',
    url: `${BASE_URL}buckets`,
    data,
    headers: {
      Authorization: TOKEN,
    },
  }
  return await axios(config);
};


// 버킷 상세 조회
const getBucketInfo = async (bucketId: number) => {

  const config: any = {
    method: 'GET',
    url: `${BASE_URL}buckets/${bucketId}`,
    headers: {
      Authorization: TOKEN,
    },
  }
  return await axios(config);
};


// 커밋 생성
const createCommit = async (bucketId: number, payload: CommitInfo) => {
  const { audioSettingInfos, introduction, title } = payload;
  const data = {
    audioSettingInfos: audioSettingInfos,
    introduction: introduction,
    title: title,
  }

  console.log(typeof(bucketId))

  const config: any = {
    method: 'POST',
    url: `${BASE_URL}buckets/${bucketId}`,
    data,
    headers: {
      Authorization: TOKEN,
    },
  }
  return await axios(config);
};


// 버킷별 오디오 전체 조회
const getBucketAudios = async (bucketId: number) => {

  const config: any = {
    method: 'GET',
    url: `${BASE_URL}buckets/${bucketId}/audios`,
    headers: {
      Authorization: TOKEN,
    },
  }
  return await axios(config);
};


// 버킷 오디오 생성
const createBucketAudio = async (bucketId: number, payload: AudioInfo) => {
  const { filename, filepath, instrumentType } = payload;
  const data = {
    filename: filename,
    filepath: filepath,
    instrumentType: instrumentType,
  }

  console.log(data)
  
  const config: any = {
    method: 'POST',
    url: `${BASE_URL}buckets/${bucketId}/audios`,
    data,
    headers: {
      Authorization: TOKEN,
    },
  }
  return await axios(config);
};

export { createBucket, getBucketInfo, createCommit, getBucketAudios, createBucketAudio };
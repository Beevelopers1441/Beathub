import styled from 'styled-components';

const Wrapper = styled.div`
  border-top: 0.5px solid rgba(255, 255, 255, 0.2);
  padding: 1.2rem 0.5rem;
  margin-bottom: 1rem;

  &.holder {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & .audio.green-audio-player {
    width: 400px;
    min-width: 300px;
    height: 56px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .07);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 4px;
    user-select: none;
    -webkit-user-select: none;
    background-color: #fff;
    & .play-pause-btn {
      display: none;
      cursor: pointer;
    }
    & .spinner {
      width: 18px;
      height: 18px;
      background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/loading.png);
      background-size: cover;
      background-repeat: no-repeat;
      animation: spin 0.4s linear infinite;
    }
    & .slider {
      flex-grow: 1;
      background-color: #D8D8D8;
      cursor: pointer;
      position: relative;
      & .progress {
        background-color: #44BFA3;
        border-radius: inherit;
        position: absolute;
        pointer-events: none;
        & .pin {
          height: 16px;
          width: 16px;
          border-radius: 8px;
          background-color: #44BFA3;
          position: absolute;
          pointer-events: all;
          box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.32);
        }
      }
    }
    & .controls {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      line-height: 18px;
      color: #55606E;
      display: flex;
      flex-grow: 1;
      justify-content: space-between;
      align-items: center;
      margin-left: 24px;
      margin-right: 24px;
      & .slider {
        margin-left: 16px;
        margin-right: 16px;
        border-radius: 2px;
        height: 4px;
        & .progress {        
          width: 0;
          height: 100%;
          & .pin {
            right: -8px;
            top: -6px;
          }
        }
      }
      & span {
        cursor: default;
      }
    }
    & .volume {
      position: relative;
      & .volume-btn {
        cursor: pointer;
        &.open path {
          fill: #44BFA3;
        }
      }
      & .volume-controls {
        width: 30px;
        height: 135px;
        background-color: rgba(0, 0, 0, 0.62);
        border-radius: 7px;
        position: absolute;
        left: -3px;
        bottom: 52px;
        flex-direction: column;
        align-items: center;
        display: flex;
        &.hidden {
          display: none;
        }
        & .slider {
          margin-top: 12px;
          margin-bottom: 12px;
          width: 6px;
          border-radius: 3px;
          & .progress {
            bottom: 0;
            height: 100%;
            width: 6px;
            & .pin {
              left: -5px;
              top: -8px;
            }
          }
        }
      }    
    }
  }
`;




// svg, img {
//   display: block;
// }

// html, body {
//   height: 100%;
// }

// body {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: #F8FFAE;
//   background: -webkit-linear-gradient(-65deg, #43C6AC, #F8FFAE);
//   background: linear-gradient(-65deg, #43C6AC, #F8FFAE);
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }

// @keyframes spin {
//   from {
//     transform: rotateZ(0);
//   }
//   to {
//     transform: rotateZ(1turn);
//   }
// }

export default Wrapper;

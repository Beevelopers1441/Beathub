import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import EditFormInstItem from '../EditFormInstItem';

import Wrapper from './styles';
import { Popper, Fade, Typography, Paper, FormControl, InputLabel, Select, MenuItem, Grid, Button } from '@mui/material';
import add from 'assets/svgs/add.svg';

import { Instrument } from 'types';

import { updateInstList } from 'lib/api/userProfile';

import { refreshPageAction } from 'modules/user/actions'; // dispatch(refreshPageAction());

interface Props {
  instruments: Instrument[]
}


// 악기 목록을 Props로 받는다
const EditFormInstList: React.FC<Props> = ({ instruments }) => {
  
  const dispatch = useDispatch();

  const [instList, setInstList] = useState<Instrument[]>(instruments)

  const [instName, setInstName] = useState<string>("")
  const [ability, setAbility] = useState<string>("")

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);


  const handleChangeInstName = (e: any) => {
    setInstName(e.target.value as string)
  }

  const handleChangeAbility = (e: any) => {
    setAbility(e.target.value as string)
  }

  // 악기 삭제
  const deleteInst = (idx: number) => {
    setInstList(instruments.splice(idx, 1))
    updateInstList({instruments})
    .then(() =>{
      dispatch(refreshPageAction())
    })
  }

  // 저장 버튼 클릭 시
  const onClickSave = () => {
    if (instName !== "" && ability !== ""){
      var idx = -1
      instruments.every(instrument => { 
        idx += 1
        if(instName === instrument["instrument"]) {
          instruments.splice(idx,1)
          return false;
        }
        return false;
      })

      console.log('안녕', idx)

      instruments.push({ ability: ability,  instrument: instName })
      updateInstList({instruments})
      .then(() =>{
        dispatch(refreshPageAction())
      })
    }
    setOpen(false);
  }

  // 취소 버튼 클릭 시
  const onClickCancel = () => {
    setOpen(false);
    setInstName("")
    setAbility("")
  }

  // Prop으로 받은 악기 목록의 각각의 악기들을 InstrumentsItem으로 넘겨주는 함수
  const renderList = (): JSX.Element[] => {
    return instruments.map((instrument, index) => {
      const idx = index
      return(
        <EditFormInstItem instrument={instrument} idx={idx} key={index} deleteInst={deleteInst}></EditFormInstItem>
      )
    })
  }

  // popper 제어 함수
  const handleClick = () => (event : any) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
    setInstName("")
    setAbility("")
  };


  // 위의 함수를 리턴한다(각각의 악기를 아이템으로 보여준다)
  return (
    <Wrapper>

      <Popper open={open} style={{ width: 300 }} anchorEl={anchorEl} placement="right" transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 1 }}>
                <Grid container spacing={1}>
                  <Grid item xs={7}>
                    <FormControl fullWidth style={{ height: 60 }}>
                      <InputLabel id="demo-simple-select-label">악기</InputLabel>
                      <Select
                        style={{ height: 50 }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={instName}
                        label="instrument"
                        onChange={handleChangeInstName}
                      >
                        <MenuItem value="보컬">보컬</MenuItem>
                        <MenuItem value="키보드">키보드</MenuItem>
                        <MenuItem value="일렉기타">일렉기타</MenuItem>
                        <MenuItem value="어쿠스틱기타">어쿠스틱기타</MenuItem>
                        <MenuItem value="베이스">베이스</MenuItem>
                        <MenuItem value="드럼">드럼</MenuItem>
                        <MenuItem value="기타(etc)">기타(etc)</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={5}>
                    <FormControl fullWidth style={{ height: 60 }}>
                      <InputLabel id="demo-simple-select-label">숙련도</InputLabel>
                      <Select
                        style={{ height: 50 }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={ability}
                        label="ability"
                        onChange={handleChangeAbility}
                      >
                        <MenuItem value="Junior">Junior</MenuItem>
                        <MenuItem value="Senior">Senior</MenuItem>
                        <MenuItem value="Master">Master</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid container
                    direction="row"
                    justifyContent="center"
                  >
                    <Grid item xs={3}>
                      <Button variant="contained" color="secondary" onClick={onClickSave}>
                        Save
                      </Button>
                    </Grid>
                    <Grid item xs={3}>
                      <Button variant="outlined" color="secondary" onClick={onClickCancel}>
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>

      <div className="add-instrument-wrapper post-p">
        <p>연주 악기</p>
        <img className="add-instrument-icon" src={add} alt="add" onClick={handleClick()}/>
      </div>
      <div className="instruments-subwrapper">
        {renderList()}
      </div>
    </Wrapper>
  )
}

export default EditFormInstList;
package com.beeveloper.beathub.instrument.controller;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.instrument.dto.InstrumentResDto;
import com.beeveloper.beathub.instrument.service.InstrumentService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Api(value = "악기 관련 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/instruments")
public class InstrumentController {

    private final InstrumentService instrumentService;

    @GetMapping()
    @ApiOperation(value = "악기 목록 조회", notes = "DB에 등록된 악기 목록 조회")
    public ResponseEntity<List<InstrumentResDto>> readAllInstruments() {
        List<Instrument> instruments = instrumentService.findAllInstruments();
        return ResponseEntity.status(200).body(InstrumentResDto.of(instruments));
    }
}

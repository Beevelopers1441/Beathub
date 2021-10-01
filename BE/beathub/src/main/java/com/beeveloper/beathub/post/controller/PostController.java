package com.beeveloper.beathub.post.controller;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.service.BandService;
import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.instrument.service.InstrumentService;
import com.beeveloper.beathub.post.domain.BandPost;
import com.beeveloper.beathub.post.domain.Comment;
import com.beeveloper.beathub.post.domain.MemberPost;
import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.post.dto.request.*;
import com.beeveloper.beathub.post.dto.response.*;
import com.beeveloper.beathub.post.service.PostService;
import com.beeveloper.beathub.user.domain.Ability;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.UserInstrument;
import com.beeveloper.beathub.user.jwts.JwtService;
import com.beeveloper.beathub.user.service.UserInstrumentService;
import com.beeveloper.beathub.user.service.UserServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Api(value = "게시판 관련 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("api/posts")
@CrossOrigin(origins = "*")
public class PostController {

    private final PostService postService;
    private final JwtService jwtService;
    private final UserServiceImpl userService;
    private final BandService bandService;
    private final InstrumentService instrumentService;
    private final UserInstrumentService userInstrumentService;

    // 생성
    @PostMapping("/members")
    @ApiOperation(value = "개인이 팀구하는 글 생성", notes = "인증한 사용자를 글쓴이로 하는 구인글 생성")
    public ResponseEntity createMemberPost(
            @RequestHeader(value = "Authorization") String jwtToken,
            @RequestBody @ApiParam(value = "개인 구인글 생성 정보", required = true) MemberPostInputDto inputInfo) {
        // 로그인하지 않은 유저라면
        if (jwtToken == null) {
            return (ResponseEntity<MemberPostResDto>) ResponseEntity.status(401);
        }

        // 로그인을 했다면 JWT를 통해 User, Tag 를 확인
        Optional<User> searchUser = jwtService.returnUser(jwtToken);
        if (!searchUser.isPresent()) {
            return ResponseEntity.badRequest().body("회원가입을 해주세요!");
        }
        User author = searchUser.get();
        Instrument tag = instrumentService.findByType(inputInfo.getTag());

        List<UserInstrument> instruments = author.getInstruments();
        List<Instrument> myInstrumentList = new ArrayList<>();
        for (UserInstrument instrument : instruments) {
            myInstrumentList.add(instrument.getInstrument());
        }
        if (!myInstrumentList.contains(tag)) {
            UserInstrument userInstrument = UserInstrument.builder()
                    .instrument(tag)
                    .player(author)
                    .ability(Ability.Senior)
                    .build();
            userInstrumentService.save(userInstrument);
        }


        // 새로운 dto를 생성
        // 들어온 reqDto는 InputDto
        MemberPostCreateDto dto = new MemberPostCreateDto(
                author,
                inputInfo.getTitle(),
                inputInfo.getContent(),
                tag
        );
        MemberPost memberPost = postService.createMemberPost(dto);
        return ResponseEntity.status(201).body(MemberPostResDto.of(memberPost));
    }

    @PostMapping("/bands")
    @ApiOperation(value = "밴드가 구인하는 글 생성", notes = "인증한 사용자가 선택한 밴드를 글쓴이로 하는 구인글 생성")
    public ResponseEntity createBandPost(
            @RequestHeader(value = "Authorization") String jwtToken,
            @RequestBody @ApiParam(value = "밴드 구인글 생성 정보", required = true) BandPostInputDto inputInfo) {

        // 로그인하지 않은 유저라면
        if (jwtToken == null) {
            return ResponseEntity.status(401).body("로그인을 해주세요!");
        }

        Optional<User> searchUser = jwtService.returnUser(jwtToken);
        if (!searchUser.isPresent()) {
            return ResponseEntity.badRequest().body("회원가입을 해주세요!");
        }
        User author = searchUser.get();


        // 로그인을 했다면, 밴드, Tag 찾기
        Band band = bandService.findByName(inputInfo.getBandName());
        Instrument tag = instrumentService.findByType(inputInfo.getTag());


        BandPostCreateDto dto = new BandPostCreateDto(
                band,
                inputInfo.getTitle(),
                inputInfo.getContent(),
                tag
        );

        BandPost bandPost = postService.createBandPost(author, dto);
        return ResponseEntity.status(201).body(BandPostResDto.of(bandPost));
    }

    @PostMapping("/{postId}")
    @ApiOperation(value = "댓글 생성", notes = "해당 경로의 글에 달리는 댓글 생성")
    public ResponseEntity createComment(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable @ApiParam(value = "글 id") Long postId,
            @RequestBody @ApiParam(value = "댓글 생성 정보", required = true) CommentCreateDto commentInfo) {

        Optional<User> searchUser = jwtService.returnUser(jwtToken);
        if (!searchUser.isPresent()) {
            return ResponseEntity.badRequest().body("존재하지 않는 사용자 입니다.");
        }
        User user = searchUser.get();
        Comment comment = postService.createComment(user.getId(), postId, commentInfo);
        return ResponseEntity.status(201).body(CommentResDto.of(comment));
    }

    // 조회
    @GetMapping("/members")
    @ApiOperation(value = "개인이 팀구하는 글 조회", notes = "개인 구인글을 전체 조회")
    public ResponseEntity<List<MemberPostResDto>> readAllMemberPost() {
        List<MemberPost> memberPosts = postService.findAllMemberPost();
        return ResponseEntity.status(200).body(MemberPostResDto.of(memberPosts));
    }

    @GetMapping("/bands")
    @ApiOperation(value = "밴드가 구인하는 글 조회", notes = "밴드 구인글 전체 조회")
    public ResponseEntity<List<BandPostResDto>> readAllBandPost() {
        List<BandPost> bandPosts = postService.findAllBandPost();
        return ResponseEntity.status(200).body(BandPostResDto.of(bandPosts));
    }

    @GetMapping("/members/{postId}")
    @ApiOperation(value = "개인이 팀구하는 글 상세 조회", notes = "url 경로의 id를 가진 개인 구인글 상세 조회")
    public ResponseEntity<MemberPostResDto> readMemberPost(
            @PathVariable @ApiParam(value = "밴드 구인글 생성 정보", required = true) Long postId) {
        MemberPost memberPost = postService.findMemberPost(postId);
        return ResponseEntity.status(200).body(MemberPostResDto.of(memberPost));
    }

    @GetMapping("/bands/{postId}")
    @ApiOperation(value = "밴드가 구인하는 글 상세 조회", notes = "url 경로의 id를 가진 밴드 구인글 상세 조회")
    public ResponseEntity<BandPostResDto> readBandPost(@PathVariable Long postId) {
        BandPost bandPost = postService.findBandPost(postId);
        return ResponseEntity.status(200).body(BandPostResDto.of(bandPost));
    }


    // 수정
    @PutMapping("/{postId}")
    @ApiOperation(value = "구인글 수정, Band,Member 구인 모두 가능한 API")
    public ResponseEntity update(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable(value = "postId") Long postId,
            @RequestBody @ApiParam PostUpdateRequestDto dto) {

        Optional<User> searchUser = jwtService.returnUser(jwtToken);
        if (!searchUser.isPresent()) {
            return ResponseEntity.badRequest().body("회원가입을 해주세요!");
        }
        User requestUser = searchUser.get();
        Post post = postService.findById(postId);

        if (!requestUser.getId().equals(post.getAuthor().getId())) {
            return ResponseEntity.status(403).build();
        }

        return ResponseEntity.status(200).body(PostUpdateRequestDto.of(postService.updatePost(post, dto)));
    }

    // 삭제
    @DeleteMapping("/{postId}")
    @ApiOperation(value = "게시글 삭제")
    public void delete(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable(value = "postId") Long postId) {

        Optional<User> searchUser = jwtService.returnUser(jwtToken);
        if (!searchUser.isPresent()) {
            return;
        }
        User user = searchUser.get();
        Post post = postService.findById(postId);

        if (user.getId() != post.getAuthor().getId()) {
            return;
        }

        postService.delete(post);
    }

    // like

    @PostMapping("/{postId}/like")
    @ApiOperation(value = "게시글 좋아요 누르기")
    public void like(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable(value = "postId") Long postId) {

        Optional<User> searchUser = jwtService.returnUser(jwtToken);
        if (!searchUser.isPresent()) {
            return;
        }
        User user = searchUser.get();
        Post post = postService.findById(postId);

        userService.like(user, post);
    }

    @PostMapping("/{postId}/unlike")
    @ApiOperation(value = "게시글 좋아요 취소하기")
    public void unLike(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable(value = "postId") Long postId) {

        Optional<User> searchUser = jwtService.returnUser(jwtToken);
        if (!searchUser.isPresent()) {
            return;
        }
        User user = searchUser.get();
        Post post = postService.findById(postId);

        userService.unLike(user, post);
    }
}

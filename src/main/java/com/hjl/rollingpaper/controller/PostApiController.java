package com.hjl.rollingpaper.controller;


import com.hjl.rollingpaper.domain.post.PostRepository;
import com.hjl.rollingpaper.dto.PostSaveRequestDto;
import com.hjl.rollingpaper.dto.UserSaveRequestDto;
import com.hjl.rollingpaper.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
@RequiredArgsConstructor
@RestController
public class PostApiController {

    private final PostRepository postRepository;
    private final PostService postService;

    @PostMapping("/api/post")
    public List<String> getPost(@RequestBody PostSaveRequestDto requestDto){
        String postInfo = postRepository.showPosts(requestDto.getName());
        String[] temp = postInfo.split(","); //저장된 String값을 ,으로 잘라서 List로
        List<String> postArray = Arrays.asList(temp); // "

        return postArray;
    }

    @PostMapping("/api/post/doPost")
    public Long save(@RequestBody PostSaveRequestDto requestDto) {
        return postService.save(requestDto);
    }
};

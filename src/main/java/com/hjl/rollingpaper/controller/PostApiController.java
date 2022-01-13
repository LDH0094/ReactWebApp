package com.hjl.rollingpaper.controller;


import com.hjl.rollingpaper.domain.post.Post;
import com.hjl.rollingpaper.domain.post.PostRepository;
import com.hjl.rollingpaper.dto.PostSaveRequestDto;
import com.hjl.rollingpaper.dto.UserSaveRequestDto;
import com.hjl.rollingpaper.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
@RequiredArgsConstructor
@RestController
public class PostApiController {

    private final PostRepository postRepository;
    private final PostService postService;

    @PostMapping("/api/post")
    public List<Post> getPost(@RequestBody PostSaveRequestDto requestDto){
        List<Post> postInfo = postRepository.showPosts(requestDto.getName());
        return postInfo;
    }

    @PostMapping("/api/post/doPost")
    public Long save(@RequestBody PostSaveRequestDto requestDto) {
        return postService.save(requestDto);
    }

    @PostMapping("/api/post/update")
    public Long update(@RequestBody PostSaveRequestDto requestDto) {
        return postService.update(requestDto.getId(), requestDto.getText());
    }


};

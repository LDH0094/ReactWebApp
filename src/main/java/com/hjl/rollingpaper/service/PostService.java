package com.hjl.rollingpaper.service;

import com.hjl.rollingpaper.domain.post.PostRepository;
import com.hjl.rollingpaper.domain.user.UserRepository;
import com.hjl.rollingpaper.dto.PostSaveRequestDto;
import com.hjl.rollingpaper.dto.UserSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class PostService {
    private final PostRepository postRepository; //db

    @Transactional
    public Long save(PostSaveRequestDto requestDto){
        return postRepository.save(requestDto.toEntity()).getId();
    }
}

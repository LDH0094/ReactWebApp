package com.hjl.rollingpaper.service;

import com.hjl.rollingpaper.domain.post.Post;
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

    @Transactional
    public Long update(Long id, String text) {
        Post post = postRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("수정할 메뉴가 없다." + id));
        post.update(text);
        return id;
    }
    @Transactional
    public void delete(Long id) {
        Post menu = postRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("삭제할 데이터 없다." + id));
        postRepository.delete(menu);
    }
}

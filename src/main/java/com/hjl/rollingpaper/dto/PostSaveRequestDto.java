package com.hjl.rollingpaper.dto;

import com.hjl.rollingpaper.domain.post.Post;
import com.hjl.rollingpaper.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostSaveRequestDto {
    private Long id;
    private String text;
    private String color;
    private String time;
    private String name;

    @Builder
    public PostSaveRequestDto(Long id, String text, String color, String time, String name) {
        this.id = id;
        this.text = text;
        this.color = color;
        this.time = time;
        this.name = name;
    }

    public Post toEntity(){
        return Post.builder()
                .id(id)
                .text(text)
                .color(color)
                .time(time)
                .name(name)
                .build();
    }
}

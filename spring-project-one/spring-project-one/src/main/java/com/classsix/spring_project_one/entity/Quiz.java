package com.classsix.spring_project_one.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long quizId;
    @ManyToMany(
        cascade = CascadeType.ALL
    )
@JoinTable(
        name="quiz_quest_map",
        joinColumns = @JoinColumn(name="quiz_id",referencedColumnName = "quizId"),
        inverseJoinColumns = @JoinColumn(name="id",referencedColumnName = "id")
)
    private List<Question> questions;
    private String title;
}

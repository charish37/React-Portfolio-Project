package com.classsix.spring_project_one.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuestionWrapper {
        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE)
        private long id;
        private String questionTitle;
        private String option1;
        private String option2;
        private String option3;
        private String option4;

}

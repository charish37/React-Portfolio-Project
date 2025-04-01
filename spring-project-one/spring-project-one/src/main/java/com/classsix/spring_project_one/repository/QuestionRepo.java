package com.classsix.spring_project_one.repository;

import com.classsix.spring_project_one.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuestionRepo extends JpaRepository<Question,Long> {
//    @Query("select q from Question q where q.category = ?1")
//    List<Question> getQuestionsByCategory(String category);

    List<Question> findByCategory(String category);
}

package com.classsix.spring_project_one.repository;

import com.classsix.spring_project_one.entity.Question;
import com.classsix.spring_project_one.entity.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuizRepository extends JpaRepository<Quiz,Long> {

    @Query(value = "SELECT * FROM question q WHERE q.category=:category ORDER BY RAND()", nativeQuery = true)
    List<Question> findRandomQuestionByCategory(@Param("category") String category);

}

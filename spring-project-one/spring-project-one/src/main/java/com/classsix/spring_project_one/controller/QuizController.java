package com.classsix.spring_project_one.controller;

import com.classsix.spring_project_one.entity.Question;
import com.classsix.spring_project_one.entity.QuestionWrapper;
import com.classsix.spring_project_one.entity.Response;
import com.classsix.spring_project_one.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @PostMapping("/create")
    public ResponseEntity<String> createQuiz(@RequestParam String category,@RequestParam int numQ, @RequestParam String title){
        return quizService.createQuiz(category,numQ,title);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(@PathVariable Long id){
        return quizService.getQuizQuestions(id);
    }

    @PostMapping("submit/{id}")
    public ResponseEntity<Integer> sumbitQuiz(@PathVariable Long id, @RequestBody List<Response> responses){
        return quizService.calculateResult(id,responses);
    }
}

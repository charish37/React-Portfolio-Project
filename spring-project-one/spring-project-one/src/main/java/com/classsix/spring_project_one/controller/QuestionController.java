package com.classsix.spring_project_one.controller;

import com.classsix.spring_project_one.entity.Question;
import com.classsix.spring_project_one.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("question")
public class QuestionController {

    @Autowired
    public QuestionService questionService;

    @GetMapping("/allQuestions")
    public ResponseEntity<List<Question>> getAllQuestions(){
        return questionService.getAllQuestions();
    }

    @PostMapping("/addQuestion")
    public ResponseEntity<String> addQuestion(@RequestBody Question question){
        return questionService.addQuestion(question);
    }

    @PostMapping("/addMoreQuestions")
    public ResponseEntity<String> addQuestions(@RequestBody List<Question> questions){
        return questionService.addAllQuestions(questions);
    }

    // Use @RequestParam fro /category?category=Java
    // Use @PathVariable for /category/Java
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Question>> getQuestionsByCategory(@PathVariable String category) {
        return questionService.getQuestionsByCategory(category);
    }
}

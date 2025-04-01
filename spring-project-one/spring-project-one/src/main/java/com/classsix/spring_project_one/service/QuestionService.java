package com.classsix.spring_project_one.service;

import com.classsix.spring_project_one.entity.Question;
import com.classsix.spring_project_one.repository.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepo questionRepo;

    public ResponseEntity<List<Question>> getAllQuestions() {
        try{
            return new ResponseEntity<>(questionRepo.findAll(), HttpStatus.OK);
        } catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);

    }

    public ResponseEntity<String> addQuestion(Question question) {
        try{
            questionRepo.save(question);
            return new ResponseEntity<>("Success in adding question", HttpStatus.CREATED);
        } catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>("Error in adding question", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> addAllQuestions(List<Question> questions) {
        try{
            questionRepo.saveAll(questions);
            return new ResponseEntity<>("Success in adding questions", HttpStatus.CREATED);
        } catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>("Error in adding questions", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<List<Question>> getQuestionsByCategory(String category) {
        try{
            return new ResponseEntity<>(questionRepo.findByCategory(category), HttpStatus.OK);
        } catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);

    }
}

package com.example.spa.endpoints;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spa.models.Student;
import com.example.spa.services.StudentService;

@RestController
@RequestMapping("students")
public class StudentApi {
	
	@Autowired
	private StudentService studentService;
	
	@GetMapping
	public List<Student> getStudents(){
		return studentService.getStudentsList();
	}
	
	@GetMapping("{id}")
	public Student getStudent(@PathVariable int id){
		return studentService.getStudent(id);
	}
	
	@DeleteMapping("{id}")
	public Student deleteStudent(@PathVariable int id){
		return studentService.deleteStudent(id);
	}
	
}

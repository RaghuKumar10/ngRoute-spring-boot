package com.example.spa.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.spa.models.Student;

@Service
public class StudentService {
	private static List<Student> students = new ArrayList<>();
	
	static{
		students.add(new Student(1, "naveen", 27));
		students.add(new Student(2, "manu", 26));
		students.add(new Student(3, "manoj", 28));
		students.add(new Student(4, "pradeep", 25));
		students.add(new Student(5, "praveen", 26));
		students.add(new Student(6, "prasanth", 29));
		students.add(new Student(7, "ravi", 28));
		students.add(new Student(8, "jack", 28));
		students.add(new Student(7, "raghu", 26));
	}
	
	public List<Student> getStudentsList(){
		return students;
	}
	
	public Student getStudent(int id){
		for(Student student : students){
			if(student.getId() == id){
				return student;
			}
		}
		return null;
	}
	
	public Student deleteStudent(int id){
		Student student = null;
		for(int i = 0; i < students.size(); i++){
			student = students.get(i);
			if(student.getId() == id){
				students.remove(i);
				break;
			}
		}
		return student;
	}

	public static void setStudents(List<Student> students) {
		StudentService.students = students;
	}
	
}

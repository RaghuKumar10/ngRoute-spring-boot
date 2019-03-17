package com.example.spa.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CourseService {
	
	private static List<String> courses = new ArrayList<>();
	
	static{
		courses.add("Java");
		courses.add("J2EE");
		courses.add("Spring");
		courses.add("Jersey");
		courses.add("Hibernate");
		courses.add("AngularJs");
		courses.add("JavaScript");
	}
	
	public List<String> getAllCourse(){
		return courses;
	}
	
}

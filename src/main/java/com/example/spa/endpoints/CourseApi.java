package com.example.spa.endpoints;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spa.services.CourseService;

@RestController
public class CourseApi {
	
	@Autowired
	private CourseService courseService;
	
	@RequestMapping("/courses")
	public List<String> getCourses(){
		return courseService.getAllCourse();
	}
}

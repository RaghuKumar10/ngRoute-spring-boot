package com.example.spa.endpoints;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReDirection {
	
	 @RequestMapping(value = "/{[path:[^\\.]*}")
	public String redirect() {
	  return "forward:/";
	}
}

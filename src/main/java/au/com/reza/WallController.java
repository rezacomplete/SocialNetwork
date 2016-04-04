package au.com.reza;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;

import au.com.reza.entity.Wall;

@RestController
@EnableAutoConfiguration
public class WallController {

	@RequestMapping(value="/addComment", method=RequestMethod.POST)
    public String addCommentToWall(@RequestBody Wall wall) {
		// TODO save message
		System.out.println(wall.getComment());
        return wall.getComment();
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(WallController.class, args);
    }

}   

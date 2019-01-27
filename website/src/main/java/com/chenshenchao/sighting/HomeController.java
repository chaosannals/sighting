package com.chenshenchao.sighting;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/${sighting.query.base}")
public class HomeController {
    @RequestMapping(value="int.json")
    public int getInt() {
        return 123;
    }
}

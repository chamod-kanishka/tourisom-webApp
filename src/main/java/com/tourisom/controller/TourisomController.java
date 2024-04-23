package com.tourisom.controller;

import com.tourisom.model.Tourisom;
import com.tourisom.service.TourisomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/tourisoms")
public class TourisomController {

    @Autowired
    private TourisomService tourisomService;

    @GetMapping
    public List<Tourisom> getAllTourisoms() {
        return tourisomService.getAllTourisoms();
    }

    @GetMapping("/{id}")
    public Tourisom getTourisomById(@PathVariable Integer id) {
        return tourisomService.getTourisomById(id);
    }

    @PostMapping
    public Tourisom addTourisom(@RequestBody Tourisom tourisom) {
        return tourisomService.addTourisom(tourisom);
    }

    @PutMapping("/{id}")
    public Tourisom updateTourisom(@PathVariable Integer id, @RequestBody Tourisom tourisom) {
        return tourisomService.updateTourisom(id, tourisom);
    }

    @DeleteMapping("/{id}")
    public void deleteTourisom(@PathVariable Integer id) {
        tourisomService.deleteTourisom(id);
    }
    
    @GetMapping("/search")
    public List<Tourisom> searchTourisoms(@RequestParam String keyword) {
        return tourisomService.searchTourisoms(keyword);
    }
}

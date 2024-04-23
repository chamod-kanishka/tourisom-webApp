package com.tourisom.service;

import com.tourisom.model.Tourisom;
import com.tourisom.repository.TourisomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TourisomService  {

    @Autowired
    private TourisomRepository tourisomRepository;

    public List<Tourisom> getAllTourisoms() {
        return tourisomRepository.findAll();
    }

    public Tourisom getTourisomById(Integer id) {
        Optional<Tourisom> optionalTourisom = tourisomRepository.findById(id);
        return optionalTourisom.orElse(null);
    }

    public Tourisom addTourisom(Tourisom tourisom) {
        return tourisomRepository.save(tourisom);
    }

    public Tourisom updateTourisom(Integer id, Tourisom tourisom) {
        tourisom.setTripId(id);
        return tourisomRepository.save(tourisom);
    }

    public void deleteTourisom(Integer id) {
        tourisomRepository.deleteById(id);
    }
    
    public List<Tourisom> searchTourisoms(String keyword) {
        return tourisomRepository.findByTourNameContainingIgnoreCaseOrLocationContainingIgnoreCase(keyword, keyword);
    }
}

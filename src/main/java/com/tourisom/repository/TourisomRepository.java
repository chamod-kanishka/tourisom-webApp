package com.tourisom.repository;

import com.tourisom.model.Tourisom;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TourisomRepository extends JpaRepository<Tourisom, Integer> {
    List<Tourisom> findByTourNameContainingIgnoreCaseOrLocationContainingIgnoreCase(String tourName, String location);

}
